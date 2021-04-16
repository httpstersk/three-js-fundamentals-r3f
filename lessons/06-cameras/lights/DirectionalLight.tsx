import CONSTANTS from '@/constants/.';

export default function DirectionalLight() {
  return (
    <group position={[-5, 0, 0]}>
      <directionalLight
        castShadow
        color={CONSTANTS.DEFAULT_LIGHT_COLOR}
        intensity={1}
        position={[0, 10, 0]}
      />
    </group>
  );
}
