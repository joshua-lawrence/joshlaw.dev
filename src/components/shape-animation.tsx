"use client";
import { cn } from "@/lib/cn";
import useShape from "@/hooks/useShape";
import { Vertex } from "@/lib/vertex";

export default function ShapeAnimation({
  shapeVertices,
}: {
  shapeVertices?: Vertex[];
}) {
  const PLANE = 100;
  const SCALE = 50;
  const { vertices, containerRef, isDragging } = useShape(shapeVertices);

  function project(v: Vertex) {
    return {
      x: (PLANE * v.x) / (v.z + PLANE),
      y: (PLANE * v.y) / (v.z + PLANE),
    };
  }

  const vertex = (v: Vertex, i: number) => {
    const { x, y } = project(v);
    return (
      <div
        key={i}
        className="select-none pointer-events-none opacity-60"
        style={{
          position: "absolute",
          left: `${x * SCALE}px`,
          top: `${y * SCALE}px`,
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
        }}
        aria-hidden="true"
      >
        #
      </div>
    );
  };

  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full",
        isDragging ? "cursor-grabbing z-50 touch-none" : "cursor-grab z-0",
        "select-none touch-none",
        "pointer-events-auto",
      )}
      style={{
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
      }}
      ref={containerRef}
    >
      <div
        className="relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-fit"
        style={{ pointerEvents: isDragging ? "none" : "auto" }}
      >
        {vertices.map(vertex)}
      </div>
    </div>
  );
}
