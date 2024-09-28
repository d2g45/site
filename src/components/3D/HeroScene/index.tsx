"use client";
import { Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import { Vector3 } from "three/webgpu";

import { Daniel } from "../Daniel";

const Rig = () => {
  const { camera, pointer } = useThree();
  const vec = new Vector3();

  const [alpha, setAlpha] = useState(0);
  //   const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { alpha = 0, gamma = 0 } = event;
      setAlpha(alpha ?? 0 / 250);
      //   setBeta(beta ?? 0 / 250);
      setGamma(gamma ?? 0 / 250);
    };
    if (isMobile) {
      window.addEventListener("deviceorientation", handleOrientation);
    }
    return () => {
      if (isMobile) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  return useFrame(() => {
    let x = -pointer.x * 5;
    let y = -pointer.y * 5;

    if (isMobile) {
      x = alpha;
      y = gamma;
    }

    camera.position.lerp(vec.set(x, y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: new Vector3(0, 0, 6) }}
      dpr={[1, 1]}
      gl={{
        alpha: true,
        antialias: true,
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.LinearToneMapping,
      }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        angle={0.15}
        decay={0}
        intensity={Math.PI}
        penumbra={1}
        position={[10, 10, 10]}
      />

      <spotLight
        angle={0.15}
        decay={0}
        intensity={Math.PI}
        penumbra={1}
        position={[-10, 10, 10]}
      />
      <pointLight decay={0} intensity={Math.PI} position={[-10, -10, -10]} />
      <Suspense>
        <Daniel />
      </Suspense>
      <Preload all />
      <Rig />
      {/* <Stats /> */}
    </Canvas>
  );
};

export default HeroScene;
