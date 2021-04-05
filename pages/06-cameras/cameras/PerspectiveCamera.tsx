import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';

export default function Perspective(props) {
  const camera = useRef<PerspectiveCameraType>();
  const { far, fov, near } = useControls('Perspective Camera', {
    fov: { value: 45, min: 1, max: 180 },
    near: { value: 0.1, min: 0.1, max: 50 },
    far: { value: 100, min: 0.1, max: 100 },
  });

  return (
    <PerspectiveCamera
      aspect={2}
      far={far}
      fov={fov}
      makeDefault
      near={near}
      position={[0, 10, 20]}
      ref={camera}
      {...props}
    />
  );
}
