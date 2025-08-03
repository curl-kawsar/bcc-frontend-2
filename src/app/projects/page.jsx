import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Star, Users, Code, Database, Globe, Brain } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Smart Campus Management System",
      description: "A comprehensive web application for managing university operations including student records, course management, and facility booking.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      status: "Completed",
      team: "6 members",
      github: "https://github.com/baiust-cs-club/campus-management",
      demo: "https://campus-demo.baiust.edu.bd",
      image: "🏫",
      highlights: ["1000+ active users", "Real-time notifications", "Mobile responsive"]
    },
    {
      id: 2,
      title: "AI-Powered Code Review Assistant",
      description: "Machine learning model that analyzes code quality, suggests improvements, and detects potential bugs automatically.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      category: "Machine Learning",
      status: "In Progress",
      team: "4 members",
      github: "https://github.com/baiust-cs-club/ai-code-reviewer",
      demo: null,
      image: "🤖",
      highlights: ["90% accuracy in bug detection", "Supports 5 programming languages", "VS Code extension"]
    },
    {
      id: 3,
      title: "Bangladesh Weather Analytics",
      description: "Real-time weather monitoring and prediction system specifically designed for Bangladesh's unique climate patterns.",
      technologies: ["Python", "Flask", "PostgreSQL", "Chart.js"],
      category: "Data Science",
      status: "Completed",
      team: "5 members",
      github: "https://github.com/baiust-cs-club/weather-analytics",
      demo: "https://weather.baiust.edu.bd",
      image: "🌤️",
      highlights: ["99.5% uptime", "7-day forecast accuracy", "Real-time alerts"]
    }
  ];

  const studentProjects = [
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      author: "Ahmed Hassan",
      year: "4th Year",
      category: "Web Development",
      github: "https://github.com/ahmed/ecommerce-platform",
      image: "🛒"
    },
    {
      id: 5,
      title: "Chatbot for Student Services",
      description: "NLP-powered chatbot to help students with university-related queries and services.",
      technologies: ["Python", "NLTK", "Flask", "SQLite"],
      author: "Fatima Rahman",
      year: "3rd Year",
      category: "Natural Language Processing",
      github: "https://github.com/fatima/student-chatbot",
      image: "💬"
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      technologies: ["React Native", "Firebase", "Redux"],
      author: "Mohammad Karim",
      year: "4th Year",
      category: "Mobile Development",
      github: "https://github.com/karim/task-manager",
      image: "📋"
    },
    {
      id: 7,
      title: "Network Security Scanner",
      description: "Automated tool for scanning and identifying security vulnerabilities in network infrastructure.",
      technologies: ["Python", "Nmap", "Scapy", "Tkinter"],
      author: "Rashida Sultana",
      year: "3rd Year",
      category: "Cybersecurity",
      github: "https://github.com/rashida/security-scanner",
      image: "🔒"
    },
    {
      id: 8,
      title: "Medical Image Classifier",
      description: "Deep learning model for classifying medical images to assist in diagnostic processes.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
      author: "Ibrahim Ali",
      year: "4th Year",
      category: "Computer Vision",
      github: "https://github.com/ibrahim/medical-classifier",
      image: "🏥"
    },
    {
      id: 9,
      title: "IoT Home Automation",
      description: "Smart home system using IoT devices for automated lighting, temperature, and security control.",
      technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
      author: "Nadia Khan",
      year: "3rd Year",
      category: "IoT",
      github: "https://github.com/nadia/smart-home",
      image: "🏡"
    }
  ];

  const categories = [
    { name: "All Projects", count: featuredProjects.length + studentProjects.length, icon: Code },
    { name: "Web Development", count: 3, icon: Globe },
    { name: "Machine Learning", count: 2, icon: Brain },
    { name: "Data Science", count: 1, icon: Database },
    { name: "Mobile Development", count: 1, icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built by our talented members. From web applications to AI models, 
            explore the diverse range of projects created by BAIUST CS Club.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.name}
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </Button>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcase of our most impactful and innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === 'Completed' 
                              ? 'bg-accent/10 text-accent' 
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <CardDescription className="text-sm">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Star className="h-3 w-3 text-accent" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Projects */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Student Projects</h2>
            <p className="text-lg text-muted-foreground">
              Individual and team projects by our talented club members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{project.image}</div>
                    <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <strong>{project.author}</strong> • {project.year}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group">
                      <Github className="h-4 w-4 mr-2" />
                      View Project
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <CardHeader>
            <Code className="h-16 w-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Submit Your Project</CardTitle>
            <CardDescription>
              Built something amazing? Share it with the community and get featured on our projects page!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Submit Project
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="rounded-full">
                  Submission Guidelines
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our community and collaborate on exciting projects that make a real impact.
            </p>
            <Link href="/register">
              <Button size="lg" className="rounded-full">
                Join the Club
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}