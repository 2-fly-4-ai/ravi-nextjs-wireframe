import { Badge } from "@/components/ui/badge";

export default function Header1() {
  return (
    <div className="relative min-h-[50vh] sm:min-h-[40vh] -mt-20 w-full border">
      <div
        className="absolute inset-0 bg-[url('https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/f906b5b4-72db-4c87-f5ab-af8841065700/public')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="relative z-10 container py-16">
        <div className="max-w-3xl mt-20">
          <p className="mb-6 text-sm font-medium tracking-wider text-[#6366F1]">
            CONTACT US
          </p>
          <h1 className="mb-8 text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Got Search Needs? Contact Us to Find a Solution
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
