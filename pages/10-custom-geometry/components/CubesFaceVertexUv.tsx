import { CubeWithFaceVertexUv } from '.';

const CubesFaceVertexUv = ({ cubes }) => (
  <>
    {cubes.map(({ _id, color, x }) => (
      <CubeWithFaceVertexUv color={color} ndx={_id} key={_id} position-x={x} />
    ))}
  </>
);

export default CubesFaceVertexUv;
