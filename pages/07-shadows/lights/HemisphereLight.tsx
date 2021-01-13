export default function HemisphereLight() {
  const skyColor = 0xb1e1ff;
  const groundColor = 0xb97a20;
  const intensity = 1;

  return <hemisphereLight args={[skyColor, groundColor, intensity]} />;
}
