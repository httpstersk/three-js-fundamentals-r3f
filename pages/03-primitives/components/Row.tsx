import { Align, Flex } from '@react-three/flex';

export default function Row({ align, children, ...props }) {
  return (
    <Flex
      alignItems={align}
      flexDirection="row"
      justifyContent="center"
      {...props}
    >
      {children}
    </Flex>
  );
}
