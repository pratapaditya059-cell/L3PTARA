import { useState } from "react";
import { Text, Billboard } from "@react-three/drei";
import Pole from "./Pole";

function GraphRealm() {
  const [hovered, setHovered] = useState(false);
  return (
    <group
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      onClick={() => {
        window.open(
          "https://leetcode.com/problem-list/graph/",
          "_blank"
        );
      }}
    >
    
    <Pole
      position={[0.2, 1.5, +3.78]}
    scale={0.1}
    />
    <Pole
      position={[0.2, 1.5, 2.8]}
      rotation={[0,Math.PI/2,0]}
    scale={0.1}
    />
    <Pole
      position={[0.2, 1.5, 2.8]}
      rotation={[0,-Math.PI/2,0]}
    scale={0.1}
    />
    <Pole
      position={[0.2, 1.5, 2.8]}
    scale={0.1}
    />
     {hovered && (
        <Billboard position={[0.2, 3, 3.2]}>
          <Text
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Graphs Realm
          </Text>
        </Billboard>
      )}
      {hovered && (
  <mesh
    position={[0.2, 1.55, 3]}
    rotation={[-Math.PI / 2, 0, 0]}
    raycast={() => null}
  >
    <ringGeometry args={[0.8, 1.0, 64]} />
    <meshBasicMaterial
      color="cyan"
      transparent
      opacity={1}
      side={2}
    />
  </mesh>
)}
    </group>
  );
}

export default GraphRealm;