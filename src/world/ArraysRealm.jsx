import House from "./House";

function ArraysRealm() {
  const houses = [
    { position: [3, 1.5, -1] },
    { position: [3, 1.5, -0.5] },
    { position: [3, 1.5, 0] },
    { position: [3, 1.5, 0.5] },
    { position: [3, 1.5, 1] },
    { position: [2.3, 1.5, -1] },
    { position: [2.3, 1.5, -0.5] },
    { position: [2.3, 1.5, 0] },
    { position: [2.3, 1.5, 0.5] },
    { position: [2.3, 1.5, 1] },
  ];

  return (
    <>
      {houses.map((house, index) => (
        <House
          key={index}
          position={house.position}
          scale={1.5}
        />
      ))}
    </>
  );
}

export default ArraysRealm;