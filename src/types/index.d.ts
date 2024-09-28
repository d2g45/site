import * as THREE from "three";

export type TExternalLink = {
  as: string;
  href: string;
  slug: string;
  title: string;
};

export type GLTFAction = Record<string, THREE.AnimationAction>;
