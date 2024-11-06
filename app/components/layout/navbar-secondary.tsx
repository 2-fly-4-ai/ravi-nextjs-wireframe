"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

import { cn } from "@/lib/utils";

import { marketingConfig } from "@/app/config/marketing";
import { siteConfig } from "@/app/config/site";
import { useScroll } from "@/app/hooks/use-scroll";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);

  const links = marketingConfig.mainNav;

  return (
    <header
      className={`sticky top-0 py-4 z-40 flex items-center w-full justify-center bg-background/60 backdrop-blur-xl transition-all  ${
        scroll ? (scrolled ? "border-b" : "bg-transparent ") : "border-b"
      }`}
    >
      <div className="container flex">
        <div className="flex w-full  gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Icons.logo /> */}
            <img
              src="https://www.searchplex.net/static/images/searchplex-logo.svg"
              className="w-8 h-8"
            />
            {/* <Search strokeWidth={2} /> */}
            <span
              className={`font-urban text-xl font-bold ${
                scrolled ? "text-black" : "text-black/90"
              }`}
            >
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
                    scrolled ? "text-foreground" : "text-black/90",
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
          <div className="hidden sm:flex gap-4">
            {" "}
            <ModeToggle />
            <Button>Book A Call</Button>
          </div>
        </div>{" "}
      </div>
    </header>
  );
}
