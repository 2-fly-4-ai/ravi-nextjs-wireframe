import { ArrowRight, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  tag: string;
  image: string;
  title: string;
  description: string;
  href: string;
}

import Header1 from "@/app/components/headers/header-blog/page";

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      tag: "Blog",
      image: "/placeholder.svg",
      title: "Vespa Newsletter, October 2024",
      description:
        "Advances in Vespa features and performance include Global significance models and Nearest Neighbor Search with multiple sparse tensor dimensions.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "/placeholder.svg",
      title:
        'Vespa.ai: The "Sleeping Giant" Powering Next-Gen Search and Recommendations',
      description:
        "Vespa has quietly led the way in search and recommendation systems, providing the backbone for some of today's most advanced applications.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "/placeholder.svg",
      title: "Deploying RAG at Scale: Key Questions for Vendors",
      description:
        "Retrieval-augmented generation (RAG) has emerged as a vital technology for organizations embracing generative AI.",
      href: "#",
    },
    {
      tag: "Tutorial",
      image: "/placeholder.svg",
      title: "Building a Real-time Recommendation Engine with Vespa",
      description:
        "Learn how to create a scalable recommendation system using Vespa's powerful features and optimizations.",
      href: "#",
    },
    {
      tag: "Case Study",
      image: "/placeholder.svg",
      title: "How Company X Improved Search Relevance by 40% with Vespa",
      description:
        "Discover the strategies and implementations that led to significant improvements in search quality for a major e-commerce platform.",
      href: "#",
    },
    {
      tag: "News",
      image: "/placeholder.svg",
      title: "Vespa 8.0 Released: What's New and Improved",
      description:
        "Explore the latest features, performance enhancements, and developer tools in the newest version of Vespa.",
      href: "#",
    },
    {
      tag: "Tutorial",
      image: "/placeholder.svg",
      title: "Implementing Semantic Search with Vespa and BERT",
      description:
        "A step-by-step guide to integrating BERT embeddings with Vespa for advanced semantic search capabilities.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "/placeholder.svg",
      title: "The Future of Search: Trends and Predictions for 2025",
      description:
        "Industry experts share their insights on upcoming technologies and methodologies that will shape the future of search and information retrieval.",
      href: "#",
    },
    {
      tag: "Case Study",
      image: "/placeholder.svg",
      title: "Scaling to Billions: Vespa at a Major Social Media Platform",
      description:
        "Learn how a leading social media company leveraged Vespa to handle massive amounts of data and user queries in real-time.",
      href: "#",
    },
    {
      tag: "Tutorial",
      image: "/placeholder.svg",
      title: "Building a Conversational AI Assistant with Vespa",
      description:
        "Discover how to create an intelligent chatbot using Vespa's natural language processing capabilities and real-time query processing.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "/placeholder.svg",
      title: "The Role of AI in Modern Search Engines",
      description:
        "An in-depth look at how artificial intelligence is revolutionizing search technology and user experiences.",
      href: "#",
    },
    {
      tag: "News",
      image: "/placeholder.svg",
      title: "Vespa Community Spotlight: Top Contributors of 2024",
      description:
        "Celebrating the developers and organizations that have made significant contributions to the Vespa open-source project.",
      href: "#",
    },
  ];

  return (
    <div className="">
      <Header1 />

      <div className="container py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={post.image}
                  alt=""
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-sm font-medium">
                    <Tag className="mr-1 h-3 w-3" />
                    {post.tag}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <h2 className="mb-4 text-2xl font-bold tracking-tight">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link
                href={post.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="border flex items-center justify-center space-x-2 py-16">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
}
