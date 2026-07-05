import FloatingIsland from "./FloatingIsland";
import TreeRealm from "./TreeRealm";
import ArraysRealm from "./ArraysRealm"
import Mountain from "./Mountain";
import GraphRealm from "./GraphRealm";

function World() {
  return (
    <>
      <FloatingIsland/>
      <TreeRealm/>
      <ArraysRealm/>
      <Mountain
      position={[-0.2, 1.9, -3]}
    scale={2.3}
    />
    <GraphRealm/>
    </>
  );
}

export default World;