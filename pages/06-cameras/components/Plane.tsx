import { Plane, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import {
  DoubleSide,
  Mesh,
  NearestFilter,
  RepeatWrapping,
  Texture,
} from 'three';

const PLANE_SIZE = 40;

export default function PlaneGeometry(props) {
  const mesh = useRef<Mesh>();
  const texture = useTexture('/static/images/checker.png') as Texture;

  useEffect(() => {
    texture.wrapT = texture.wrapS = RepeatWrapping;
    texture.magFilter = NearestFilter;
    texture.repeat.set(PLANE_SIZE / 2, PLANE_SIZE / 2);
  }, [texture]);

  return (
    <Plane
      args={[PLANE_SIZE, PLANE_SIZE]}
      rotation-x={-Math.PI * -0.5}
      receiveShadow
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial side={DoubleSide} map={texture} />
    </Plane>
  );
}
