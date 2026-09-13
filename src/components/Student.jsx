import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const Student = ({ animationName = "idleStudent", ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/animations/model.glb");

  const { animations: idleAnimation } = useFBX("/models/animations/Idle.fbx");

  const { animations: rallyingAnimation } = useFBX(
    "/models/animations/Rallying.fbx",
  );
  const { animations: sweatAnimation } = useFBX("/models/animations/Sweat.fbx");

  idleAnimation[0].name = "idleStudent";

  rallyingAnimation[0].name = "rallying";
  sweatAnimation[0].name = "sweat";

  const { actions } = useAnimations(
    [idleAnimation[0], rallyingAnimation[0], sweatAnimation[0]],
    group,
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();

    //return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.AvatarBody.geometry}
        material={materials.AvatarBody}
        skeleton={nodes.AvatarBody.skeleton}
      />
      <skinnedMesh
        name="AvatarEyelashes"
        geometry={nodes.AvatarEyelashes.geometry}
        material={materials.AvatarEyelashes}
        skeleton={nodes.AvatarEyelashes.skeleton}
        morphTargetDictionary={nodes.AvatarEyelashes.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarEyelashes.morphTargetInfluences}
      />
      <skinnedMesh
        name="AvatarHead"
        geometry={nodes.AvatarHead.geometry}
        material={materials.AvatarHead}
        skeleton={nodes.AvatarHead.skeleton}
        morphTargetDictionary={nodes.AvatarHead.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarHead.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.AvatarLeftEyeball.geometry}
        material={materials.AvatarLeftEyeball}
        skeleton={nodes.AvatarLeftEyeball.skeleton}
      />
      <skinnedMesh
        geometry={nodes.AvatarRightEyeball.geometry}
        material={materials.AvatarRightEyeball}
        skeleton={nodes.AvatarRightEyeball.skeleton}
      />
      <skinnedMesh
        name="AvatarTeethLower"
        geometry={nodes.AvatarTeethLower.geometry}
        material={materials.AvatarTeethLower}
        skeleton={nodes.AvatarTeethLower.skeleton}
        morphTargetDictionary={nodes.AvatarTeethLower.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarTeethLower.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.AvatarTeethUpper.geometry}
        material={materials.AvatarTeethUpper}
        skeleton={nodes.AvatarTeethUpper.skeleton}
      />
      <skinnedMesh
        geometry={nodes.haircut.geometry}
        material={materials.haircut}
        skeleton={nodes.haircut.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_bottom.geometry}
        material={materials.outfit_bottom}
        skeleton={nodes.outfit_bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_shoes.geometry}
        material={materials.outfit_shoes}
        skeleton={nodes.outfit_shoes.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_top.geometry}
        material={materials.outfit_top}
        skeleton={nodes.outfit_top.skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/model.fbx.glb");

export default Student;
