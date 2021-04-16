import { Box } from '@react-three/flex';
import CONSTANTS from '@/constants/.';

export default function Example({ children, ...props }) {
  return (
    <Box centerAnchor padding={CONSTANTS.EXAMPLES_PADDING} {...props}>
      {children}
    </Box>
  );
}
