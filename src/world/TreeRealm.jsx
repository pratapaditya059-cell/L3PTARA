
import Tree from "./Tree";

function TreeRealm() {
  return (
    <>

      <Tree position={[-3, 1.45, 0]} />

      <Tree
        position={[-3, 1.45, 0.3]}
        scale={0.003}
      />

      <Tree
        position={[-2.9, 1.45, 0.1]}
        scale={0.0035}
      />

      <Tree
        position={[-3.2, 1.45, 0.7]}
        scale={0.0035}
      />

      <Tree
        position={[-2.8, 1.45, 0.7]}
        scale={0.004}
      />

      <Tree
        position={[-2.2, 1.45, 0.2]}
        scale={0.0034}
      />

      <Tree
        position={[-3, 1.45, 0.8]}
        scale={0.0035}
      />

      <Tree
        position={[-2.3, 1.45, 0.7]}
        scale={0.004}
      />

      <Tree
        position={[-2.7, 1.45, 1]}
        scale={0.0033}
        rotation={[0, Math.PI / 3, 0]}
      />

      <Tree
        position={[-3, 1.45, -0.3]}
        scale={0.0035}
        rotation={[0, Math.PI / 3, 0]}
      />

      <Tree
        position={[-2.8, 1.45, -0.3]}
        scale={0.0035}
        rotation={[0, Math.PI / 3, 0]}
      />
    </>
  );
}

export default TreeRealm;