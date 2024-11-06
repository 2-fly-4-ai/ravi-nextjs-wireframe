"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { marketingConfig } from "@/app/config/marketing";
import { siteConfig } from "@/app/config/site";
import { useScroll } from "@/app/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavBarProps {
  scroll?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const links = marketingConfig.mainNav;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex items-center backdrop-blur w-full justify-center transition-all",
        scroll
          ? scrolled
            ? "bg-background/90 backdrop-blur-xl py-4"
            : "bg-transparent py-4"
          : "border-b py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Search
            className={cn(
              "w-6 h-6",
              scrolled ? "text-foreground" : "text-white"
            )}
          />
          <span
            className={cn(
              "font-urban text-xl font-bold",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {links.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        scrolled ? "text-foreground" : "text-white"
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary p-6 no-underline outline-none focus:shadow-md"
                              href={item.href}
                            >
                              <div className="bg-accent w-min rounded-full p-2">
                                {" "}
                                <Search className="h-10 w-10 " />
                              </div>

                              <div className="mb-2 mt-4 text-lg text-white font-medium">
                                {item.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                            Quick Links
                          </h3>
                          <ul className="space-y-2">
                            {item.children.map((child, childIndex) => (
                              <ListItem
                                key={childIndex}
                                href={child.href}
                                title={child.title}
                              >
                                {child.description}
                              </ListItem>
                            ))}
                          </ul>
                          <div className="mt-4 pt-4 border-t">
                            <Link
                              href={item.href}
                              className="group inline-flex items-center text-sm font-medium text-primary"
                            >
                              View all {item.title}
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={item.disabled ? "#" : item.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        scrolled ? "text-foreground" : "text-white"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex gap-4">
            <ModeToggle />
            <Button
              className={cn(
                "transition-all",
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary text-white hover:bg-white/20"
              )}
            >
              Book A Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded-md  border leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm py-4  hover:text-black  text-center font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
