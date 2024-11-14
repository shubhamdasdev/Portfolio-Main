'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-white/10 bg-black transition-all hover:border-white/20">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/5 text-white hover:bg-white/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
        <button className="group/btn flex items-center text-sm text-white">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </Card>
  );
}