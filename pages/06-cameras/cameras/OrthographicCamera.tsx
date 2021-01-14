import { ReactNode, useRef } from 'react';
import { useTweaks } from 'use-tweaks';
import { OrthographicCamera } from '@react-three/drei';
import { OrthographicCamera as OrthographicCameraType } from 'three';

interface IProps {
  children?: ReactNode;
  props?: any;
}

export default function Orthographic({ children, ...props }: IProps) {
  const SIZE = 1;
  const camera = useRef<OrthographicCameraType>();
  const { far, near, zoom } = useTweaks('Orthographic Camera', {
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
      {...props}
    />
  );
}