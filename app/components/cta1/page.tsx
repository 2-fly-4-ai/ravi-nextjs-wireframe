import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CallToAction1() {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <Card className="w-full flex flex-col justify-between overflow-hidden md:flex-row">
          <CardContent className="p-6 ">
            <div className="mb-2 flex items-center gap-2">
              <span className="bg-muted flex size-7 items-center justify-center rounded-full">
                <Sparkles className="size-4" />
              </span>
              <h4 className="text-2xl font-bold">Call To Action</h4>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <Button className="mt-8">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </CardContent>
          <img
            src="/placeholder.svg?height=384&width=384"
            alt="Integration illustration"
            className="aspect-video object-cover md:max-w-96"
          />
        </Card>
      </div>
    </section>
  );
}
