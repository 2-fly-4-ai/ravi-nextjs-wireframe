import { Button } from "@/components/ui/button";
import {
  MousePointerClick,
  Network,
  Gauge,
  Maximize2,
  RefreshCw,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "Vector, text and structured search",
    description: "Powerful search capabilities across multiple data types",
  },
  {
    icon: Network,
    title: "Distributed machine-learned ranking",
    description: "Advanced ranking algorithms for better results",
  },
  {
    icon: Gauge,
    title: "Unbeatable performance",
    description: "Lightning-fast response times at any scale",
  },
  {
    icon: Maximize2,
    title: "Infinite automated scalability",
    description: "Grow seamlessly as your needs expand",
  },
  {
    icon: RefreshCw,
    title: "Continuous deployment & upgrades",
    description: "Stay up-to-date with zero downtime",
  },
  {
    icon: Shield,
    title: "Fully managed, with strong security",
    description: "Enterprise-grade security and management",
  },
];

export default function Features113() {
  return (
    <section className="bg-background py-24 border container">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          All you need to build data-driven applications
        </h2>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="hover:bg-accent flex flex-col items-center rounded-lg p-6 text-center transition-colors"
          >
            <div className="bg-accent text-primary mb-4 rounded-full p-3">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button size="lg" className="w-96">
          Features
        </Button>
      </div>
    </section>
  );
}