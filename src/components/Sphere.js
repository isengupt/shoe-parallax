import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

const Sphere = ({ constructorArgs, position, wireframe }) => {
  const mesh = useRef();
  // radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength }
  // const sphereArgs = [1, 8, 6, 0, Math.PI * 2, 0, Math.PI * 2];
  const [hovered, setHover] = useState(false);
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={position} visible>
      <sphereBufferGeometry attach="geometry" args={constructorArgs} />
      <meshStandardMaterial attach="material" color="darkblue" wireframe />
    </mesh>
  );
};

export default Sphere;