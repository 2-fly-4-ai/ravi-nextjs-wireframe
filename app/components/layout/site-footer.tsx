import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/app/config/site";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "../forms/newsletter-form";
import { GithubIcon } from "lucide-react";

import { ModeToggle } from "./mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn("mx-auto flex w-full justify-center border-t", className)}
    >
      <div className="  py-8">
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <span className="text-sm font-medium text-foreground">
                {section.title}
              </span>
              <ul className="mt-4 space-y-3">
                {section.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-center sm:items-start md:col-span-2 lg:col-span-1">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            Built by{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              mickasmt
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            . Illustrations by{" "}
            <Link
              href="https://popsy.co"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Popsy
            </Link>
            .
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <GithubIcon className="size-5" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
