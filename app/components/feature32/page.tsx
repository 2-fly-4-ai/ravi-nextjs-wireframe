export default function Feature32() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum perspiciatis consectetur assumenda incidunt.",
      author: "John Doe",
      title: "CEO, Company Example",
      featured: true,
    },
    {
      quote: "Lorem ipsum dolor sit amet consecte adipisicing elit.",
      author: "John Doe",
      title: "CEO, Company Example",
      featured: false,
    },
    {
      quote: "Lorem ipsum dolor sit amet consecte adipisicing elit.",
      author: "John Doe",
      title: "CEO, Company Example",
      featured: false,
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-14 text-center text-4xl font-medium lg:text-7xl">
          Loved by clients
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-accent rounded-lg ${
                testimonial.featured
                  ? "p-16 md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : "p-10"
              }`}
            >
              <div
                className={`flex h-full flex-col justify-between ${
                  testimonial.featured ? "gap-14" : "gap-14"
                }`}
              >
                <q
                  className={`${
                    testimonial.featured
                      ? "pt-8 text-2xl lg:pt-14 lg:text-4xl"
                      : "text-lg"
                  } font-medium`}
                >
                  {testimonial.quote}
                </q>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
