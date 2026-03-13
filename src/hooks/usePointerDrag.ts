import { useEffect, useRef, useState } from "react";

type PointerPosition = {
  clientX: number;
  clientY: number;
  timestamp: number;
};

const SENSITIVITY = 0.5;
const HISTORY_WINDOW_MS = 100;
const MIN_FLING_DURATION_MS = 10;
const FRAME_MS = 16.67;

export default function usePointerDrag(
  containerRef: React.RefObject<HTMLDivElement | null>,
  onDrag: (rx: number, ry: number, rz: number) => void
) {
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef<PointerPosition>({
    clientX: 0,
    clientY: 0,
    timestamp: 0,
  });
  const pointerHistoryRef = useRef<PointerPosition[]>([]);
  const angularVelocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button === 0 || event.pointerType === "touch") {
        setIsDragging(true);
        isDraggingRef.current = true;
        angularVelocityRef.current = { x: 0, y: 0 };
        pointerHistoryRef.current = [];
        prevPointerRef.current = {
          clientX: event.clientX,
          clientY: event.clientY,
          timestamp: event.timeStamp,
        };
        container.setPointerCapture(event.pointerId);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = event.clientX - prevPointerRef.current.clientX;
      const deltaY = event.clientY - prevPointerRef.current.clientY;

      onDrag(-deltaY * SENSITIVITY, deltaX * SENSITIVITY, 0);

      pointerHistoryRef.current.push({
        clientX: event.clientX,
        clientY: event.clientY,
        timestamp: event.timeStamp,
      });
      const cutoff = event.timeStamp - HISTORY_WINDOW_MS;
      pointerHistoryRef.current = pointerHistoryRef.current.filter(
        (p) => p.timestamp >= cutoff
      );

      prevPointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
        timestamp: event.timeStamp,
      };
    };

    const handlePointerUp = (event: PointerEvent) => {
      try {
        container.releasePointerCapture(event.pointerId);
      } catch {}

      const history = pointerHistoryRef.current;
      if (history.length >= 2) {
        const first = history[0];
        const last = history[history.length - 1];
        const dt = last.timestamp - first.timestamp;
        if (dt > MIN_FLING_DURATION_MS) {
          const perFrame = FRAME_MS / dt;
          angularVelocityRef.current = {
            x: -(last.clientY - first.clientY) * SENSITIVITY * perFrame,
            y: (last.clientX - first.clientX) * SENSITIVITY * perFrame,
          };
        }
      }
      pointerHistoryRef.current = [];

      setIsDragging(false);
      isDraggingRef.current = false;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointerleave", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerUp);

    return () => {
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointerleave", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [containerRef, onDrag]);

  return { isDragging, isDraggingRef, angularVelocityRef };
}
