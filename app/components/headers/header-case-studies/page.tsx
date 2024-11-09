import { Badge } from "@/components/ui/badge";

export default function Header1() {
  return (
    <section className="relative -mt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/428e1496-7636-4e65-f1da-6f8890bf9800/public')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="relative min-h-[50vh] w-full flex items-center">
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-10">
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

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs sm:text-sm font-bold tracking-wider text-[#6366F1]">
              CASE STUDIES
            </p>
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
              See How Companies Grow with Searchplex
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs sm:text-sm"
              >
                VESPA-AI
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs sm:text-sm"
              >
                LEGALTECH
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
