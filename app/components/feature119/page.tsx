import Image from "next/image";
import { Users, Calendar, ThumbsUp, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Trusted Employees",
    description:
      "Each member of our team brings a wealth of expertise and a commitment to your success.",
  },
  {
    icon: Calendar,
    title: "Year of Experience",
    description:
      "Explore what defines a successful project and how to achieve it. From meticulous planning.",
  },
  {
    icon: ThumbsUp,
    title: "Positive Reviews",
    description:
      "Discover the impact of positive reviews and how they reflect the quality and satisfaction.",
  },
  {
    icon: Medal,
    title: "Achieve Awards",
    description:
      "Uncover the significance of achieving awards and the recognition they bring.",
  },
];

export default function Feature119() {
  return (
    <section className="container mx-auto py-32">
      <div className="mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text text-primary font-medium">About Us</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Mastering the Art of Effective Communication in the Workplace.
              </h1>
              <p className="text-muted-foreground">
                This blog delves into techniques for improving clarity, active
                listening, and meaningful interactions with colleagues and
                clients. Learn how to navigate complex conversations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.slice(0, 2).map((feature, index) => (
                <Card key={index} className="border-none">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-semibold">{feature.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1493839523149-2864fca44919?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Two people having a conversation in a modern office setting"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bottom Features */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {features.slice(2).map((feature, index) => (
              <Card key={index} className="border-none">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
