import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Monitor, Server, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Full Stack Developer
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Building digital products, brands, and experiences
              </h1>
              <p className="text-xl text-muted-foreground">
                Hi, I'm Pranshu Dargar. A passionate Full Stack Developer based in Rajasthan, India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 z-10 rounded-lg"></div>
              <Image
                src="https://res.cloudinary.com/da1iuokin/image/upload/v1746731493/Home_Photo_pnwish.jpg"
                alt="Professional headshot of Pranshu Dargar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">My Expertise</h2>
            <p className="text-muted-foreground">
              I specialize in building robust applications with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground mb-4">
                  Creating responsive, accessible, and beautiful user interfaces with modern technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-muted-foreground mb-4">
                  Building scalable, secure, and efficient server-side applications and APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Developing end-to-end applications with seamless integration between frontend and backend.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">RESTful APIs</Badge>
                  <Badge variant="secondary">Auth</Badge>
                  <Badge variant="secondary">Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work. These projects showcase my skills and experience.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link href="/projects" className="flex items-center">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured online store built on MERN and integrated with Razorpay for payments."
              imageSrc="https://res.cloudinary.com/da1iuokin/image/upload/v1746677838/Restaurant_fvdu1a.png"
              tags={["Node", "React", "Razorpay", "Swiper", "Tailwind CSS"]}
              liveUrl="https://snaxio.in"
            />
            <ProjectCard
              title="Traditional Clothing Website"
              description="A full-featured ethnic wear store built on MERN."
              imageSrc="https://res.cloudinary.com/da1iuokin/image/upload/v1746678060/Clothing_xqfrei.png"
              tags={["React", "MongoDB", "Redux", "Bootstrap", "Cloudinary"]}
              liveUrl="https://jaipurclothing.shop"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind or looking to hire a developer? I'm a freelancer open to new opportunities and collaborations.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
}: {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
}) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {liveUrl && (
          <Button asChild size="sm" className="mt-6 self-start">
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
