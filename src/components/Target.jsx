import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import inter from "../fonts/Inter-Regular.woff";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Dodecahedron = (props) => {
  const meshRef = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => (meshRef.current.rotation.x += 0.01));
  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "#5de4c7"} />
      </mesh>
    </group>
  );
};

const Target = (props) => {
  const textRef = useRef();
  const targetRef = useRef();
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }
  });
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <mesh
      position={props.position}
      ref={targetRef}
      rotation={[0, Math.PI / 4, 0]}
      scale={1.5}
    >
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["orange"]} />
          <ambientLight intensity={0.5 * Math.PI} />
          <directionalLight position={[10, 10, 5]} intensity={Math.PI} />
          <Text font={inter} ref={textRef} fontSize={4} color="#555">
            hello
          </Text>
          <Dodecahedron />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Target;
