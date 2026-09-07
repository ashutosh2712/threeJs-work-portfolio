import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
const Cube = (props) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0}>
      <mesh ref={ref} {...props}>
        <torusKnotGeometry args={[0.9, 0.28, 200, 32]} />
        <meshPhysicalMaterial
          color="#be7912"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
};

export default Cube;
