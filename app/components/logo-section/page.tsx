import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LogoSection() {
  const companies = [
    {
      name: "LexisNexis",
      logo: "static/images/lexisnexis-logo.png",
    },
    {
      name: "Primer AI",
      logo: "static/images/primer-ai-logo.png",
    },
    {
      name: "Binance",
      logo: "static/images/binance-logo.png",
    },
    {
      name: "Splore AI",
      logo: "static/images/splore-ai-logo.png",
      title: "Splore AI - A Temasek venture",
    },
    {
      name: "Curated AI",
      logo: "static/images/curated-ai-logo.png",
    },
  ];

  return (
    <section className="py-32">
      <Card className="container w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl  text-center ">
            Companies We've Helped
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            itemScope
            itemType="https://schema.org/Organization"
            className="flex flex-wrap items-center justify-center gap-8 p-4"
          >
            <span itemProp="name" className="sr-only">
              Searchplex
            </span>

            {companies.map((company) => (
              <div
                key={company.name}
                itemScope
                itemType="https://schema.org/Organization"
                itemProp="customer"
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center p-4"
              >
                <img
                  className="max-h-24 w-auto object-contain"
                  src={company.logo}
                  alt={`${company.name} logo`}
                  title={company.title || company.name}
                  width={200}
                  height={48}
                />
                <span itemProp="name" className="sr-only">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
