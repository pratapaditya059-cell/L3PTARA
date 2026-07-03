import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingIsland from "./world/FloatingIsland";

function App() {
  return (
    <Canvas camera={{ position: [6, 5, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} />

      <FloatingIsland />

      <OrbitControls />
    </Canvas>
  );
}

export default App;