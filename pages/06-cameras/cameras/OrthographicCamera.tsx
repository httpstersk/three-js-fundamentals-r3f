import { OrthographicCamera } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import { OrthographicCamera as OrthographicCameraType } from 'three';

export default function Orthographic(props) {
  const { children, ...rest } = props;
  const SIZE = 1;
  const camera = useRef<OrthographicCameraType>();
  const { far, near, zoom } = useControls('Orthographic Camera', {
    near: { value: 5, min: 0.1, max: 50 },
    far: { value: 50, min: 0.1, max: 50 },
    zoom: { value: 50, min: 0.01, max: 50 },
  });

  return (
    <OrthographicCamera
      makeDefault
      left={-SIZE}
      right={SIZE}
      top={SIZE}
      bottom={-SIZE}
      near={near}
      far={far}
      position={[0, 10, 20]}
      ref={camera}
      zoom={zoom}
      children={children}
      {...rest}
    />
  );
}
