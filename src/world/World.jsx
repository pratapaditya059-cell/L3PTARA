import FloatingIsland from "./FloatingIsland";
import TreeRealm from "./TreeRealm";
import ArraysRealm from "./ArraysRealm"
import Mountain from "./Mountain";
import GraphRealm from "./GraphRealm";
import DPRealm from "./DPRealm";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function World() {
  const worldRef = useRef();

  useFrame(({ clock }) => {
    if (!worldRef.current) return;

    worldRef.current.position.y =
      Math.sin(clock.elapsedTime * 0.5) * 0.5;

    worldRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    
    <group ref={worldRef}>
      <FloatingIsland/>
      <TreeRealm/>
      <ArraysRealm/>
      <DPRealm/>
    <GraphRealm/>
    </group>
  );
}

export default World;