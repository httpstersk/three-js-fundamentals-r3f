import { SPEED_ROTATION } from '../constants';

export const rotateMesh = (meshRef) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += SPEED_ROTATION;
    meshRef.current.rotation.y += SPEED_ROTATION;
  }
};
