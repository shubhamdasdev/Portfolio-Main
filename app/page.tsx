import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Circle, Square, Triangle } from 'lucide-react';
import ThreeDOrb from '@/components/ThreeDOrb';
import { ProjectCard } from '@/components/project-card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function HomePage() {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Lumos - AI Financial Advisory",
      description: "An AI-powered platform providing personalized financial advice and portfolio management using advanced LLMs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      tags: ["AI/ML", "FinTech", "Next.js"],
      link: "/projects/lumos"
    },
    {
      id: 2,
      title: "TrustVector AI Governance",
      description: "Developed comprehensive AI governance solutions ensuring responsible AI deployment and compliance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      tags: ["AI Governance", "Python", "React"],
      link: "/projects/trustvector"
    },
    {
      id: 3,
      title: "BNY Mellon Analytics",
      description: "Automated billing processes and created Power BI dashboards for improved financial tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      tags: ["Power BI", "Analytics", "Automation"],
      link: "/projects/bny-mellon"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 3D Orb Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDOrb />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen w-full px-6 pt-32">
        <div className="mx-auto max-w-screen-xl text-center">
          {/* Decorative Icons */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <Circle className="h-3 w-3 text-blue-500" />
            <Square className="h-3 w-3 text-green-500" />
            <Triangle className="h-3 w-3 text-red-500" />
          </div>
          <h1 className="mb-6 text-6xl sm:text-7xl font-bold tracking-tight text-shadow">
            Shubham Das
          </h1>
          <h2 className="mb-8 text-2xl sm:text-4xl font-normal tracking-tight text-neutral-400 text-shadow">
            Product Manager & AI Innovator
          </h2>
          <p className="mb-16 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-neutral-400">
            Crafting exceptional digital experiences through strategic product management and user-centered design thinking.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Button asChild className="group h-12 sm:h-14 rounded-full bg-white px-8 text-base text-black hover:bg-white/90">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 sm:h-14 rounded-full border-white/10 px-8 hover:bg-white/5 button">
              <Link href="/Resume/Shubham_Das.pdf" aria-label="Download Resume">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

{/* About Section */}
<section className="py-16 sm:py-24 px-6 bg-black text-white">
  <div className="mx-auto max-w-screen-lg space-y-8">
    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-shadow">About Me</h3>
    <div className="bg-neutral-900 rounded-lg shadow-md p-8 space-y-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-400">
            I have a rich background in finance and technology, which has equipped me with a unique blend of analytical thinking and innovative problem-solving skills. Over the years, I’ve worked with startups and established enterprises, refining my expertise in stakeholder communication, agile methodologies, and strategic decision-making.
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-48 h-48 relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
          <Image
            src="https://github.com/shubhamdasdev/Portfolio-Project/blob/main/IMG_0407.jpg?raw=true" // Replace with actual image path
            alt="Profile Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Badge className="bg-blue-500 text-white">Product Strategy</Badge>
        <Badge className="bg-green-500 text-white">User Research</Badge>
        <Badge className="bg-yellow-500 text-white">Agile/Scrum</Badge>
        <Badge className="bg-red-500 text-white">Stakeholder Management</Badge>
      </div>
      <Link href="/about" className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors">
        Learn more about my background &gt;
      </Link>
    </div>
  </div>
</section>


      {/* Featured Projects Section */}
      <section className="py-16 sm:py-24 px-6 bg-black text-white">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Featured Projects</h3>
            <p className="max-w-[600px] text-lg text-neutral-400">
              A selection of my recent work in AI, product management, and digital transformation.
            </p>
          </div>
          <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    {/* Contact Section */}
<section className="py-16 sm:py-24 px-6 bg-black text-white">
  <div className="mx-auto max-w-screen-lg space-y-8">
    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-shadow">Get in Touch</h3>
    <div className="bg-neutral-900 rounded-lg shadow-md p-8">
      <p className="text-base sm:text-lg leading-relaxed text-neutral-400 mb-6">
        I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and explore how we can collaborate!
      </p>
      <Button asChild className="w-full sm:w-auto">
        <Link href="/contact" className="flex items-center">
          Contact Me
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</section>

</div>
  );
}