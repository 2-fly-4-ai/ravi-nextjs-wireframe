import { CircleArrowRight, Files, Settings } from "lucide-react";
import Header1 from "@/app/components/headers/header-about/page";

export default function About1() {
  return (
    <div className="">
      <Header1 />
      <section className="container mx-auto py-24">
        <div className="flex flex-col gap-28">
          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/placeholder.svg"
              alt="Placeholder"
              className="size-full max-h-96 object-cover"
            />
            <div className="flex flex-col justify-between gap-10 bg-muted p-10">
              <p className="text-sm text-muted-foreground">OUR MISSION</p>
              <p className="text-lg font-medium">
                We believe that building software should be insanely easy. That
                everyone should have the freedom to create the tools they need,
                without any developers, designers or drama.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-20">
            <div className="max-w-xl">
              <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                We make creating software ridiculously easy
              </h2>
              <p className="text-muted-foreground">
                We aim to help empower 1,000,000 teams to create their own
                software. Here is how we plan on doing it.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: Files,
                  title: "Being radically open",
                  description:
                    "We believe there's no room for big egos and there's always time to help each other. We strive to give and receive feedback, ideas, perspectives.",
                },
                {
                  icon: CircleArrowRight,
                  title: "Moving the needle",
                  description:
                    "Boldly, bravely and with clear aims. We seek out the big opportunities and double down on the most important things to work on.",
                },
                {
                  icon: Settings,
                  title: "Optimizing for empowerment",
                  description:
                    "We believe that everyone should be empowered to do whatever they think is in the company's best interests.",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-5 flex size-12 items-center justify-center bg-accent">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mb-3 mt-2 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-10 text-sm font-medium text-muted-foreground">
                JOIN OUR TEAM
              </p>
              <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                We're changing how software is made
              </h2>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Placeholder"
                className="mb-6 max-h-36 w-full object-cover"
              />
              <p className="text-muted-foreground">
                And we're looking for the right people to help us do it. If
                you're passionate about making change in the world, this might
                be the place for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}