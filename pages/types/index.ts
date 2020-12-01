import { Vector3 } from 'three';

export type ThreeVector3 =
  | Vector3
  | [x: number, y: number, z: number]
  | undefined;
