"use client";
import { Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

// import { Daniel } from "../Daniel";
// import { DanielFractured } from "../DanielFractured";
import { DanielWhole } from "../DanielWhole";
// import { DanielWholeTransformed } from "../DanielWholeTransformed";

const Rig = () => {
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();

  // const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta = 0, gamma = 0 } = event;
      // setAlpha(alpha ?? 0);
      setBeta(beta ?? 0);
      setGamma(gamma ?? 0);
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
    let x = -pointer.x * 2.5;
    let y = -pointer.y * 2.5;

    if (isMobile) {
      x = gamma / 25;
      y = beta / 25;
    }

    camera.position.lerp(vec.set(x, y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

const HeroScene = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent execution on the server
  }, []);

  return (
    <div className="absolute left-0 top-0 size-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-4 md:h-screen xl:p-0">
      <Canvas
        camera={{ position: new THREE.Vector3(0, 0, 6) }}
        dpr={[1, 1]}
        gl={{
          alpha: true,
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.LinearToneMapping,
        }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight angle={0.15} decay={0} intensity={Math.PI} penumbra={1} position={[10, 10, 10]} />

        <spotLight angle={0.15} decay={0} intensity={Math.PI} penumbra={1} position={[-10, 10, 10]} />
        <pointLight decay={0} intensity={Math.PI} position={[0, 0, 10]} />
        <Suspense>
          <DanielWhole />
          <Rig />
        </Suspense>
        <Preload all />
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
};

export default HeroScene;
