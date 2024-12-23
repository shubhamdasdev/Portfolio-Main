import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Trophy, BookOpen, Briefcase, Calendar, MapPin } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    'AI-Driven Product Management',
    'Venture Building',
    'LLMs & Prompt Engineering',
    'Data Analysis',
    'Cross-Functional Collaboration',
    'A/B Testing',
    'Product Analytics',
    'Stakeholder Management',
    'User Feedback Integration',
    'Product Roadmapping',
    'API Integration',
    'NLP',
  ];

  const timeline = [
    {
      year: '2024 - Present',
      role: 'CEO/Co-Founder',
      company: 'Lumos, Chicago',
      description:
        `
        Led the development of a prototype for an AI-driven financial advisory platform using Figma for design and Vercel AI SDK for implementation.
        - Fine-tuned open-source large language models like LLama 3.1 for financial applications.
        - Conducted research on FinGPT and retrieval-based models to enhance platform capabilities.
        - Managed financial modeling, forecasting, and market research to support product development and attract investors.
      `,
    },
    {
      year: '2023 - Present',
      role: 'Manager Intern',
      company: 'TrustVector, Chicago',
      description:
      `
        Led customer discovery initiatives, identifying pain points through interviews and research.
        - Defined product requirements and specifications for AI governance tools.
        - Conducted competitive analysis and prepared detailed stakeholder presentations to position the product in the market.
      `,
    },
    {
      year: '2019 - 2022',
      role: 'Business Analyst',
      company: 'Bank of New York Mellon, Pune, India',
      description:
        `
        Automated billing processes, reducing unbilled amounts by over $10M, and improved billing accuracy by 30%.
        Created dashboards using Power BI, Excel, and SQL for enhanced invoice tracking across 150+ client accounts.
        Led a team to develop SQL and Alteryx tools, resulting in a 15% reduction in outstanding balances.
        Spearheaded a top 6 IdeaWorks Challenge business case out of 370 ideas globally.
        Contributed to digitizing fee schedules, improving productivity by 10%.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container px-6">
        <section className="mb-24 grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-white">About Me</h1>
              <div className="flex flex-col gap-2 text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Chicago, IL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-neutral-400">
            With a Master’s in IT Management at IIT Chicago and an MBA in Finance Analytics, I fuse technology and business to turn bold ideas into impactful realities. Over four years, I’ve led AI-driven product strategies and built scalable startup solutions. Blending technical expertise with entrepreneurial vision, I craft user-centric products that deliver real value. My mission is to harness AI and machine learning to empower organizations in an ever-evolving digital landscape.
            </p>
            <Button asChild className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90">
              <a 
                href="/Resume/Shubham_Das.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://github.com/shubhamdasdev/Portfolio-Project/blob/main/IMG_0407.jpg?raw=true"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <Card 
                key={skill} 
                className="flex h-32 items-center justify-center border-white/10 bg-black p-6 text-center text-lg font-medium text-white transition-colors hover:border-white/20"
              >
                {skill}
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-white">Professional Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                      <Badge className="rounded-full bg-white/5 text-white hover:bg-white/10">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium text-white">{item.company}</p>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">Achievements</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                Top 6 Team in IdeaWorks Challenge at BNY Mellon
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                Star of the Quarter Award at BNY Mellon
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                Led successful launch of AI financial platform at Lumos
              </li>
            </ul>
          </Card>

          <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">Education</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                Master of Information Technology Management, IIT Chicago
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                MBA in Finance Analytics, Sinhgad Institute of Management
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
                Certified Scrum Product Owner (CSPO)
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
