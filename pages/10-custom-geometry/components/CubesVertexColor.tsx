import { CubeWithVertexColors } from '.';

const CubesVertexColor = ({ cubes }) => (
  <>
    {cubes.map(({ _id, x }) => (
      <CubeWithVertexColors ndx={_id} key={_id} position-x={x} />
    ))}
  </>
);

export default CubesVertexColor;
