import { CubeWithVertexNormals } from '.';

const CubesVertexNormal = ({ cubes }) => (
  <>
    {cubes.map(({ _id, color, x }) => (
      <CubeWithVertexNormals color={color} ndx={_id} key={_id} position-x={x} />
    ))}
  </>
);

export default CubesVertexNormal;
