"use client";
import { LINKS } from "@/constants";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const HeroScene = dynamic(() => import("@/components/3D/HeroScene"), {
  ssr: false,
});

const Hero = () => {
  const COMPONENTS: Record<string, IconType> = {
    email: FaEnvelope,
    github: FaGithub,
    linkedin: FaLinkedinIn,
  };

  return (
    <div className="relative grid h-dvh w-full grid-cols-1 grid-rows-1 items-center justify-center">
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
          <div className="text-lg md:text-xl lg:text-3xl">I&apos;m a full stack developer from Chattanooga, TN.</div>

          <div className="flex flex-row items-center justify-center gap-4 lg:gap-8">
            {LINKS.map(({ as, href, slug, title }) => {
              const Component = COMPONENTS[as];
              return (
                href && (
                  <a
                    className="flex flex-col items-center justify-center gap-4 text-2xl text-current transition-colors duration-300 ease-in-out hover:text-emerald-500 md:text-3xl lg:text-4xl"
                    href={href}
                    key={slug}
                    target={slug === "email" ? "" : "_blank"}
                    title={title}
                  >
                    <Component />
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
