"use client";
import ShapeAnimation from "@/components/shape-animation";
import { SHAPES } from "@/lib/geometry";
import { useState } from "react";

const shapeIcons: Record<string, React.ReactNode> = {
  cube: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12v9M4 7.5l8 4.5 8-4.5" />
    </svg>
  ),
  tetrahedron: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M12 3L3 20h18z" />
      <path d="M12 3v17" />
    </svg>
  ),
  octahedron: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M12 2l10 10-10 10L2 12z" />
    </svg>
  ),
  icosahedron: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M12 2l9 6v8l-9 6-9-6V8z" />
      <path d="M12 2v20M3 8l9 4 9-4M3 16l9-4 9 4" />
    </svg>
  ),
  teapot: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17h10c1-2 2-4.5 2-7H5c0 2.5 1 5 2 7z" />
      <path d="M7 10c0-2 2-3.5 5-3.5s5 1.5 5 3.5" />
      <path d="M17 12c1.5 0 3 .5 3 2s-1.5 2-3 2" />
      <path d="M7 12c-1.5 0-3 .5-3 2s1.5 2 3 2" />
      <circle cx="12" cy="4.5" r="1" />
    </svg>
  ),
};

export default function Header() {
  const [shapeIndex, setShapeIndex] = useState(0);

  return (
    <div
      className="w-full"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <div className="relative h-[min(45vh,400px)]">
        <ShapeAnimation shapeVertices={SHAPES[shapeIndex].vertices} />
        <div className="absolute bottom-3 right-3 z-50 flex gap-0.5 pointer-events-auto">
          {SHAPES.map((shape, i) => (
            <div key={shape.name} className="relative group">
              <button
                onClick={() => setShapeIndex(i)}
                className={`p-1.5 rounded transition-opacity cursor-pointer ${
                  i === shapeIndex
                    ? "opacity-60"
                    : "opacity-25 hover:opacity-50"
                }`}
                aria-label={shape.name}
              >
                {shapeIcons[shape.name]}
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-[9px] tracking-wide text-foreground/70 bg-background/90 backdrop-blur-sm border border-foreground/[0.08] rounded-md whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                {shape.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
