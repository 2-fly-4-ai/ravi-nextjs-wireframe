import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SearchSolutions() {
  return (
    <div className="container mx-auto px-4 py-32 space-y-8">
      <div className="space-y-2">
        <p className="text font-medium text-primary">What We Do</p>
        <h1 className="text-4xl font-bold tracking-tight">
          Search Solution Consulting
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="">
          <CardHeader>
            <CardTitle className=" text-xl">Build for your vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground ">
              Turn your search vision into reality. We help startups and growing
              businesses build powerful, scalable search infrastructure from day
              one. Get the foundation right and accelerate your development
              journey.
            </p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className=" text-xl">Extend your capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground ">
              Enhance your existing search with cutting-edge AI features. We
              integrate advanced capabilities that drive better relevance and
              deeper insights, keeping you ahead of competition.
            </p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className=" text-xl">Optimize for excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground ">
              Maximize your search performance. We solve relevance challenges
              and scaling issues, delivering faster results and higher accuracy
              while reducing complexity.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <img src="/static/images/search-engines.png" alt="" />
      </div>

      <div className="mt-8 space-y-6">
        <p className="text-sm text-muted-foreground italic">
          We build with advanced hybrid search engines such as Vespa AI, and
          Lucene-based platforms like Elasticsearch, OpenSearch, and Apache Solr
        </p>
      </div>
    </div>
  );
}
