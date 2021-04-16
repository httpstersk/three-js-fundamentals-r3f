import { useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  Texture
} from 'three';

const CubeTypedArrays = (props) => {
  const { color, ndx, ...rest } = props;
  const mesh = useRef<Mesh>();
  const texture = useTexture('/static/images/star.png') as Texture;

  useFrame(() => {
    if (mesh.current) {
      const speed = 1 + ndx * 0.1;
      const rot = 0.01 * speed;
      mesh.current.rotation.x += rot;
      mesh.current.rotation.y += rot;
    }
  });

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();

    const vertices = [
      // Front
      { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0] },
      { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
      { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },
      { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1] },
      // Right
      { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0] },
      { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0] },
      { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1] },
      { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1] },
      // Back
      { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0] },
      { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0] },
      { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1] },
      { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1] },
      // Left
      { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0] },
      { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0] },
      { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1] },
      { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1] },
      // Top
      { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0] },
      { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0] },
      { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1] },
      { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1] },
      // Bottom
      { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0] },
      { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0] },
      { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1] },
      { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1] },
    ];

    const VERTICES = vertices.length;
    const POSITION_COMPONENTS = 3;
    const NORMAL_COMPONENTS = 3;
    const UV_COMPONENTS = 2;

    const positions = new Float32Array(VERTICES * POSITION_COMPONENTS);
    const normals = new Float32Array(VERTICES * NORMAL_COMPONENTS);
    const uvs = new Float32Array(VERTICES * UV_COMPONENTS);

    let posNdx = 0;
    let nrmNdx = 0;
    let uvNdx = 0;

    vertices.map((vertex) => {
      positions.set(vertex.pos, posNdx);
      normals.set(vertex.norm, nrmNdx);
      uvs.set(vertex.uv, uvNdx);

      posNdx += POSITION_COMPONENTS;
      nrmNdx += NORMAL_COMPONENTS;
      uvNdx += UV_COMPONENTS;
    });

    geo.setAttribute(
      'position',
      new BufferAttribute(positions, POSITION_COMPONENTS)
    );
    geo.setAttribute('normal', new BufferAttribute(normals, NORMAL_COMPONENTS));
    geo.setAttribute('uv', new BufferAttribute(uvs, UV_COMPONENTS));

    geo.setIndex([
      0,  1,  2,   2,  1,  3, // Front
      4,  5,  6,   6,  5,  7, // Right
      8,  9, 10,  10,  9, 11, // Back
     12, 13, 14,  14, 13, 15, // Left
     16, 17, 18,  18, 17, 19, // Top
     20, 21, 22,  22, 21, 23, // Bottom
   ]);

    return geo;
  }, []);

  return (
    <mesh geometry={geometry} ref={mesh} {...rest}>
      <meshPhongMaterial color={color} map={texture} />
    </mesh>
  );
};

export default CubeTypedArrays;
