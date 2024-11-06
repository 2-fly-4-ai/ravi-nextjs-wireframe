import Image from "next/image";

export default function Feature110() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-7 md:text-center">
          <h2 className="text-2xl font-bold md:text-6xl">
            Streamlined Project Workflow
          </h2>
          <p className="text-sm text-muted-foreground md:text-lg">
            Simplify your workflow with our tools that provide clear insights,
            minimizing the complexity of managing intricate deployment data.
          </p>
        </div>
        <div className="mx-auto mt-14 flex  flex-col gap-4 lg:px-16">
          <StepItem
            number={1}
            title="Onboarding"
            description="We begin with a collaborative kickoff session to align your team and ours on project objectives, requirements, and a clear roadmap. This lays the foundation for a successful partnership."
            imageSrc="https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/bf3b96e3-f2ec-475a-ab8d-73f37fac5400/public"
          />
          <StepItem
            number={2}
            title="Discovery"
            description="Next, we conduct in-depth research and analysis to deeply understand your unique project challenges and opportunities. Working closely with your team, we define the project scope, objectives, and the optimal strategy to achieve your goals."
            imageSrc="https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/b0c20a85-1f6a-4af5-6a8e-b5873f751c00/public"
            showConnectors
          />
          <StepItem
            number={3}
            title="Delivery"
            description="Our hands-on development experts then take the lead, crafting tailored solutions that meet your specific needs. We actively build, develop, and optimize these solutions to exceed your expectations."
            imageSrc="https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/d18408d7-0251-4cbb-40e8-fea23daec500/public"
            showConnectors
          />
          <StepItem
            number={4}
            title="Hand-off"
            description="Upon completion, we facilitate a seamless transition and integration, ensuring a successful launch. We also provide ongoing support and maintenance to guarantee the continued success of your search technology."
            imageSrc="https://imagedelivery.net/Kpcbofvpelk1jdjXmWIr5w/4803a4e6-c16c-4ee5-bdf6-32422a22f000/public"
          />
        </div>
      </div>
    </section>
  );
}

function StepItem({
  number,
  title,
  description,
  imageSrc,
  showConnectors = false,
}: {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  showConnectors?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
      <div className="flex gap-4 ">
        <div className="relative flex flex-col items-center justify-between gap-1">
          {showConnectors && (
            <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
          )}
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === 1
                ? "bg-gradient-to-b from-transparent to-primary"
                : number === 4
                ? "bg-primary"
                : "bg-primary"
            } opacity-70`}
          />
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary bg-secondary font-mono text-lg font-bold text-primary">
            {number}
          </span>
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === 4
                ? "bg-gradient-to-b from-primary to-transparent"
                : "bg-primary opacity-70"
            }`}
          />
          {showConnectors && (
            <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:p-4">
          <h3 className="text-xl font-semibold min-[960px]:text-2xl">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground min-[960px]:text-lg">
            {description}
          </p>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="Placeholder image"
        width={400}
        height={225}
        className="z-10 aspect-video w-full border border-border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
      />
    </div>
  );
}
