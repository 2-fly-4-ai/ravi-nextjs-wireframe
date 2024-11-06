"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { marketingConfig } from "@/app/config/marketing";
import { siteConfig } from "@/app/config/site";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const links = marketingConfig.mainNav;

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Reset active submenu when closing the main menu
      setActiveSubmenu(null);
    }
  }, [open]);

  const handleSubmenuClick = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const renderNavItem = (item: any) => {
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <li key={item.title} className="py-3">
          <button
            onClick={() => handleSubmenuClick(item.title)}
            className="flex w-full items-center justify-between font-medium capitalize"
          >
            {item.title}
            <ChevronRight
              className={cn(
                "size-4 transition-transform",
                activeSubmenu === item.title && "rotate-90"
              )}
            />
          </button>
          {activeSubmenu === item.title && (
            <ul className="mt-2 space-y-2 pl-4">
              {item.children.map((child: any) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.href} className="py-3">
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className="flex w-full font-medium capitalize"
        >
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted"
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>

      <nav
        className={cn(
          "fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
          open && "block"
        )}
      >
        <ul className="grid divide-y divide-muted">
          {links.map((item) => renderNavItem(item))}
        </ul>

        <div className="mt-5 flex items-center justify-end space-x-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Github className="size-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

export default NavMobile;
