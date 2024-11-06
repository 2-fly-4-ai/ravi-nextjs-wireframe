import { MoveRight } from "lucide-react";

export default function Feature35() {
  return (
    <section className="bg-background text-foreground py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-20">
          <h2 className="row-span-2 h-min border-b-4 pb-4 text-3xl font-semibold">
            Built by the best and brightest
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                Technologies to scale
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="text-primary inline-flex items-center hover:underline"
            >
              <span>Learn more</span>
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                Proven methodologies
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="text-primary inline-flex items-center hover:underline"
            >
              <span>Learn more</span>
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                A culture of innovation
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="text-primary inline-flex items-center hover:underline"
            >
              <span>Learn more</span>
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
