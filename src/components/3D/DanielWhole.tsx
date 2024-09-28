/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/3D/daniel-whole.gltf -t -m --shadows -d
*/

import { GLTFAction } from "@/types";
import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = {
  animations: GLTFAction[];
  materials: {
    ["Outer.009"]: THREE.MeshStandardMaterial;
  };
  nodes: {
    Daniel_Whole: THREE.Mesh;
  };
} & GLTF;

const PATH = "/3D/daniel-whole.gltf";

export function DanielWhole(props: JSX.IntrinsicElements["group"]) {
  const { materials, nodes } = useGLTF(PATH) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Daniel_Whole.geometry}
        material={materials["Outer.009"]}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
        userData={{ name: "Daniel_Whole" }}
      />
    </group>
  );
}

useGLTF.preload(PATH);
