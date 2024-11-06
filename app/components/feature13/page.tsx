import Image from "next/image";

const features = [
  {
    forGroup: "DESIGNERS",
    title: "Built for artists and designers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
    imageSrc: "/placeholder.svg",
  },
  {
    forGroup: "DEVELOPERS",
    title: "Built for coders and developers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
    imageSrc: "/placeholder.svg",
  },
];

export default function Feature13() {
  return (
    <section className="py-32">
      <div className="container ">
        <h2 className="text-3xl font-medium lg:text-4xl">Case Studies</h2>
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accent flex flex-col justify-between rounded-lg"
            >
              <div className="flex justify-between gap-10 border-b">
                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                  <p className="text-muted-foreground text-xs">
                    FOR {feature.forGroup}
                  </p>
                  <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                </div>
                <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                  <Image
                    src={feature.imageSrc}
                    alt="placeholder"
                    width={200}
                    height={300}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="text-muted-foreground p-4 md:p-8">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
