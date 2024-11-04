"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

// import { Tooltip, TooltipProvider } from "../ui/tooltip";
// import { dashboardConfig } from "~/config/dashboard";
// import { docsConfig } from "~/config/docs";

import { cn } from "@/lib/utils";

import { marketingConfig } from "@/app/config/marketing";
import { siteConfig } from "@/app/config/site";
import { useScroll } from "@/app/hooks/use-scroll";

// import { Icons } from "../shared/icons";
import MaxWidthWrapper from "../shared/max-width-wrapper";
// import ThemeCustomizer from "../theme-customizer";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);

  const selectedLayout = useSelectedLayoutSegment();

  const links = marketingConfig.mainNav;

  return (
    <header
      className={`sticky top-0 py-4 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <div className="flex container gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo /> */}
          <span className="font-urban text-xl font-bold">
            {siteConfig.name}
          </span>
        </Link>

        {links && links.length > 0 ? (
          <nav className="hidden gap-6 md:flex">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                prefetch={true}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 ",
                  item.href.startsWith(`/${selectedLayout}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex">
          {" "}
          <ModeToggle />
        </div>
      </div>{" "}
    </header>
  );
}
