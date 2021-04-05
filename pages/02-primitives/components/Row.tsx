import { Flex } from '@react-three/flex';
import CONSTANTS from '@/constants/.';

export default function Row({ align, children, ...props }) {
  return (
    <Flex
      alignItems={align}
      flexDirection="row"
      justifyContent="center"
      padding={CONSTANTS.EXAMPLES_PADDING}
      {...props}
    >
      {children}
    </Flex>
  );
}
