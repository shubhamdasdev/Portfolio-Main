"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ProjectsGrid } from "@/components/projects-grid";

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
      title: "Lumos - AI Financial Advisory",
      description:
        "Developed a prototype for an AI-driven financial advisory platform integrating LLMs for personalized insights.",
      fullDescription:
        "Built a scalable AI platform leveraging LLMs like LLama 3.1 for financial advisory services, offering tailored solutions for users. Conducted financial modeling, forecasting, and presented the concept to investors.",
      image: "/Lumos.jpeg",
      tags: ["AI/ML", "FinTech", "Product Strategy"],
    },
    {
      id: 2,
      title: "Startup Competition - Collegiate Business App",
      description:
        "Designed and prototyped a social networking app for college students, addressing communication gaps.",
      fullDescription:
        "Conceptualized and developed a mobile app prototype using Figma. Conducted user research to identify communication issues on campus and designed features for collaboration and engagement. Presented the project as part of a collegiate competition.",
      image: "/ST.jpg",
      tags: ["UI/UX", "Market Research", "Figma"],
    },
    {
      id: 3,
      title: "SafeVision AI - Workplace Safety Tool",
      description:
        "Developed a machine learning tool for real-time workplace hazard detection using computer vision.",
      fullDescription:
        "Created a safety detection platform integrating OSHA compliance checks. Used AI-powered computer vision techniques to identify and classify workplace hazards. Prototyped and tested the solution with real-world scenarios.",
      image: "SF.png",
      tags: ["AI/ML", "Computer Vision", "Safety Compliance"],
    },
    {
      id: 4,
      title: "Blockchain Trading App - HCI Final Project",
      description:
        "Designed a decentralized blockchain trading app for seamless peer-to-peer digital asset trading.",
      fullDescription:
        "Conducted heuristic evaluations and usability testing to design an intuitive blockchain-based trading app. Created wireframes and mockups using Figma and prototyped the functionality for secure digital asset trading.",
      image: "BT.png",
      tags: ["Blockchain", "HCI", "UI/UX"],
    },
    {
      id: 5,
      title: "Deeptech Commercialization Project",
      description:
        "Developed a go-to-market strategy for an AI-driven industrial solution focused on process optimization.",
      fullDescription:
        "Conducted market research and created a commercialization plan for AI solutions in industrial sectors. Developed a pitch deck and presented to industry experts, highlighting revenue models and strategic partnerships.",
      image: "DP.jpg",
      tags: ["Deeptech", "Commercialization", "AI/ML"],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container px-6">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
          Projects
        </h1>
        <p className="mb-12 max-w-[600px] text-lg text-neutral-400">
          A collection of my most impactful work, showcasing expertise in AI
          innovation, product design, and market strategy.
        </p>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="relative overflow-hidden bg-black border-white/10 p-6 hover:border-white/20"
            >
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
              <p className="mb-4 text-sm text-neutral-400">
                {project.description}
              </p>
              <button
                className="mt-2 inline-flex items-center text-blue-500 hover:underline"
                onClick={() =>
                  setOpenProjectIndex(openProjectIndex === index ? null : index)
                }
              >
                {openProjectIndex === index
                  ? "Hide Details"
                  : "View Project"}{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
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
