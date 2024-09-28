import { TExternalLink } from "@/types";

export const EMAIL: string = "me@danieldeguzman.com";

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
