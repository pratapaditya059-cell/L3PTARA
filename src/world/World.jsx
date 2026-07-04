import FloatingIsland from "./FloatingIsland";
import Tree from "./Tree";

function World() {
  return (
    <>
      <FloatingIsland />

      <Tree position={[0, 1.45, 0]} />

      <Tree
        position={[0, 1.45, 0.3]}
        scale={0.003}
      />

      <Tree
        position={[0, 1.45, -0.3]}
        scale={0.0025}
        rotation={[0, Math.PI / 3, 0]}
      />
    </>
  );
}

export default World;