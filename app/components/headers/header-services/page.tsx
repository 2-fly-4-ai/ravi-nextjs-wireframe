import { Badge } from "@/components/ui/badge";

export default function Header1() {
  return (
    <div className="relative min-h-[50vh] sm:min-h-[40vh] -mt-20 w-full ">
      <div
        className="absolute inset-0 bg-[url('https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/5f065fb2-3a9a-4363-e8d6-b2d6f7cb7300/public')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40 " aria-hidden="true" />

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

      <div className="relative z-10 container py-16">
        <div className="absolute inset-0 z-20"></div>
        <div className="max-w-3xl mt-20">
          <p className="mb-6 text-sm font-bold tracking-wider text-[#6366F1]">
            OUR EXTENSIVE SERVICES
          </p>
          <h1 className="mb-8 text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get to Know Our Services and Offerings
          </h1>
          <div className="flex gap-3">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              VESPA-AI
            </Badge>
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              LEGALTECH
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
