'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <Card className="group relative overflow-hidden border-white/10 bg-black transition-all hover:border-white/20">
      <div className="aspect-[2/1] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge
            variant="secondary"
            className="bg-white/5 text-white hover:bg-white/10"
          >
            {post.category}
          </Badge>
          <span className="text-sm text-neutral-400">{post.readTime}</span>
        </div>
        <time className="mb-2 block text-sm text-neutral-400">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h3 className="mb-2 text-xl font-semibold text-white">{post.title}</h3>
        <p className="mb-4 text-sm text-neutral-400">{post.excerpt}</p>
        <button className="group/btn flex items-center text-sm text-white">
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </Card>
  );
}