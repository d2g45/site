import { AnimationAction } from "three";

export type TIconLink = {
  href: string;
  title: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

export type GLTFAction = Record<string, AnimationAction>;
