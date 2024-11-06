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
            <p className="text-muted-foreground">
              For startups and businesses looking to build a robust search
              product, we provide the foundation and expertise to kickstart your
              journey. Our solutions are designed to help you establish a solid
              search infrastructure, setting the stage for your product
              development.
            </p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className=" text-xl">Extend your capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If your existing search technology lacks the advanced capabilities
              or features necessary to thrive in today's competitive landscape,
              we're here to supercharge it. Our team adds the vital components
              you need to stay at the forefront of your industry, delivering
              unmatched user experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className=" text-xl">Optimize for excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For businesses with search infrastructure that may be struggling
              with performance issues or relevance problems, we optimize your
              existing search technology. Our goal is to enhance efficiency and
              ensure your search results are precise, helping you deliver a
              seamless user experience.
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
