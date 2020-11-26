import { Flex } from '@react-three/flex';
import { EXAMPLES_PADDING } from '../../constants';

export default function Row({ align, children, ...props }) {
  return (
    <Flex
      alignItems={align}
      flexDirection="row"
      justifyContent="center"
      padding={EXAMPLES_PADDING}
      {...props}
    >
      {children}
    </Flex>
  );
}
