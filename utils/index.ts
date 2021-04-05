import CONSTANTS from '@/constants/.';
import { randomColor } from 'randomcolor';
import { MutableRefObject } from 'react';
import { Group, Mesh } from 'three';

export const rotateMesh = (meshRef: MutableRefObject<Mesh | Group>) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += CONSTANTS.SPEED_ROTATION;
    meshRef.current.rotation.y += CONSTANTS.SPEED_ROTATION;
  }
};

export const rotateMeshX = (
  meshRef: MutableRefObject<Mesh | Group>,
  speed = CONSTANTS.SPEED_ROTATION
) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += speed;
  }
};

export const rotateMeshY = (
  meshRef: MutableRefObject<Mesh | Group>,
  speed = CONSTANTS.SPEED_ROTATION
) => {
  if (meshRef.current) {
    meshRef.current.rotation.y += speed;
  }
};

export const getRandomColor = () => randomColor({ hue: '#00FFFF', count: 18 });
