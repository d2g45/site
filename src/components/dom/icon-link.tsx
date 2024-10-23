import React from "react";

import { TIconLink } from "@/types/global";

interface IProps extends TIconLink {
  classname?: string;
  children: React.ReactNode;
}

const IconLink = (props: IProps) => {
  const { href, title, children, target = "_self" } = props;
  return (
    <a
      className="flex flex-col items-center justify-center gap-4 text-2xl text-current transition-colors duration-300 ease-in-out hover:text-emerald-500 md:text-3xl lg:text-4xl"
      href={href}
      target={target}
      title={title}
      rel="noopener"
    >
      {children}
    </a>
  );
};

export default IconLink;
