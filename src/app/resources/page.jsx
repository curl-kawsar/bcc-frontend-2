import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  Code, 
  Download, 
  ExternalLink, 
  FileText, 
  Users, 
  Trophy,
  Lightbulb,
  Database,
  Globe,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Programming Fundamentals",
      icon: Code,
      description: "Essential programming concepts and languages",
      resources: [
        { name: "Data Structures & Algorithms", type: "PDF", link: "#", downloads: "1.2k" },
        { name: "Object-Oriented Programming", type: "Video", link: "#", duration: "3h 45m" },
        { name: "Problem Solving Techniques", type: "Article", link: "#", readTime: "15 min" },
        { name: "C++ Programming Guide", type: "PDF", link: "#", downloads: "890" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "Modern web technologies and frameworks",
      resources: [
        { name: "React.js Complete Tutorial", type: "Video", link: "#", duration: "8h 30m" },
        { name: "Node.js Backend Development", type: "PDF", link: "#", downloads: "756" },
        { name: "CSS Grid & Flexbox Guide", type: "Article", link: "#", readTime: "12 min" },
        { name: "REST API Design Principles", type: "PDF", link: "#", downloads: "543" }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "AI and ML concepts, algorithms, and applications",
      resources: [
        { name: "Introduction to Machine Learning", type: "Video", link: "#", duration: "6h 15m" },
        { name: "Neural Networks Explained", type: "PDF", link: "#", downloads: "432" },
        { name: "Python for Data Science", type: "Article", link: "#", readTime: "20 min" },
        { name: "TensorFlow Tutorial", type: "Video", link: "#", duration: "4h 20m" }
      ]
    },
    {
      title: "Database Systems",
      icon: Database,
      description: "Database design, optimization, and management",
      resources: [
        { name: "SQL Fundamentals", type: "PDF", link: "#", downloads: "678" },
        { name: "Database Design Patterns", type: "Video", link: "#", duration: "2h 45m" },
        { name: "NoSQL vs SQL Comparison", type: "Article", link: "#", readTime: "10 min" },
        { name: "PostgreSQL Advanced Features", type: "PDF", link: "#", downloads: "321" }
      ]
    }
  ];

  const toolsAndSoftware = [
    {
      name: "Visual Studio Code",
      description: "Free code editor with extensive extensions",
      category: "IDE",
      platform: "Cross-platform",
      link: "https://code.visualstudio.com/",
      icon: "💻"
    },
    {
      name: "Git & GitHub",
      description: "Version control system and repository hosting",
      category: "Version Control",
      platform: "Cross-platform",
      link: "https://github.com/",
      icon: "🔀"
    },
    {
      name: "Docker",
      description: "Containerization platform for applications",
      category: "DevOps",
      platform: "Cross-platform",
      link: "https://docker.com/",
      icon: "🐳"
    },
    {
      name: "Postman",
      description: "API development and testing tool",
      category: "API Testing",
      platform: "Cross-platform",
      link: "https://postman.com/",
      icon: "📮"
    },
    {
      name: "Figma",
      description: "UI/UX design and prototyping tool",
      category: "Design",
      platform: "Web-based",
      link: "https://figma.com/",
      icon: "🎨"
    },
    {
      name: "MongoDB Compass",
      description: "GUI for MongoDB database management",
      category: "Database",
      platform: "Cross-platform",
      link: "https://mongodb.com/compass",
      icon: "🍃"
    }
  ];

  const studyMaterials = [
    {
      title: "Competitive Programming",
      description: "Resources for coding competitions and algorithmic problem solving",
      materials: [
        "ICPC Problem Sets (2020-2024)",
        "Algorithm Implementation Templates",
        "Time Complexity Analysis Guide",
        "Common Coding Patterns"
      ],
      downloadLink: "#"
    },
    {
      title: "Software Engineering",
      description: "Best practices for software development and project management",
      materials: [
        "Software Design Patterns",
        "Code Review Checklist",
        "Agile Development Guide",
        "Testing Strategies"
      ],
      downloadLink: "#"
    },
    {
      title: "System Design",
      description: "Resources for designing scalable and robust systems",
      materials: [
        "System Design Interview Questions",
        "Scalability Patterns",
        "Database Sharding Strategies",
        "Load Balancing Techniques"
      ],
      downloadLink: "#"
    }
  ];

  const onlineResources = [
    {
      name: "LeetCode",
      description: "Practice coding problems and prepare for interviews",
      category: "Practice",
      link: "https://leetcode.com/",
      type: "Platform"
    },
    {
      name: "Coursera",
      description: "Online courses from top universities and companies",
      category: "Learning",
      link: "https://coursera.org/",
      type: "Platform"
    },
    {
      name: "GitHub",
      description: "Host code, collaborate, and contribute to open source",
      category: "Development",
      link: "https://github.com/",
      type: "Platform"
    },
    {
      name: "Stack Overflow",
      description: "Get answers to programming questions",
      category: "Q&A",
      link: "https://stackoverflow.com/",
      type: "Community"
    },
    {
      name: "MDN Web Docs",
      description: "Comprehensive web development documentation",
      category: "Documentation",
      link: "https://developer.mozilla.org/",
      type: "Reference"
    },
    {
      name: "Kaggle",
      description: "Data science competitions and datasets",
      category: "Data Science",
      link: "https://kaggle.com/",
      type: "Platform"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learning <span className="text-primary">Resources</span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive collection of resources to accelerate your learning journey in computer science and technology.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Study Materials</h2>
          <p className="text-lg text-muted-foreground">
            Curated resources organized by topics and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {category.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex items-center gap-3">
                          {resource.type === 'PDF' && <FileText className="h-4 w-4 text-red-500" />}
                          {resource.type === 'Video' && <Video className="h-4 w-4 text-blue-500" />}
                          {resource.type === 'Article' && <BookOpen className="h-4 w-4 text-green-500" />}
                          <div>
                            <p className="font-medium text-sm">{resource.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {resource.downloads && `${resource.downloads} downloads`}
                              {resource.duration && `Duration: ${resource.duration}`}
                              {resource.readTime && `Read time: ${resource.readTime}`}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tools & Software */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Essential Tools & Software</h2>
            <p className="text-lg text-muted-foreground">
              Must-have tools for modern software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsAndSoftware.map((tool) => (
              <Card key={tool.name} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <div className="flex gap-2 mt-1">
                        <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {tool.category}
                        </span>
                        <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                          {tool.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full group">
                      Download / Visit
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Material Packages */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Curated Study Packages</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive study materials compiled by our club members
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {studyMaterials.map((material) => (
            <Card key={material.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Includes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {material.materials.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href={material.downloadLink}>
                  <Button className="w-full group">
                    <Download className="h-4 w-4 mr-2" />
                    Download Package
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Online Resources */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Online Platforms & Communities</h2>
            <p className="text-lg text-muted-foreground">
              External resources and platforms for continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineResources.map((resource) => (
              <Card key={resource.name} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                        {resource.category}
                      </span>
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group">
                      Visit Platform
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <CardHeader>
            <Lightbulb className="h-16 w-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Request a Resource</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Let us know and we'll try to add it to our collection!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Request Resource
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full">
                  Contribute Resources
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
              Keep Learning, Keep Growing
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our community to access exclusive resources and collaborate with fellow learners.
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