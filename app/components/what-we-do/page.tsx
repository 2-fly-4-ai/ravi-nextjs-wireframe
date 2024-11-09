"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Search Engineering Leadership Consulting",
    items: [
      "Build & lead your full-stack search team",
      "Technical leadership on building scalable production-quality search systems",
      "Establish search tech infrastructure to meet your business needs",
      "Mentor your team, setup processes and best practices",
    ],
  },
  {
    title: "Search Product Management Consulting",
    items: [
      "Define and analyze key search metrics",
      "Translate functional search requirements into clear technical specs",
      "Help to develop and execute a comprehensive search product vision and strategy",
      "Assess feature feasibility, data-driven planning and prioritization of search features and optimization",
    ],
  },
  {
    title: "Search Architecture Consulting",
    items: [
      "Design scalable and efficient search architectures",
      "Optimize existing search systems for performance and relevance",
      "Integrate advanced search technologies and algorithms",
      "Provide guidance on cloud-based search solutions",
    ],
  },
  {
    title: "Search Analytics and Insights Consulting",
    items: [
      "Implement robust search analytics frameworks",
      "Develop custom dashboards for search performance monitoring",
      "Analyze user search behavior and patterns",
      "Provide data-driven recommendations for search improvements",
    ],
  },
  {
    title: "Search UX/UI Consulting",
    items: [
      "Design intuitive and effective search interfaces",
      "Optimize search result presentation for better user engagement",
      "Implement advanced search features like faceted search and autocomplete",
      "Conduct user testing and gather feedback on search experiences",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section className="from-primary/5 via-background to-primary/5 bg-gradient-to-br py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-8 lg:top-24">
            <Badge>What We Do</Badge>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Search Strategic Consulting
            </h2>
            <p className="text-muted-foreground text-lg">
              Search represents the vital intersection of technical
              infrastructure and user experience, where engineering decisions
              directly impact discovery and engagement. Every architectural
              choice must be strategically aligned with user needs to deliver
              optimal results.
              <br /> <br />
              Our consulting practice combines deep technical expertise in AI
              and search technology with proven product strategy. We partner
              with engineering and product teams to implement solutions that
              balance technical excellence with exceptional user experience,
              driving measurable business outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion
              type="single"
              defaultValue="item-0"
              collapsible
              className="w-full"
            >
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-semibold">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-foreground">
                    <ul className="mt-4 space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="mt-2 h-2 w-2 rounded-full bg-primary/60 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
