import { useLayoutEffect, useRef } from 'react';
import { Plane, useTexture } from '@react-three/drei';
import {
  DoubleSide,
  Mesh,
  NearestFilter,
  RepeatWrapping,
  Texture,
} from 'three';

export default function PlaneGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const size = 40;

  const texture = useTexture('/static/images/checker.png') as Texture;
  useLayoutEffect(() => {
    texture.wrapT = texture.wrapS = RepeatWrapping;
    texture.magFilter = NearestFilter;
    texture.repeat.set(size / 2, size / 2);
  }, [texture]);

  return (
    <mesh {...props} ref={mesh} rotation-x={-Math.PI / 2} receiveShadow>
      <Plane args={[size, size]}>
        <meshPhongMaterial side={DoubleSide} map={texture} />
      </Plane>
    </mesh>
  );
}
