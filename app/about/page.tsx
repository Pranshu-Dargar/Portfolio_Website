import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Award, Briefcase } from "lucide-react";

export const metadata = {
  title: 'About Me | Pranshu Dargar',
  description: 'Learn more about Pranshu Dargar, Full Stack Developer with over 1 year of experience in web & app development.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              I'm a Full Stack Developer with a passion for building digital products that solve real-world problems.
            </p>
            <div className="prose dark:prose-invert">
              <p>
                Over the past 1 year, I've worked on a wide range of projects, from small business websites to large-scale web applications. My focus is on creating clean, efficient, and maintainable code that provides a seamless user experience.
              </p>
              <p>
                When I'm not coding, you can find me playing snooker or watching Formula 1 races.
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/da1iuokin/image/upload/c_fill,ar_1:1/v1746731494/About_Photo_of4br3.jpg"
              alt="Pranshu Dargar while coding"
              width={600}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>
        <div className="space-y-8">
          <ExperienceCard
            title="Web and App Developer"
            company="Freelance"
            period="Dec 2024 - Present"
            description="Building scalable Web & Mobile Applications using modern frameworks like React.js, Next.js, Node.js, and React Native."
            skills={["React", "Next.js", "Node.js", "Express.js", "React-Native"]}
          />
          <ExperienceCard
            title="Full Stack Developer"
            company="Grras Solutions (P) Ltd"
            period="Jun 2024 - Dec 2024"
            description="Developed and maintained full-stack web applications. Created RESTful APIs and implemented frontend interfaces. Worked closely with designers and product managers."
            skills={["Node.js", "Express", "React", "MongoDB"]}
          />
        </div>
      </section>

      {/* Education and Certifications */}
      <section className="container mx-auto px-4 py-12 bg-muted/30 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Bachelor of Computer Applications</h3>
                  <p className="text-muted-foreground mb-2">Birla Institute of Technology, Mesra</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Infosec Expert</h3>
                  <p className="text-muted-foreground mb-2">CyberOps</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend"
            skills={[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "React.js",
              "Next.js",
              "React-Native",
              "Material UI",
              "Tailwind CSS",
              "Redux Toolkit",
            ]}
          />
          <SkillCategory
            title="Backend"
            skills={[
              "Node.js",
              "Express.js",
              "RESTful APIs",
              "SQL & NoSQL Databases",
              "Authentication & Authorization",
              "JWT (JSON Web Tokens)",
            ]}
          />
          <SkillCategory
            title="Tools & Others"
            skills={[
              "Git & GitHub",
              "PM2",
              "NGINX",
              "Nodemon",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center text-muted-foreground">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>{company}</span>
            </div>
          </div>
          <Badge variant="outline">{period}</Badge>
        </div>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}