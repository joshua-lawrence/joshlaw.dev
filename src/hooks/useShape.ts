import { Quaternion, fromEulerDegrees, multiplyQuaternion } from "@/lib/quaternion";
import { Vertex, rotateVertices } from "@/lib/vertex";
import { SHAPES } from "@/lib/geometry";
import { useCallback, useEffect, useRef, useState } from "react";
import usePointerDrag from "@/hooks/usePointerDrag";

const FRICTION = 0.99;
const BLEND_SPEED = 0.3;
const MOMENTUM_THRESHOLD = 0.001;
const MAX_DT_MS = 50;
const FRAME_MS = 16.67;

export default function useShape(shapeVertices: Vertex[] = SHAPES[0].vertices) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<Quaternion>({ w: 1, x: 0, y: 0, z: 0 });
  const shapeRef = useRef(shapeVertices);
  const [vertices, setVertices] = useState<Vertex[]>(
    [...shapeVertices]
  );

  useEffect(() => {
    shapeRef.current = shapeVertices;
    setVertices(rotateVertices(shapeVertices, rotationRef.current));
  }, [shapeVertices]);

  const applyRotation = useCallback(() => {
    setVertices(rotateVertices(shapeRef.current, rotationRef.current));
  }, []);

  const rotate = useCallback(
    (x: number, y: number, z: number) => {
      rotationRef.current = multiplyQuaternion(
        fromEulerDegrees(x, y, z),
        rotationRef.current
      );
      applyRotation();
    },
    [applyRotation]
  );

  const { isDragging, isDraggingRef, angularVelocityRef } = usePointerDrag(
    containerRef,
    rotate
  );

  useEffect(() => {
    let animationFrameId: number;
    let prevTime = performance.now();
    const startTime = prevTime;

    const animate = () => {
      const now = performance.now();
      const dt = Math.min(now - prevTime, MAX_DT_MS) / FRAME_MS;
      prevTime = now;

      if (!isDraggingRef.current) {
        const v = angularVelocityRef.current;
        const speed = Math.sqrt(v.x * v.x + v.y * v.y);

        const t = (now - startTime) * 0.0001;
        const idleX = (Math.sin(t * 1.3) * 0.7 + 0.35) * dt;
        const idleY = (Math.cos(t * 0.7) * 0.5 + 0.25) * dt;
        const idleZ = Math.sin(t * 0.9 + 2) * 0.2 * dt;

        if (speed > MOMENTUM_THRESHOLD) {
          const friction = Math.pow(FRICTION, dt);
          angularVelocityRef.current = {
            x: v.x * friction,
            y: v.y * friction,
          };

          const blend = Math.min(speed / BLEND_SPEED, 1);
          rotate(
            v.x * dt * blend + idleX * (1 - blend),
            v.y * dt * blend + idleY * (1 - blend),
            idleZ * (1 - blend)
          );
        } else {
          angularVelocityRef.current = { x: 0, y: 0 };
          rotate(idleX, idleY, idleZ);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [rotate, isDraggingRef, angularVelocityRef]);

  return { vertices, containerRef, isDragging };
}
