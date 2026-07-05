
import Pole from "./Pole";

function GraphRealm() {
  return (
    <>
    <Pole
      position={[+0.2, 1.5, +3.78]}
    scale={0.1}
    />
    <Pole
      position={[+0.2, 1.5, 2.8]}
      rotation={[0,Math.PI/2,0]}
    scale={0.1}
    />
    <Pole
      position={[+0.2, 1.5, 2.8]}
      rotation={[0,-Math.PI/2,0]}
    scale={0.1}
    />
    <Pole
      position={[+0.2, 1.5, 2.8]}
    scale={0.1}
    />
    </>
  );
}

export default GraphRealm;