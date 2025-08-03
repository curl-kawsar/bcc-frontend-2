import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Lightbulb, Trophy, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Computer Science & Engineering Department</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            BAIUST <span className="text-primary">Computer Club</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Empowering future engineers through innovation, collaboration, and hands-on experience. 
            Join us in building the next generation of technology leaders.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link href="/register">
              <Button size="lg" className="rounded-full">
                Join the Club
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fostering technical excellence and innovation in computer science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Coding Competitions</CardTitle>
              <CardDescription>
                Regular programming contests and hackathons to sharpen your problem-solving skills
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Tech Workshops</CardTitle>
              <CardDescription>
                Hands-on workshops on latest technologies, frameworks, and industry best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Innovation Projects</CardTitle>
              <CardDescription>
                Collaborative projects that solve real-world problems using cutting-edge technology
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Peer Learning</CardTitle>
              <CardDescription>
                Study groups, mentorship programs, and knowledge sharing sessions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Recognition and awards for outstanding contributions to the tech community
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Tech Events</CardTitle>
              <CardDescription>
                Seminars, tech talks, and networking events with industry professionals
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Recent Activities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with our latest events and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Programming Contest 2025</CardTitle>
                <CardDescription>Inter-university coding competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  50+ participants from various universities competed in algorithmic problem solving
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>January 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Workshop Series</CardTitle>
                <CardDescription>Machine Learning fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive workshop on ML algorithms and practical implementations
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>December 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Talk: Cloud Computing</CardTitle>
                <CardDescription>Industry expert session</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guest speaker from leading tech company shared insights on cloud architecture
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>November 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/events">
              <Button variant="outline" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of passionate developers and innovators. Let's create something amazing together.
          </p>
          <Link href="/register">
            <Button size="lg" className="rounded-full">
              Become a Member
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
