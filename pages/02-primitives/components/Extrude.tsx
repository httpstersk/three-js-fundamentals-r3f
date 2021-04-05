import { Extrude } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh, Shape } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function ExtrudeGeometry(props) {
  const mesh = useRef<Mesh>();

  const shape = useMemo(() => {
    const _shape = new Shape();
    const x = -2.5;
    const y = -5;
    _shape.moveTo(x + 2.5, y + 2.5);
    _shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    _shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    _shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    _shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    _shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    _shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

    return _shape;
  }, []);

  const extrudeSettings = useMemo(
    () => ({
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 2,
      bevelOffset: 0,
    }),
    []
  );

  useFrame(() => rotateMesh(mesh));

  return (
    <Extrude args={[shape, extrudeSettings]} ref={mesh} {...props}>
      <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
    </Extrude>
  );
}
