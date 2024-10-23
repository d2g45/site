"use client";

import { Suspense } from "react";

import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LinearToneMapping, SRGBColorSpace, Vector3 } from "three";

import { DanielWhole as Daniel } from "./daniel-whole";
import Loading from "./loading";
import Rig from "./rig";

const HeroScene = () => {
  return (
    <div className="absolute left-0 top-0 size-full p-4 md:h-screen xl:p-0">
      <Canvas
        camera={{ position: new Vector3(0, 0, 6) }}
        dpr={[1, 1]}
        gl={{
          alpha: true,
          antialias: true,
          outputColorSpace: SRGBColorSpace,
          toneMapping: LinearToneMapping,
        }}
      >
        <pointLight decay={0} intensity={Math.PI / 2} position={[0, 0, 10]} />
        <Suspense fallback={<Loading />}>
          <Daniel />
          <Rig />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroScene;
