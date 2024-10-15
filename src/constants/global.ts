import { TExternalLink } from "@/types/global";

export const EMAIL: string = "me@danieldeguzman.com";
export const URL: string = "https://danieldeguzman.com";

export const META = {
  title: "Daniel De Guzman | Full Stack Web Developer",
  openGraphImage: {
    images: [
      {
        url: `${URL}/sharing-02.jpg`,
        secureUrl: `${URL}/sharing.jpg`,
        alt: "Daniel De Guzman's website",
        type: "image/jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  shortname: "Daniel De Guzman",
  description:
    "I'm Daniel De Guzman, a full stack web developer from Chattanooga, TN. Let's work together.",
};

export const LINKS: TExternalLink[] = [
  {
    as: "email",
    href: `mailto:${EMAIL}`,
    slug: "email",
    title: "Send me an email",
  },
  {
    as: "github",
    href: "https://github.com/d2g45",
    slug: "github",
    title: "GitHub",
  },
  {
    as: "linkedin",
    href: "https://www.linkedin.com/in/danieldeguzman/",
    slug: "linkedin",
    title: "LinkedIn",
  },
];
