import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: 'Projects | Pranshu Dargar',
  description: 'Explore the projects developed by Pranshu Dargar, showcasing skills in web development, design, and problem-solving.',
};

interface Project {
  id: string;
  title: string;
  description?: string;
  shortDescription?: string;
  longDescription: string;
  imageSrc: string;
  tags: string[];
  category: "Full Stack" | "Frontend";
  liveUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and integrated with Razorpay.",
    longDescription: "This e-commerce platform provides a complete solution for online retailers...",
    imageSrc: "https://res.cloudinary.com/da1iuokin/image/upload/v1746677838/Restaurant_fvdu1a.png",
    tags: ["Node", "React", "Razorpay", "Swiper", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://snaxio.in",
    features: [
      "Product catalog with categories and filtering",
      "Shopping cart with persistent storage",
      "Secure checkout with Razorpay integration",
      "Admin dashboard for inventory management",
      "Order tracking and history"
    ]
  }, 
  {
    id:"prakharguru",
    title:"Institute Website",
    description:"A Institutional website made with React as frontend, Node.js and Express.js as backend and MongoDB as database.",
    longDescription:"This Institutional website has a smooth UI with vibrant color combination and smooth navigation through router-dom between pages.",
    imageSrc:"https://res.cloudinary.com/da1iuokin/image/upload/v1746816862/PrakharGuru_wr9aco.png",
    tags:["React", "Node.js", "Express.js", "MongoDB"],
    category:"Full Stack",
    liveUrl:"https://prakharguru.com",
    features:[
      "Single Page Application",
      "Interactive UI and colors",
      "Student Registration Page",
      "Admin Dashboard",
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A professional portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "This portfolio website showcases my projects, skills, and experience. It includes animations, SEO optimization, and more.",
    imageSrc: "https://res.cloudinary.com/da1iuokin/image/upload/v1746816927/Portfolio_Website_vkynq5.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://pranshudargar.in",
    features: [
      "Responsive design",
      "Dark/light mode toggle",
      "Project showcase with filtering",
      "Contact form with validation",
      "SEO optimization"
    ]
  },
  {
    id: "clothing-website",
    title: "Clothing Website",
    shortDescription: "A full-featured ethnic wear e-commerce store built with React.",
    longDescription: "This ethnic fashion platform offers a complete online shopping experience tailored for traditional Indian clothing enthusiasts...",
    imageSrc: "https://res.cloudinary.com/da1iuokin/image/upload/v1746678060/Clothing_xqfrei.png",
    tags: ["React", "MongoDB", "Redux", "Bootstrap", "Cloudinary"],
    category: "Full Stack",
    liveUrl: "https://jaipurclothing.shop",
    features: [
      "Responsive design for mobile and desktop",
      "MongoDB database integration for product and user data",
      "Product catalog with categories and filtering",
      "Search and sort functionality",
      "Admin dashboard for product management"
    ]
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A weather forecasting app with real-time updates and UI themes.",
    longDescription: "This weather dashboard provides users with current weather conditions using multiple APIs.",
    imageSrc: "https://res.cloudinary.com/da1iuokin/image/upload/v1746738207/Weather-Project_fqgyak.png",
    tags: ["React", "Weather API", "Bootstrap"],
    category: "Frontend",
    liveUrl: undefined,
    features: [
      "Current conditions and forecasts",
      "Interactive weather themes",
      "Location search and coordinates",
      "Responsive interface"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Explore a collection of my work across various technologies and domains.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProjectGrid projects={projects} />
          </TabsContent>

          <TabsContent value="fullstack">
            <ProjectGrid projects={projects.filter(p => p.category === "Full Stack")} />
          </TabsContent>

          <TabsContent value="frontend">
            <ProjectGrid projects={projects.filter(p => p.category === "Frontend")} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-xl overflow-hidden shadow-sm bg-white dark:bg-black hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative w-full h-80">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <Badge>{project.category}</Badge>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.description || project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold mb-1">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Live Button */}
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                className="mt-2"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

