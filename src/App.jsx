import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import { OrbitControls, Stars } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [6, 5, 6] }}>
  <color attach="background" args={["#050510"]} />

  <Stars
    radius={100}
    depth={50}
    count={5000}
    factor={4}
    saturation={0}
    fade
    speed={1}
  />

  <ambientLight intensity={0.4} />

  <directionalLight
    position={[-7, 5, -3]}
    intensity={1}
    color="#b8c7ff"
  />

  <World />

  <OrbitControls />
</Canvas>
  );
}

export default App;