import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header1 from "@/app/components/headers/header-case-studies/page";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Ravindra Harige",
      role: "Founder",
      image: "/static/images/Ravi.jpg",
      country: "🇳🇱 NL",
    },
    {
      name: "Prasad Deshpande",
      role: "Senior Consultant",
      image: "/static/images/Prasad.jpeg",
      country: "🇦🇺 AU",
    },
    {
      name: "Cedric Beuzit",
      role: "Managing Consultant",
      image: "/static/images/Cedric-5.png",
      country: "🇻🇳 VN",
    },
    {
      name: "John T. Kane",
      role: "Senior Consultant",
      image: "/static/images/John.jpg",
      country: "🇺🇸 US",
    },
  ];

  return (
    <section>
      <div className="">
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div> */}
        <Header1 />
        <div className="relative container py-16">
          <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center"
                itemProp="employee"
                itemScope
                itemType="https://schema.org/Person"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="mb-4 aspect-square  border bg-white p-1 object-cover"
                  itemProp="image"
                />
                <h3 className="mb-1 text-xl font-bold" itemProp="name">
                  {member.name}
                </h3>
                <p className="text-gray-600" itemProp="jobTitle">
                  {member.role}
                </p>
                <span className="mt-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  {member.country}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">About Us</h2>
              <p className="mb-4 text-gray-600" itemProp="description">
                Founded in the Netherlands in 2021,{" "}
                <span itemProp="name">Searchplex</span> started as an
                independent consulting venture in the search technology field.
                Our journey began with a deep-rooted passion for search
                technology and solving search problems across various industries
                and verticals.
              </p>
              <p className="mb-4 text-gray-600">
                Over time, this endeavor evolved into a cohesive team of search
                specialists, driven by the common goal of empowering businesses
                through the capabilities of search technology and AI. Together,
                we bring a wealth of experience from industry leaders like
                LexisNexis, Wolters Kluwer, Thomson Reuters, Clarivate, Maluuba
                (Now Microsoft Research), and more.
              </p>
              <p className="text-gray-600">
                Whether you need to build search solutions or seek strategic
                leadership for your search-related endeavors, we're here to
                empower your journey.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-4 text-gray-600">
                At Searchplex, our mission is to apply our expertise and
                dedicated passion to assist businesses at every stage of their
                search technology journey. We believe that powerful search
                capabilities are crucial for businesses to thrive in the digital
                age.
              </p>
              <p className="mb-4 text-gray-600">
                We strive to empower organizations by providing cutting-edge
                search solutions tailored to their specific needs. Our team of
                experts is committed to staying at the forefront of search
                technology and AI advancements, ensuring that our clients
                benefit from the latest innovations in the field.
              </p>
              <p className="text-gray-600">
                Through our collaborative approach and deep industry knowledge,
                we aim to transform the way businesses interact with their data,
                enabling them to make faster, more informed decisions and
                deliver exceptional experiences to their customers.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <h3 className="text-xl font-bold">
              Part of
              <br />
              Our Global Team
            </h3>
            <Button variant="default">Get to know the team</Button>
          </div>

          <div
            className="mt-10 w-full border-t border-b border-blue-500 bg-slate-50 px-4 py-3 text-gray-700"
            role="alert"
          >
            <p className="font-bold">Let's collaborate!</p>
            <p className="text-sm">
              If you share our passion for the exciting world of search and want
              to work together on building AI-powered search solutions, please
              reach out at{" "}
              <a
                href="mailto:ravi@searchplex.net"
                className="text-indigo-600"
                itemProp="email"
              >
                ravi@searchplex.net
              </a>
              .
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Searchplex company is incorporated in Amsterdam, Netherlands, and
            registered as 'Searchplex B.V' under the number '89631315' with the
            Chamber of Commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
