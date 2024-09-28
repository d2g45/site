import { LINKS } from "@/constants";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  const COMPONENTS: Record<string, IconType> = {
    email: FaEnvelope,
    github: FaGithub,
    linkedin: FaLinkedinIn,
  };

  return (
    <div className="relative grid w-full grid-cols-1 grid-rows-1 items-center justify-center p-4 md:h-screen xl:p-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 rounded-xl bg-black/50 p-8 text-center tracking-wider backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl xl:text-6xl">
          Hi! I&apos;m <strong>Daniel.</strong>
        </h1>
        <div className="text-xl md:text-3xl">
          I&apos;m a full stack developer from Chattanooga, TN.
        </div>

        <div className="flex flex-row items-center justify-center gap-4 xl:gap-8">
          {LINKS.map(({ as, href, slug, title }) => {
            const Component = COMPONENTS[as];
            return (
              href && (
                <a
                  className="flex flex-col items-center justify-center gap-4 text-3xl text-current transition-colors duration-300 ease-in-out hover:text-emerald-500 xl:text-4xl"
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
  );
};

export default Hero;
