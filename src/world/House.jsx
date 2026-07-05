import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

function House({
  position,
  scale = 2,
  rotation = [0, 0, 0],
}) {
  const model = useGLTF("/models/house.glb");

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

export default House;