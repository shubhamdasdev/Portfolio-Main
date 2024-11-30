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
      description: "Developed an AI-powered platform offering personalized financial advice and portfolio management using advanced LLMs.",
      image: "/Lumos.jpeg", // Replace with actual image path in your public folder
      tags: ["AI/ML", "FinTech", "Next.js"],
      link: "/projects/lumos",
    },
    {
      id: 2,
      title: "Unveiled - ChatGPT’s Voice Mode & LLama Advancements",
      description: "A weekly newsletter exploring AI innovations, startups, and productivity hacks. Published on Substack.",
      image: '/SB.webp', // Replace with actual image path in your public folder
      tags: ["AI", "Startups", "Writing"],
      link: "https://unveiledd.substack.com/p/unveiled-chatgpts-voice-mode-llama", // External link
    },
    {
      id: 3,
      title: "Is Product Management Dead? Embracing the AI Revolution",
      description: "An in-depth article exploring how AI is reshaping the product management role. Published on Medium.",
      image: '/jj.png', // Replace with actual image path in your public folder
      tags: ["Product Management", "AI", "Medium"],
      link: "https://medium.com/@shubdas223/is-product-management-dead-embracing-the-ai-revolution-5d086f40f270", // External link
    },
    {
      id: 4,
      title: "Is Knowledge Retrieval the Unsung Hero of AI?",
      description: "An article highlighting the significance of knowledge retrieval systems in AI. Published on Medium.",
      image: '/DD.png', // Replace with actual image path in your public folder
      tags: ["Knowledge Management", "AI", "Medium"],
      link: "https://medium.com/@shubdas223/is-knowledge-retrieval-the-unsung-hero-of-ai-embracing-the-future-b0706b28bdf2", // External link
    },
    {
      id: 5,
      title: "SafeVision AI - Workplace Safety Tool",
      description: "Developed a machine learning tool for real-time workplace hazard detection using computer vision.",
      image: "SF.png", // Replace with actual image path in your public folder
      tags: ["AI/ML", "Safety", "Computer Vision"],
      link: "/projects/safevision",
    },
    {
      id: 6,
      title: "DeepTech Commercialization Project",
      description: "Designed a go-to-market strategy for AI-driven industrial solutions focused on process optimization.",
      image: "DP.jpg", // Replace with actual image path in your public folder
      tags: ["AI", "Commercialization", "Strategy"],
      link: "/projects/deeptech",
    },
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
          <h2 className="mb-8 text-2xl sm:text-4xl font-normal tracking-tight text-neutral-200 text-shadow">
            Product Manager & AI Innovator
          </h2>
          <p className="mb-16 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-neutral-200">
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

     {/* Featured Projects Section */}
<section className="py-16 sm:py-24 px-6 bg-black text-white">
  <div className="mb-12 flex items-end justify-between">
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Featured Projects</h3>
      <p className="max-w-[600px] text-lg text-neutral-400">
        A selection of my recent work in AI, product management, and digital transformation.
      </p>
    </div>
    <Link href="/projects">
      <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex items-center">
        View All Projects
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {featuredProjects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</section>

    {/* Contact Section */}
<section className="py-16 sm:py-24 px-6 bg-black text-white">
  <div className="mx-auto max-w-screen-lg space-y-10">
    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Get in Touch</h3>
    <div className="bg-neutral-900 rounded-lg shadow-md p-8">
      <p className="text-base sm:text-lg leading-relaxed text-neutral-200 mb-6">
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