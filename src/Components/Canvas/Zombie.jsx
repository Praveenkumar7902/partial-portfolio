import React, { Suspense , useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE  from "three";

import { OrbitControls, Preload, useGLTF , useAnimations } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";

const Zombie = () => {
  const { scene ,animations} = useGLTF("./zombie_walk_test/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    if (actions) {
      const action = actions["ANIMATION ZOMBIE"];
      console.log(actions);
      action.reset().play(); // Ensure the animation plays
      action.setLoop(THREE.LoopRepeat, Infinity);
    
    }
  }, [actions]);
  return (
    <mesh scale={[1,1,1]}>
        <hemisphereLight intensity={2} groundColor="#949A8C" />
 
 <ambientLight intensity={3} />
 <pointLight intensity={90} position={[0.5, 0.1, 0.5]} color="#949A8C" />
      <primitive
        object={scene}
        position={[0, -1,-2]}
        rotation={[0, Math.PI / 9, 0]}
      />
    </mesh>
  );
};

const ZombieCanvas = () => {
  return (
    <Canvas shadows frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Zombie />
      </Suspense>
    </Canvas>
  );
};

export default ZombieCanvas;