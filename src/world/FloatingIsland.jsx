function FloatingIsland() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3, 2, 0.8, 5]} />
        <meshStandardMaterial color="green" flatshading/>
      </mesh>

      <mesh position={[0, -1.4, 0]}>
        <coneGeometry args={[2.5, 2, 32]} />
        <meshStandardMaterial color="brown" flatshading/>
      </mesh>
    </group>
  );
}

export default FloatingIsland;