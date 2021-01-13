import { useMemo, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { Face3, Geometry, Mesh, Texture, Vector2, Vector3 } from 'three';

const CubeWithFaceVertexUv = ({ ...props }) => {
  const { color, ndx } = props;
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
    const geo = new Geometry();
    const { faceVertexUvs, faces, vertices } = geo;

    vertices.push(
      new Vector3(-1, -1, 1),
      new Vector3(1, -1, 1),
      new Vector3(-1, 1, 1),
      new Vector3(1, 1, 1),
      new Vector3(-1, -1, -1),
      new Vector3(1, -1, -1),
      new Vector3(-1, 1, -1),
      new Vector3(1, 1, -1)
    );

    /*
       6----7
      /|   /|
     2----3 |
     | |  | |
     | 4--|-5
     |/   |/
     0----1
  */

    faces.push(
      // Front
      new Face3(0, 3, 2),
      new Face3(0, 1, 3),
      // Right
      new Face3(1, 7, 3),
      new Face3(1, 5, 7),
      // Back
      new Face3(5, 6, 7),
      new Face3(5, 4, 6),
      // Left
      new Face3(4, 2, 6),
      new Face3(4, 0, 2),
      // Top
      new Face3(2, 7, 6),
      new Face3(2, 3, 7),
      // Bottom
      new Face3(4, 1, 0),
      new Face3(4, 5, 1)
    );

    faceVertexUvs[0].push(
      // Front
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)],
      // Right
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)],
      // Back
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)],
      // Left
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)],
      // Top
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)],
      // Bottom
      [new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)],
      [new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)]
    );

    geo.computeFaceNormals();

    return geo;
  }, []);

  return (
    <mesh geometry={geometry} ref={mesh} {...props}>
      <meshPhongMaterial color={color} map={texture} />
    </mesh>
  );
};

export default CubeWithFaceVertexUv;
