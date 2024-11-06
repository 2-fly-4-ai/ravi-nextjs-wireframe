import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function CaseStudyCard() {
  const details = [
    { label: "Website", value: "chat.curatedai.eu" },
    { label: "Industry", value: "Legal Technology" },
    { label: "Use Cases", value: "RAG" },
    { label: "Cloud", value: "AWS" },
    { label: "Solution", value: "Vespa AI" },
  ];

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <Image
          src="/static/images/binance-logo.png"
          alt="CuratedAI Logo"
          width={150}
          height={40}
        />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          CuratedAI is a legal technology startup specializing in privacy and IT
          law. The platform provides a research tool that allowing for natural
          language searches over EU legislation and case law, offering instant,
          accurate, and legally relevant answers supported by references. The
          startup is led by two founders and focuses on empowering legal
          professionals through advanced information retrieval.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
          {details.map(({ label, value }) => (
            <div key={label}>
              <div className="text-muted-foreground font-medium mb-1">
                {label}
              </div>
              <div className="font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
