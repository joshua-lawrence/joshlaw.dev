import { Vertex } from "@/lib/vertex";

export type RectangularPrism = [
  Vertex,
  Vertex,
  Vertex,
  Vertex,
  Vertex,
  Vertex,
  Vertex,
  Vertex
];

export const CUBE_VERTICES: RectangularPrism = [
  { x: -1, y: -1, z: -1 },
  { x: 1, y: -1, z: -1 },
  { x: 1, y: 1, z: -1 },
  { x: -1, y: 1, z: -1 },
  { x: -1, y: -1, z: 1 },
  { x: 1, y: -1, z: 1 },
  { x: 1, y: 1, z: 1 },
  { x: -1, y: 1, z: 1 },
];

export const CUBE_FACES = [
  [0, 1, 2, 3],
  [1, 5, 6, 2],
  [5, 4, 7, 6],
  [4, 0, 3, 7],
  [3, 2, 6, 7],
  [0, 4, 5, 1],
];

export function degreesToRadians(d: number) {
  return d * (Math.PI / 180);
}
