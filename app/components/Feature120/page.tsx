import Image from "next/image";
import { Check, Layers, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Feature120() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Section with Icon and Features */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-md font-semibold">Services</span>
          </div>
          <Link
            href="/services"
            className="mb-auto mt-4 inline-flex items-center font-medium text-primary hover:underline"
          >
            Explore services
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <Separator className="my-8 bg-border" />
      </div>

      <div className="container mx-auto space-y-16 px-4">
        {/* First Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Badge variant="secondary">New</Badge>
            <h2 className="text-4xl font-bold">
              Work with tools you already use
            </h2>
            <p className="text-lg text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul className="space-y-4">
              {[
                "Continuous integration and deployment",
                "Development workflow",
                "Knowledge management",
                "Collaboration tools integration",
                "Automated testing and quality assurance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Team working on laptops"
              fill
              className="rounded-lg bg-accent object-cover p-4"
            />
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Second Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 h-[400px] lg:order-1 lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Person typing on laptop"
              fill
              className="bg-accent object-cover p-4"
            />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <Badge variant="secondary">Pro</Badge>
            <h2 className="text-4xl font-bold">
              We invest in the world's potential
            </h2>
            <p className="text-lg text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul className="space-y-4">
              {[
                "Dynamic reports and dashboards",
                "Templates for everyone",
                "Development workflow",
                "Limitless business automation",
                "Knowledge management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Third Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Badge variant="secondary">Enterprise</Badge>
            <h2 className="text-4xl font-bold">
              Scale your infrastructure seamlessly
            </h2>
            <p className="text-lg text-muted-foreground">
              Build robust and scalable systems that grow with your business.
              Our enterprise solutions provide the reliability and performance
              you need for mission-critical operations.
            </p>

            <ul className="space-y-4">
              {[
                "High-availability infrastructure",
                "Load balancing and scaling",
                "Disaster recovery planning",
                "24/7 monitoring and alerts",
                "Performance optimization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Enterprise-grade solutions designed for reliability, security, and
              scalability at every level of your organization.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Data center infrastructure"
              fill
              className="rounded-lg bg-accent object-cover p-4"
            />
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Fourth Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 h-[400px] lg:order-1 lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Security dashboard"
              fill
              className="bg-accent object-cover p-4"
            />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <Badge variant="secondary">Security</Badge>
            <h2 className="text-4xl font-bold">
              Enterprise-grade security solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Protect your digital assets with our comprehensive security suite.
              Stay ahead of threats with advanced detection and response
              capabilities.
            </p>

            <ul className="space-y-4">
              {[
                "Advanced threat detection",
                "Zero-trust architecture",
                "Compliance management",
                "Identity and access control",
                "Data encryption at rest and in transit",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Keep your business protected with industry-leading security
              solutions and expert guidance.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Fifth Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Badge variant="secondary">Analytics</Badge>
            <h2 className="text-4xl font-bold">Data-driven decision making</h2>
            <p className="text-lg text-muted-foreground">
              Transform your raw data into actionable insights. Our analytics
              platform helps you understand trends, predict outcomes, and make
              informed decisions.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time analytics dashboard",
                "Predictive modeling",
                "Custom reporting tools",
                "Data visualization",
                "Machine learning integration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Leverage the power of data analytics to drive growth and optimize
              your business operations.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Analytics dashboard"
              fill
              className="rounded-lg bg-accent object-cover p-4"
            />
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Sixth Section */}
        <div className="grid items-center gap-12 pb-8 lg:grid-cols-2">
          <div className="relative order-2 h-[400px] lg:order-1 lg:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Cloud infrastructure"
              fill
              className="bg-accent object-cover p-4"
            />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <Badge variant="secondary">Cloud</Badge>
            <h2 className="text-4xl font-bold">Cloud-native solutions</h2>
            <p className="text-lg text-muted-foreground">
              Modernize your applications with cloud-native architecture. Build,
              deploy, and scale with confidence using our cloud expertise.
            </p>

            <ul className="space-y-4">
              {[
                "Multi-cloud strategy",
                "Containerization services",
                "Serverless computing",
                "Cloud cost optimization",
                "Application modernization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Embrace the future of computing with our comprehensive cloud
              solutions and expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
