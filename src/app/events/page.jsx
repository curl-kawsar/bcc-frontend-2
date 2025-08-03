import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Programming Contest 2025",
      description: "Annual inter-university programming competition featuring algorithmic challenges and team-based problem solving.",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "BAIUST Main Auditorium",
      participants: "100+",
      type: "Competition",
      status: "upcoming",
      registrationLink: "/register"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Comprehensive workshop on modern web development using React, Node.js, and cloud deployment strategies.",
      date: "February 28, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "CS Lab 101",
      participants: "50",
      type: "Workshop",
      status: "upcoming",
      registrationLink: "/register"
    },
    {
      id: 3,
      title: "AI & Machine Learning Seminar",
      description: "Expert talk on latest trends in artificial intelligence and machine learning applications in industry.",
      date: "March 5, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Hall",
      participants: "80",
      type: "Seminar",
      status: "upcoming",
      registrationLink: "/register"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Winter Hackathon 2024",
      description: "48-hour hackathon focused on developing solutions for social problems using technology.",
      date: "December 20-22, 2024",
      participants: "120+",
      type: "Hackathon",
      status: "completed",
      highlights: ["40 teams participated", "Top 3 teams won cash prizes", "Industry mentors present"]
    },
    {
      id: 5,
      title: "Database Design Workshop",
      description: "Advanced workshop on database design principles, optimization, and best practices.",
      date: "November 15, 2024",
      participants: "60",
      type: "Workshop",
      status: "completed",
      highlights: ["Hands-on database projects", "Industry case studies", "Certificate provided"]
    },
    {
      id: 6,
      title: "Tech Talk: Cloud Computing",
      description: "Expert session on cloud architecture and modern deployment strategies.",
      date: "October 28, 2024",
      participants: "90",
      type: "Tech Talk",
      status: "completed",
      highlights: ["Industry expert speaker", "Live cloud deployment demo", "Q&A session"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Club <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Join our exciting events, competitions, and workshops designed to enhance your technical skills and expand your network.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">
            Don't miss out on these exciting opportunities to learn and grow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {event.type}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    Upcoming
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="text-sm">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} participants expected</span>
                  </div>
                </div>
                <Link href={event.registrationLink}>
                  <Button className="w-full group">
                    Register Now
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground">
              Take a look at our successful events and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {event.type}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                      Completed
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  
                  {event.highlights && (
                    <div>
                      <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Trophy className="h-3 w-3 text-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Event Calendar</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay organized with our comprehensive event schedule
          </p>
        </div>
        
        <Card className="p-8 text-center">
          <CardHeader>
            <Calendar className="h-16 w-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Full Event Calendar</CardTitle>
            <CardDescription>
              Access our complete calendar with all upcoming events, deadlines, and important dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="rounded-full">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Want to Organize an Event?
            </h2>
            <p className="text-lg text-muted-foreground">
              Have an idea for a workshop, competition, or tech talk? We'd love to hear from you!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Propose an Event
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="rounded-full">
                  Event Guidelines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}