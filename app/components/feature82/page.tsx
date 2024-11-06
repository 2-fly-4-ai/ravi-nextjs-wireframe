import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const integrations = [
  {
    name: "Slack",
    description:
      "Seamlessly communicate with your team, share updates, and streamline project discussions all in one place.",
    icon: "/placeholder.svg?height=64&width=64&text=Slack",
  },
  {
    name: "Google Drive",
    description:
      "Store, access, and collaborate on files with ease. Keep all your important documents organized in the cloud.",
    icon: "/placeholder.svg?height=64&width=64&text=GDrive",
  },
  {
    name: "Dropbox",
    description:
      "A reliable solution for file storage and sharing, perfect for teams needing to collaborate from anywhere.",
    icon: "/placeholder.svg?height=64&width=64&text=Dropbox",
  },
  {
    name: "Github",
    description:
      "Manage your code repositories and collaborate on development projects with powerful version control.",
    icon: "/placeholder.svg?height=64&width=64&text=Github",
  },
];

export default function Feature82() {
  return (
    <section className="bg-background text-foreground py-32">
      <div className="container">
        <div className="grid place-items-center items-center gap-4 lg:grid-cols-5 lg:gap-16">
          <h1 className="text-balance text-center text-4xl font-semibold lg:col-span-2 lg:text-left lg:text-5xl">
            Unify Your flow with Integrations
          </h1>
          <p className="text-muted-foreground text-center text-lg lg:col-span-2 lg:text-left">
            Streamline your processes and enhance productivity by connecting all
            your favorite apps into one unified platform.
          </p>
          <Button className="mx-auto w-fit lg:mx-0 lg:ml-auto">
            Explore Integrations
          </Button>
        </div>
        <Separator className="mb-12 mt-8" />
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {integrations.map((integration, index) => (
            <li key={index}>
              <div>
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={64}
                  height={64}
                  className="h-auto w-16"
                />
                <h3 className="my-2 text-2xl font-bold">{integration.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {integration.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-12 flex items-center justify-center gap-1 text-lg font-semibold underline"
        >
          Discover All Integrations
          <ArrowRight className="h-auto w-4" />
        </a>
      </div>
    </section>
  );
}
