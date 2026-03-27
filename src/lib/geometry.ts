import { Vertex } from "@/lib/vertex";

export function degreesToRadians(d: number) {
  return d * (Math.PI / 180);
}

const TARGET_RADIUS = Math.sqrt(3);

function scale(vertices: Vertex[], radius = TARGET_RADIUS): Vertex[] {
  const max = Math.max(
    ...vertices.map((v) => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z))
  );
  const s = radius / max;
  return vertices.map((v) => ({ x: v.x * s, y: v.y * s, z: v.z * s }));
}

const PHI = (1 + Math.sqrt(5)) / 2;

export type Shape = {
  name: string;
  vertices: Vertex[];
};

export const SHAPES: Shape[] = [
  {
    name: "cube",
    vertices: [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ],
  },
  {
    name: "tetrahedron",
    vertices: scale([
      { x: 1, y: 1, z: 1 },
      { x: 1, y: -1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
    ]),
  },
  {
    name: "octahedron",
    vertices: scale([
      { x: 0, y: 1, z: 0 },
      { x: 0, y: -1, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: -1, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 },
      { x: 0, y: 0, z: -1 },
    ]),
  },
  {
    name: "icosahedron",
    vertices: scale([
      { x: 0, y: 1, z: PHI },
      { x: 0, y: -1, z: PHI },
      { x: 0, y: 1, z: -PHI },
      { x: 0, y: -1, z: -PHI },
      { x: 1, y: PHI, z: 0 },
      { x: -1, y: PHI, z: 0 },
      { x: 1, y: -PHI, z: 0 },
      { x: -1, y: -PHI, z: 0 },
      { x: PHI, y: 0, z: 1 },
      { x: -PHI, y: 0, z: 1 },
      { x: PHI, y: 0, z: -1 },
      { x: -PHI, y: 0, z: -1 },
    ]),
  },
  {
    name: "teapot",
    vertices: (() => {
      const pts: Vertex[] = [];
      const ring = (y: number, r: number, n: number) => {
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          pts.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r });
        }
      };
      ring(-0.8, 0.0, 1);
      ring(-0.75, 0.45, 10);
      ring(-0.55, 0.85, 12);
      ring(-0.25, 1.05, 12);
      ring(0.05, 1.05, 12);
      ring(0.3, 0.9, 12);
      ring(0.55, 0.72, 12);
      ring(0.65, 0.65, 10);
      ring(0.72, 0.45, 8);
      ring(0.78, 0.25, 6);
      pts.push({ x: 0, y: 0.9, z: 0 });
      const spout = [
        { x: 1.05, y: 0.15, z: 0 },
        { x: 1.2, y: 0.05, z: 0 },
        { x: 1.35, y: 0.0, z: 0 },
        { x: 1.5, y: 0.05, z: 0 },
        { x: 1.6, y: 0.2, z: 0 },
        { x: 1.65, y: 0.4, z: 0 },
        { x: 1.6, y: 0.55, z: 0 },
        { x: 1.55, y: 0.65, z: 0 },
      ];
      for (const p of spout) {
        pts.push(p);
        pts.push({ x: p.x, y: p.y, z: 0.12 });
        pts.push({ x: p.x, y: p.y, z: -0.12 });
      }
      const handle = [
        { x: -1.0, y: 0.45, z: 0 },
        { x: -1.15, y: 0.55, z: 0 },
        { x: -1.3, y: 0.6, z: 0 },
        { x: -1.45, y: 0.55, z: 0 },
        { x: -1.55, y: 0.4, z: 0 },
        { x: -1.55, y: 0.2, z: 0 },
        { x: -1.45, y: 0.0, z: 0 },
        { x: -1.3, y: -0.1, z: 0 },
        { x: -1.15, y: -0.15, z: 0 },
        { x: -1.0, y: -0.1, z: 0 },
      ];
      for (const p of handle) {
        pts.push(p);
        pts.push({ x: p.x, y: p.y, z: 0.08 });
        pts.push({ x: p.x, y: p.y, z: -0.08 });
      }
      return scale(pts, TARGET_RADIUS * 1.4);
    })(),
  },
];
