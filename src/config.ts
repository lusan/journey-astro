import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.daslusan.com/", // replace this with your deployed domain
  author: "Lusan Das",
  desc: "Das Lusan, a seasoned web developer with nearly a decade of experience, leads technology and business initiatives for the merchant web front at PhonePe. Formerly SDE 3 with Flipkart, Lusan excels in enhancing web performance and architecture. Explore a journey of solving complex problems and driving growth through innovative web solutions.",
  title:
    "Das Lusan | Web Developer & Engineering Leader | Expert in High-Performance Web Applications",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const PAGE_HEADER_TITLE = "Das Lusan";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/daslusan",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/lusan",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lusandas/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
