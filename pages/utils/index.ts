import { MutableRefObject } from 'react';
import { Mesh, Object3D } from 'three';
import { SPEED_ROTATION } from '../constants';
import { randomColor } from 'randomcolor';

export const isMesh = (node: Object3D): node is Mesh => {
  return !!(node as Mesh).geometry;
};

export const rotateMesh = (meshRef: MutableRefObject<Mesh | Object3D>) => {
  if (meshRef.current && isMesh(meshRef.current)) {
    meshRef.current.rotation.x += SPEED_ROTATION;
    meshRef.current.rotation.y += SPEED_ROTATION;
  }
};

export const rotateMeshX = (
  meshRef: MutableRefObject<Mesh | Object3D>,
  speed = SPEED_ROTATION
) => {
  if (meshRef.current && isMesh(meshRef.current)) {
    meshRef.current.rotation.x += speed;
  }
};

export const rotateMeshY = (
  meshRef: MutableRefObject<Mesh | Object3D>,
  speed = SPEED_ROTATION
) => {
  if (meshRef.current && isMesh(meshRef.current)) {
    meshRef.current.rotation.y += speed;
  }
};

export const getRandomColor = () => randomColor({ hue: '#00FFFF', count: 18 });
