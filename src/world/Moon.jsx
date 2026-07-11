import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

function Moon() {
  const model = useGLTF("/models/moon.glb");
  const clonedScene = useMemo(() => clone(model.scene), [model.scene]);

  const moonRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.3; // orbit speed
    const radius = 12;                  // orbit radius

    moonRef.current.position.x = Math.cos(t) * radius;
    moonRef.current.position.z = Math.sin(t) * radius;
    moonRef.current.position.y =
    5 + Math.sin(t * 0.5) * 0.8;
    moonRef.current.rotation.y += 0.03;
  });

  return (
    <primitive
      ref={moonRef}
      object={clonedScene}
      scale={0.025}
    />
  );
}

export default Moon;