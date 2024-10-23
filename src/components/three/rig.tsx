"use client";

import { useState } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import { Vector3 } from "three";

const Rig = () => {
  const { camera, pointer } = useThree();
  const vec = new Vector3();

  // const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  const handleOrientation = (event: DeviceOrientationEvent) => {
    const { beta = 0, gamma = 0 } = event;
    // setAlpha(alpha ?? 0);
    setBeta(beta ?? 0);
    setGamma(gamma ?? 0);
  };

  if (isMobile) {
    window.addEventListener("deviceorientation", handleOrientation, {
      passive: true,
    });
  }

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

export default Rig;
