"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ProjectsGrid } from '@/components/projects-grid';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

export default function ProjectsPage() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Lumos - AI Financial Advisory',
      description: 'Led the development of an AI-driven financial advisory platform, integrating LLMs for scalable financial tools and securing investments.',
      fullDescription: 'This project involved building a sophisticated AI platform that leveraged LLMs for financial advisory services, offering personalized and automated insights for users.',
      image: 'https://images.unsplash.com/photo-1673945435407-83d97c56e7ab',
      tags: ['AI/ML', 'FinTech', 'Product Strategy'],
    },
    {
      id: 2,
      title: 'TrustVector AI Governance',
      description: 'Developed governance solutions for responsible AI implementation, collaborating with engineers to optimize model performance.',
      fullDescription: 'Detailed project covering the challenges faced in AI governance, the strategies developed for responsible AI practices, and the collaboration with technical teams to enhance model compliance.',
      image: 'https://images.unsplash.com/photo-1672945219490-1f1f0a3e7be9',
      tags: ['AI Governance', 'Enterprise', 'Analytics'],
    },
    {
      id: 3,
      title: 'BNY Mellon Process Automation',
      description: 'Automated billing processes and developed Power BI dashboards, reducing unbilled amounts by over $10M.',
      fullDescription: 'In this project, process automation was key to streamlining financial operations, reducing manual intervention, and enhancing data visualization with custom Power BI dashboards.',
      image: 'https://images.unsplash.com/photo-1671945435591-ba07b0c45135',
      tags: ['Automation', 'Analytics', 'Finance'],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container px-6">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">Projects</h1>
        <p className="mb-12 max-w-[600px] text-lg text-neutral-400">
          A collection of my most impactful work, showcasing expertise in AI implementation, product strategy, and digital transformation.
        </p>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card key={project.id} className="relative overflow-hidden bg-black border-white/10 p-6 hover:border-white/20">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="mb-4 rounded-lg object-cover"
              />
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="bg-white/10 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
              <button
                className="mt-2 inline-flex items-center text-blue-500 hover:underline"
                onClick={() => setOpenProjectIndex(openProjectIndex === index ? null : index)}
              >
                {openProjectIndex === index ? 'Hide Details' : 'View Project'} <ArrowRight className="ml-1 h-4 w-4" />
              </button>
              {openProjectIndex === index && (
                <div className="mt-4 p-4 bg-neutral-900 rounded-lg text-neutral-300">
                  <p>{project.fullDescription}</p>
                </div>
              )}
            </Card>
          ))}
        </ProjectsGrid>
      </div>
    </div>
  );
}
