"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Hero59() {
  return (
    <section className="relative bg-gray-200 -mt-28   w-full overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className=" bg-black/10 absolute inset-0" />
          <div className="container relative z-10 mx-auto flex   h-[60vh] flex-col justify-end  pb-20">
            <div className="max-w-3xl space-y-8">
              <h1 className="text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Streamline, optimize and enhance business processes with the
                world's most scalable AI platform.
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
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
