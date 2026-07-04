import { useGLTF } from "@react-three/drei";

function FloatingIsland() {
  const model = useGLTF("/models/floating-island.glb");

  return <primitive object={model.scene} 
  scale={2}
  position={[0,0,0]}
  rotation={[0,0,0]}
  />;
}

export default FloatingIsland;