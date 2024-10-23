"use client";

import dynamic from "next/dynamic";

import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { EMAIL } from "@/constants/global";
import { TIconLink } from "@/types/global";

import ExternalLink from "./icon-link";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
});

const Hero = () => {
  const emailProps: TIconLink = {
    href: `mailto:${EMAIL}`,
    title: "Send me an email",
    target: "_blank",
  };

  const githubProps: TIconLink = {
    href: "https://github.com/d2g45",
    title: "Take a look at my repositories on GitHub",
    target: "_blank",
  };

  const linkedinProps: TIconLink = {
    href: "https://linkedin.com/in/danieldeguzman",
    title: "Check out my LinkedIn profile!",
    target: "_blank",
  };

  return (
    <div className="relative grid h-dvh w-full grid-cols-1 grid-rows-1 items-center justify-center bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20">
      <div className="absolute left-0 top-0 z-0 size-full">
        <div className="relative size-full touch-auto">
          <HeroScene />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl p-4">
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-3 rounded-xl bg-slate-600/50 p-4 text-center tracking-wider backdrop-blur-lg md:p-8 lg:gap-8 xl:mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl">
            Hi! I&apos;m <strong>Daniel.</strong>
          </h1>
          <div className="text-lg md:text-xl lg:text-3xl">
            I&apos;m a full stack developer from Chattanooga, TN.
          </div>

          <div className="flex flex-row items-center justify-center gap-4 lg:gap-8">
            <ExternalLink {...emailProps}>
              <FaEnvelope />
            </ExternalLink>
            <ExternalLink {...githubProps}>
              <FaGithub />
            </ExternalLink>
            <ExternalLink {...linkedinProps}>
              <FaLinkedinIn />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
