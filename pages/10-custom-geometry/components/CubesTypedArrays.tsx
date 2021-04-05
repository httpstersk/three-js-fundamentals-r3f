import CubeTypedArrays from './CubeTypedArrays';

const CubesTypedArrays = ({ cubes }) => (
  <>
    {cubes.map(({ _id, color, x }) => (
      <CubeTypedArrays color={color} ndx={_id} key={_id} position-x={x} />
    ))}
  </>
);

export default CubesTypedArrays;
