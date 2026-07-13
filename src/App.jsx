import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import WorldHint from "./components/WorldHint";
import Moon from "./world/Moon"; 
import RealmPanel from "./components/RealmPanel";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedRealm, setSelectedRealm] = useState(null);
  console.log(selectedRealm);
  
  return (
    <>
    {showIntro && (
        <IntroOverlay
          onEnter={() => setShowIntro(false)}
        />
      )}
      {!showIntro && <WorldHint />}

      <RealmPanel
  realm={selectedRealm}
  onClose={() => setSelectedRealm(null)}
/>

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

  <World 
  onRealmClick={setSelectedRealm}
  />
  <Moon/>
  <OrbitControls />
</Canvas>

</>
  );
}

export default App;