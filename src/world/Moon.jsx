import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

function Moon({
  position=[-8, 5, -4],
  scale = 0.02,
  rotation = [0, 0, 0],
}) {
  const model = useGLTF("/models/moon.glb");

  const clonedScene = useMemo(
    () => clone(model.scene),
    [model.scene]
  );

  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

export default Moon;