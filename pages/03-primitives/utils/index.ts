import { SPEED_ROTATION } from '../constants';
import { randomColor } from 'randomcolor';

export const rotateMesh = (meshRef) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += SPEED_ROTATION;
    meshRef.current.rotation.y += SPEED_ROTATION;
  }
};

export const getRandomColor = () => randomColor({ hue: '#00FFFF', count: 18 });
