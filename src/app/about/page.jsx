import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Code, BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About <span className="text-primary">BAIUST Computer Club</span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Fostering innovation, collaboration, and technical excellence in the Computer Science & Engineering Department since 2020.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To create a vibrant community of computer science enthusiasts who collaborate, innovate, and 
                  push the boundaries of technology while fostering personal and professional growth among 
                  BAIUST CSE students.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To be the leading computer club in Bangladesh, producing world-class software engineers 
                  and technology leaders who contribute meaningfully to the global tech ecosystem and 
                  digital transformation of Bangladesh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive programs designed to enhance technical skills and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Programming Competitions</CardTitle>
              <CardDescription>
                Regular coding contests, hackathons, and algorithm challenges to sharpen problem-solving skills
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-accent mb-4" />
              <CardTitle>Technical Workshops</CardTitle>
              <CardDescription>
                Hands-on sessions covering latest technologies, frameworks, and industry best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Peer Learning</CardTitle>
              <CardDescription>
                Study groups, mentorship programs, and collaborative learning environments
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-8 w-8 text-accent mb-4" />
              <CardTitle>Project Showcases</CardTitle>
              <CardDescription>
                Platforms to present innovative projects and receive feedback from peers and industry experts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Innovation Labs</CardTitle>
              <CardDescription>
                Collaborative spaces for working on cutting-edge research and development projects
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 text-accent mb-4" />
              <CardTitle>Industry Networking</CardTitle>
              <CardDescription>
                Connections with tech professionals, alumni, and potential employers in the industry
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dedicated leaders driving innovation and excellence in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AH</span>
                </div>
                <CardTitle>Ahmed Hassan</CardTitle>
                <CardDescription>President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  4th year CSE student, passionate about AI and machine learning, leading the club towards innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-accent to-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">FR</span>
                </div>
                <CardTitle>Fatima Rahman</CardTitle>
                <CardDescription>Vice President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  3rd year CSE student, specializing in web development and organizing technical workshops.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MK</span>
                </div>
                <CardTitle>Mohammad Karim</CardTitle>
                <CardDescription>Technical Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  4th year CSE student, expert in competitive programming and mentor for coding competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground">
            Become part of BAIUST's most innovative tech community and accelerate your career in computer science.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="rounded-full">
                Join the Club
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}