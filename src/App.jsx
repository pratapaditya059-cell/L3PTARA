import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import { OrbitControls, Sky } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [6, 5, 6] }}>
      <Sky
  sunPosition={[100, 20, 100]}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <World />
      <OrbitControls />
    </Canvas>
  );
}

export default App;