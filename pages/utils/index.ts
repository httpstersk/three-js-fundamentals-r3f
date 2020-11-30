import { MutableRefObject } from 'react';
import { Mesh, Group } from 'three';
import { SPEED_ROTATION } from '../constants';
import { randomColor } from 'randomcolor';

export const isMesh = (node: Group): node is Mesh => {
  return !!(node as Mesh).geometry;
};

export const rotateMesh = (meshRef: MutableRefObject<Mesh | Group>) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += SPEED_ROTATION;
    meshRef.current.rotation.y += SPEED_ROTATION;
  }
};

export const rotateMeshX = (
  meshRef: MutableRefObject<Mesh | Group>,
  speed = SPEED_ROTATION
) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += speed;
  }
};

export const rotateMeshY = (
  meshRef: MutableRefObject<Mesh | Group>,
  speed = SPEED_ROTATION
) => {
  if (meshRef.current) {
    meshRef.current.rotation.y += speed;
  }
};

export const getRandomColor = () => randomColor({ hue: '#00FFFF', count: 18 });
