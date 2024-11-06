"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Hero59() {
  return (
    <section className="relative -mt-28 w-full overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-[url('https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/7ae15108-a876-4483-0a7a-486344674b00/public')] bg-cover bg-no-repeat z-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Aurora effect layer */}
      <div className="absolute inset-0 z-20">
        <div
          className={`
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
            [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]
          `}
        />
      </div>

      {/* Content layer - highest z-index */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-30 flex flex-col gap-4 items-center justify-center px-4 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto flex min-h-[60vh] flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-white text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Streamline, optimize and enhance business processes with the
              world's most scalable AI platform.
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl">
              AI + data, online. At any scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="/trial">Start your free trial</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">Our solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
