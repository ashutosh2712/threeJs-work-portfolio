import { Float, Line, Sphere, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Electron = ({ radius = 2.75, speed = 6, ...props }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0,
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
};

const ReactLogo = (props) => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100,
      ),
    [],
  );
  return (
    <Float floatIntensity={1}>
      <group {...props}>
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
        <Line
          worldUnits
          points={points}
          color="turquoise"
          lineWidth={0.3}
          rotation={[0, 0, 1]}
        />
        <Line
          worldUnits
          points={points}
          color="turquoise"
          lineWidth={0.3}
          rotation={[0, 0, -1]}
        />
        <Electron position={[0, 0, 0.5]} speed={6} />
        <Electron
          position={[0, 0, 0.5]}
          rotation={[0, 0, Math.PI / 3]}
          speed={6.5}
        />
        <Electron
          position={[0, 0, 0.5]}
          rotation={[0, 0, -Math.PI / 3]}
          speed={7}
        />
        <Sphere args={[0.55, 64, 64]}>
          <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
        </Sphere>
      </group>
    </Float>
  );
};

export default ReactLogo;
