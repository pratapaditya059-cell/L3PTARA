import { useState } from "react";
import { Text, Billboard } from "@react-three/drei";
import House from "./House";

function ArraysRealm({ onRealmClick }) {
  const [hovered, setHovered] = useState(false);
  const houses = [
    { position: [3, 1.5, -1] },
    { position: [3, 1.5, -0.5] },
    { position: [3, 1.5, 0] },
    { position: [3, 1.5, 0.5] },
    { position: [3, 1.5, 1] },
    { position: [2.3, 1.5, -1] },
    { position: [2.3, 1.5, -0.5] },
    { position: [2.3, 1.5, 0] },
    { position: [2.3, 1.5, 0.5] },
    { position: [2.3, 1.5, 1] },
  ];

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
  onRealmClick("arrays");
}}
    >
      {houses.map((house, index) => (
        <House
          key={index}
          position={house.position}
          scale={1.5}
        />
      ))}

      {hovered && (
        <Billboard position={[2.6, 3, 0]}>
          <Text fontSize={0.2} color="white">
            Arrays Realm
          </Text>
        </Billboard>
      )}
      {hovered && (
  <mesh
    position={[2.6, 1.5, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    raycast={() => null}
  >
    <ringGeometry args={[1.0, 1.2, 64]} />
    <meshBasicMaterial
      color="orange"
      transparent
      opacity={1}
      side={2}
    />
  </mesh>
)}
    </group>
  );
}

export default ArraysRealm;