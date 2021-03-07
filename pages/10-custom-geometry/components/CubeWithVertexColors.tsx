import { useMemo, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Color, Face3, Geometry, Mesh, Vector3 } from 'three';

const CubeWithVertexColors = (props) => {
  const { ndx, ...rest } = props;
  const mesh = useRef<Mesh>();

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

    geo.vertices.push(
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

    geo.faces.push(
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

    geo.faces.map(
      (face, ndx) =>
        (face.vertexColors = [
          new Color().setHSL(ndx / 12, 1, 0.5),
          new Color().setHSL(ndx / 12 + 0.1, 1, 0.5),
          new Color().setHSL(ndx / 12 + 0.2, 1, 0.5),
        ])
    );

    geo.computeFaceNormals();

    return geo;
  }, []);

  return (
    <mesh geometry={geometry} ref={mesh} {...rest}>
      <meshBasicMaterial vertexColors />
    </mesh>
  );
};

export default CubeWithVertexColors;
