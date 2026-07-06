import { useState } from "react";
import Tree from "./Tree";
import { Text, Billboard } from "@react-three/drei";

function TreeRealm() {
  const [hovered, setHovered] = useState(false);
  return (
    <group
    onPointerEnter={() => {
        console.log("Entered tree realm");
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      onClick={() => {
    window.open(
      "https://leetcode.com/problem-list/tree/",
      "_blank"
    );
  }}
    >
      
      <Tree position={[-3, 1.45, 0]} />

      <Tree
        position={[-3, 1.45, 0.3]}
        scale={0.003}
      />

      <Tree
        position={[-2.9, 1.45, 0.1]}
        scale={0.0035}
      />

      <Tree
        position={[-3.2, 1.45, 0.7]}
        scale={0.0035}
      />

      <Tree
        position={[-2.8, 1.45, 0.7]}
        scale={0.004}
      />

      <Tree
        position={[-2.2, 1.45, 0.2]}
        scale={0.0034}
      />

      <Tree
        position={[-3, 1.45, 0.8]}
        scale={0.0035}
      />

      <Tree
        position={[-2.3, 1.45, 0.7]}
        scale={0.004}
      />

      <Tree
        position={[-2.7, 1.45, 1]}
        scale={0.0033}
        rotation={[0, Math.PI / 3, 0]}
      />

      <Tree
        position={[-3, 1.45, -0.3]}
        scale={0.0035}
        rotation={[0, Math.PI / 3, 0]}
      />

      <Tree
        position={[-2.8, 1.45, -0.3]}
        scale={0.0035}
        rotation={[0, Math.PI / 3, 0]}
      />

{hovered && (
  <Billboard position={[-2.7, 3, 0.3]}>
    <Text
      fontSize={0.2}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Trees Realm
    </Text>
  </Billboard>
)}

    </group>
      
  );
}

export default TreeRealm;