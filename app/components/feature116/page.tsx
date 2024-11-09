import Image from "next/image";

export default function Feature116() {
  const activities = [
    {
      image: "/placeholder.svg",
      alt: "Group of people kayaking on a lake surrounded by forest",
      title: "Adventure Programs",
    },
    {
      image: "/placeholder.svg",
      alt: "Historic brick building with clock tower against blue sky",
      title: "Historic Preservation",
    },
    {
      image: "/placeholder.svg",
      alt: "Park ranger smiling while working outdoors",
      title: "Park Operations",
    },
    {
      image: "/placeholder.svg",
      alt: "Person filling water bottle at park station",
      title: "Sustainability",
    },
  ];

  return (
    <section className=" py-16 md:py-24 w-full">
      <div className="mx-auto container w-full">
        <div className="mb-16  ">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
            Areas of Work
          </h2>
          <p className="text-3xl w-4/5 font-bold leading-relaxed tracking-tight md:text-4xl">
            Harness the Power{" "}
            <span className="text-primary font-bold">
              of Next-generation AI Search
            </span>{" "}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={activity.image}
                alt={activity.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-medium text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
