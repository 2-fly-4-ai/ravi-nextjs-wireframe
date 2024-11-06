import Hero59 from "../components/hero59/page";
import Feature116 from "../components/feature116/page";
import Feature119 from "../components/feature119/page";
import Feature112 from "../components/feature112/page";
import Features113 from "../components/feature113/page";
import Feature13 from "../components/feature13/page";
import BlogList1 from "../components/blog-list1/page";
import CallToAction1 from "../components/cta1/page";
import Feature32 from "../components/feature32/page";
import CTASection from "../components/cta14/page";
import LogoSection from "../components/logo-section/page";
import Feature43 from "../components/feature43/page";
import SearchSolutions from "../components/search-solutions/page";
import WhatWeDo from "../components/what-we-do/page";
import Feature110 from "../components/feature110/page";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero59 />
      <LogoSection />

      <WhatWeDo />

      <Feature116 />

      {/* <Feature112 /> */}
      <SearchSolutions />

      <Feature110 />

      <Feature32 />
      <Feature119 />
      <Feature43 />

      {/*  */}

      <BlogList1 />
      <Feature13 />
      <CallToAction1 />
      <CTASection />
    </main>
  );
}
