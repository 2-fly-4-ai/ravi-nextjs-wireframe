"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero59() {
  return (
    <section className="relative bg-gray-200 -mt-28  min-h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mountain reflected in a lake at dusk"
        fill
        priority
        className="object-cover"
      />
      <div className=" bg-black/10 absolute inset-0" />
      <div className=" relative z-10 mx-auto flex  border h-[90vh] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline, optimize and enhance business processes with the world's
            most scalable AI platform.
          </h1>
          <p className="text-white/90 text-xl md:text-2xl">
            AI + data, online. At any scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="text-lg">
              <Link href="/trial">Start your free trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link href="/solutions">Our solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
