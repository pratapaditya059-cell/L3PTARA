import { useState } from "react";
import { Text, Billboard } from "@react-three/drei";
import Mountain from "./Mountain";

function DPRealm({onRealmClick}) {
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
  onRealmClick("dp");
}}
    >
      <Mountain
        position={[-0.2, 1.9, -3]}
        scale={2.3}
      />

      {hovered && (
        <Billboard position={[-0.2, 3.5, -3]}>
          <Text
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            DP Realm
          </Text>
        </Billboard>
      )}
      {hovered && (
  <mesh
    position={[-0.2, 1.5, -3]}
    rotation={[-Math.PI / 2, 0, 0]}
    raycast={() => null}
  >
    <ringGeometry args={[1, 1.2, 64]} />
    <meshBasicMaterial
      color="purple"
      transparent
      opacity={1}
      side={2}
    />
  </mesh>
)}
    </group>
  );
}

export default DPRealm;