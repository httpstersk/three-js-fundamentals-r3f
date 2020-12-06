import { useLayoutEffect, useRef } from 'react';
import { Plane, useTexture } from '@react-three/drei';
import {
  DoubleSide,
  Mesh,
  NearestFilter,
  RepeatWrapping,
  Texture,
} from 'three';

const PLANE_SIZE = 40;

export default function PlaneGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const texture = useTexture('/static/images/checker.png') as Texture;

  useLayoutEffect(() => {
    texture.wrapT = texture.wrapS = RepeatWrapping;
    texture.magFilter = NearestFilter;
    texture.repeat.set(PLANE_SIZE / 2, PLANE_SIZE / 2);
  }, [texture]);

  return (
    <mesh {...props} ref={mesh} rotation-x={-Math.PI * -0.5} receiveShadow>
      <Plane args={[PLANE_SIZE, PLANE_SIZE]}>
        <meshPhongMaterial side={DoubleSide} map={texture} />
      </Plane>
    </mesh>
  );
}
