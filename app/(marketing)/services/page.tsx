import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Compass, Laptop, Layers, Pen, Zap } from "lucide-react";
import Link from "next/link";
import Header1 from "@/app/components/headers/header-services/page";
import Image from "next/image";
import Feature82 from "@/app/components/feature82/page";
import Feature120 from "@/app/components/Feature120/page";

export default function EnhancedServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites tailored to your specific needs, from simple landing pages to complex web applications.",
      icon: <Laptop className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Create intuitive and visually appealing user interfaces that enhance user experience and engagement.",
      icon: <Pen className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Develop cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      icon: <Compass className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrate third-party APIs and services to extend the functionality of your applications.",
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage cloud technologies to build scalable, reliable, and cost-effective solutions for your business.",
      icon: <Layers className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Improve the speed and efficiency of your existing web applications for a better user experience.",
      icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
    },
  ];

  return (
    <div className="">
      <Header1 />

      <div className="container py-16">
        {" "}
        <img src="/static/images/search-engines.png" />
      </div>

      <Feature120 />

      {/* <Feature82 /> */}
      {/* <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-center">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}

      <section className="container py-32">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Our Approach to Digital Excellence
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Tailored Solutions for Your Business
            </h3>
            <p className="text-muted-foreground mb-6">
              At our core, we believe that every business is unique and deserves
              a customized approach to its digital presence. Our team of expert
              developers and designers work closely with you to understand your
              specific needs, goals, and target audience. This collaborative
              process ensures that we deliver solutions that not only meet but
              exceed your expectations.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you're a startup looking to make your mark or an
              established enterprise aiming to stay ahead of the curve, our
              services are scalable and adaptable to your requirements. We pride
              ourselves on our ability to blend creativity with technical
              expertise, resulting in digital solutions that are both visually
              stunning and functionally robust.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Cutting-Edge Technology, Timeless Design
            </h3>
            <p className="text-muted-foreground mb-6">
              The digital landscape is constantly evolving, and we make it our
              mission to stay at the forefront of these changes. Our team is
              continuously learning and implementing the latest technologies and
              best practices in web development, ensuring that your digital
              assets are built on a solid, future-proof foundation.
            </p>
            <p className="text-muted-foreground mb-6">
              However, we understand that true digital success goes beyond just
              using the newest tools. That's why we combine cutting-edge
              technology with timeless design principles. Our UI/UX designers
              focus on creating intuitive, engaging interfaces that resonate
              with your audience and stand the test of time. This perfect blend
              of innovation and usability is what sets our services apart and
              drives tangible results for your business.
            </p>
          </Card>
        </div>
      </section>

      <div className="text-center border py-16 bg-muted">
        <h2 className="text-3xl font-bold mb-4">
          Ready to elevate your digital presence?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's collaborate to create digital solutions that drive your business
          forward and leave a lasting impression on your audience.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us to Start Your Project</Link>
        </Button>
      </div>
    </div>
  );
}
