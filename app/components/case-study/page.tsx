import { Card, CardContent } from "@/components/ui/card";

export default function Feature36() {
  return (
    <section className="bg-background text-foreground py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card className="group lg:col-span-2 lg:row-span-2">
            <CardContent className="bg-accent hover:border-primary h-full items-start border border-transparent p-12 hover:cursor-pointer hover:rounded-lg lg:p-20">
              <div className="flex flex-col gap-8">
                <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex w-fit items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                  Studies
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-base lg:text-lg lg:font-medium">
                    Case Study
                  </p>
                  <h3 className="text-xl font-medium lg:text-5xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="lg:text-lg lg:font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat cupiditate dicta accusamus quae nesciunt deserunt
                    cum deleniti atque consequuntur quis!
                  </p>
                </div>
                <p className="font-medium group-hover:underline">
                  Continue reading
                </p>
              </div>
            </CardContent>
          </Card>
          {[...Array(5)].map((_, index) => (
            <Card key={index} className="group">
              <CardContent className="bg-accent hover:border-primary h-full items-start border border-transparent p-12 hover:cursor-pointer hover:rounded-lg">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <p>Case Study</p>
                    <h3 className="text-xl font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </div>
                  <p className="font-medium group-hover:underline">
                    Continue reading
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
