import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type TExternalLink = {
  as: string;
  href: string;
  slug: string;
  title: string;
};

export type DanielGLTF = {
  materials: {
    "Outer.009": THREE.MeshBasicMaterial;
  };
  nodes: {
    Daniel_Whole: THREE.SkinnedMesh;
  };
} & GLTF;
