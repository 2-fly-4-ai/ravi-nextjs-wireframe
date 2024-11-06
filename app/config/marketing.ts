import type { MarketingConfig } from "~/types";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
      // disabled: true,
    },
    {
      title: "Case Studies",
      href: "/case-studies",
    },
    {
      title: "Our Company",
      href: "/company",
      children: [
        {
          title: "Our Team",
          href: "/team",
        },
        {
          title: "About Us",
          href: "/about",
        },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
