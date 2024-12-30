import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Code2, Compass, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden ">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-1/2 -top-96 -translate-x-1/2 transform">
            <div className="h-[600px] w-[600px] rounded-full bg-[#24AE73] opacity-5 blur-3xl"></div>
          </div>
          <div className="absolute left-1/2 top-0">
            <div className="h-[500px] w-[500px] rounded-full bg-[#24AE73] opacity-5 blur-3xl"></div>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute -inset-x-2 top-1/2 h-px bg-gradient-to-r from-transparent via-[#24AE73] to-transparent opacity-20"></div>
                <span className="relative bg-[#24AE73] px-4 py-1.5 text-sm font-semibold text-white rounded-full">
                  Your Coding Knowledge Hub
                </span>
              </div>

              <h1 className="mt-8 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Learn. Code. Share.
                <span className="block text-[#24AE73]">Master Your Craft</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Discover in-depth tutorials, coding best practices, and expert insights.
                Stay up-to-date with the latest in web development, mobile apps, and software architecture.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-[#24AE73] hover:bg-[#1e9862]"
                >
                  <Link href="/blog/introduction">Explore Articles</Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-[#24AE73] text-[#24AE73] hover:bg-[#24AE73] hover:text-white"
                >
                  Join Community
                </Button> */}
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <Code2 className="h-8 w-8 text-[#24AE73] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Technical Tutorials</h3>
                  <p className="text-muted-foreground">
                    Step-by-step guides on modern frameworks, languages, and tools.
                  </p>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <Compass className="h-8 w-8 text-[#24AE73] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Best Practices</h3>
                  <p className="text-muted-foreground">
                    Industry standards and coding patterns for clean, maintainable code.
                  </p>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-[#24AE73] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Developer Insights</h3>
                  <p className="text-muted-foreground">
                    Expert perspectives on software development trends and challenges.
                  </p>
                </div>
              </div>

              {/* <div className="mt-16 rounded-xl border bg-card p-8 shadow-lg w-full max-w-3xl">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Never Stop Learning
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Join our community of developers who are passionate about continuous learning
                    and sharing knowledge. Get weekly curated content delivered to your inbox.
                  </p>
                  <Button
                    size="lg"
                    className="mt-8 bg-[#24AE73] hover:bg-[#1e9862]"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
