import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-secondary/50 w-full py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Boost Your Productivity Today
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-lg md:text-xl/relaxed">
              Join thousands of satisfied users and take your workflow to the
              next level with our innovative tools.
            </p>
          </div>
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#start-trial">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              No credit card required. Start your 14-day free trial today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
