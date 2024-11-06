import { CircleArrowRight, Files, Settings, Mail } from "lucide-react";
import Header1 from "@/app/components/headers/header-single-blog/page";
import CaseStudyCard from "@/app/components/case-study-card/page";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogPage() {
  const tableOfContents = [
    { title: "Overview", href: "#overview" },
    { title: "Challenge", href: "#challenge" },
    { title: "Solution", href: "#solution" },
    { title: "Implementation", href: "#implementation" },
    { title: "Results", href: "#results" },
    { title: "Conclusion", href: "#conclusion" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header1 />
      <main className="container  mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col max-w-7xl lg:flex-row-reverse gap-8 ">
          <aside className="lg:w-2/6 lg:sticky lg:top-24 lg:self-start space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="w-full justify-start text-left"
                      asChild
                    >
                      <a href={item.href}>{item.title}</a>
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>
                  Stay updated with our latest case studies and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </aside>
          <div className="lg:w-3/4 space-y-12">
            <CaseStudyCard />
            <section id="overview" className="scroll-mt-24 ">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">
                This case study explores the development and implementation of a
                multilingual legal search engine for CuratedAI, showcasing the
                challenges faced and solutions devised in creating an advanced
                tool for legal professionals.
              </p>

              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground">
                The main challenge was to create a search engine capable of
                understanding and processing legal terminology across multiple
                languages while providing accurate and relevant results from a
                vast database of EU legislation and case law.
              </p>

              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground">
                CuratedAI developed a sophisticated natural language processing
                system integrated with Vespa AI, enabling efficient multilingual
                searches and context-aware result ranking.
              </p>

              <h2 className="text-2xl font-bold mb-4">Implementation</h2>
              <p className="text-muted-foreground">
                The implementation involved creating a robust data pipeline for
                ingesting and indexing legal documents, developing custom NLP
                models for legal terminology, and optimizing search algorithms
                for performance and accuracy.
              </p>

              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-muted-foreground">
                The new search engine significantly improved search speed and
                accuracy, reducing research time for legal professionals by up
                to 70% and increasing the relevance of search results by 85%.
              </p>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-muted-foreground">
                CuratedAI's multilingual legal search engine represents a
                significant advancement in legal technology, demonstrating the
                power of AI in enhancing legal research and decision-making
                processes.
              </p>
            </section>
            <Card className="mt-16">
              <CardHeader>
                <CardTitle>Ready to Transform Your Legal Research?</CardTitle>
                <CardDescription>
                  Experience the power of CuratedAI's multilingual legal search
                  engine for yourself.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our team of experts is ready to show you how our advanced AI
                  technology can streamline your legal research process and
                  improve your decision-making.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full sm:w-auto">
                  <CircleArrowRight className="mr-2 h-5 w-5" /> Schedule a Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
