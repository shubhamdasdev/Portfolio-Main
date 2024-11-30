import { BlogPost as BlogPostComponent } from '@/components/blog-post';
import { BlogGrid as BlogGridComponent } from '@/components/blog-grid';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Is Product Management Dead? Embracing the AI Revolution',
      excerpt: 'Exploring how artificial intelligence is reshaping the role of product managers and the skills needed to succeed.',
      date: '2024-03-15',
      readTime: '5 min read',
      image: '/jj.png',
      category: 'Product Strategy',
      mediumLink: 'https://medium.com/@shubdas223/is-product-management-dead-embracing-the-ai-revolution-5d086f40f270',
    },
    {
      id: 2,
      title: 'Is Knowledge Retrieval the Unsung Hero of AI?',
      excerpt: 'Examining how advanced knowledge retrieval systems are revolutionizing AI applications across industries.',
      date: '2024-03-10',
      readTime: '7 min read',
      image: '/DD.png',
      category: 'AI & Data',
      mediumLink: 'https://medium.com/@shubdas223/is-knowledge-retrieval-the-unsung-hero-of-ai-embracing-the-future-b0706b28bdf2',
    },
    {
      id: 3,
      title: 'Unveiled: ChatGPT’s Voice Mode & LLama Advancements',
      excerpt: 'Your weekly pulse on AI, startups, and productivity hacks. Stay curious, innovate boldly, and grow with every issue.',
      date: '2024-10-02',
      readTime: '5 min read',
      image: '/SB.webp',
      category: 'AI & Startups',
      substackLink: 'https://unveiledd.substack.com/p/unveiled-chatgpts-voice-mode-llama',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container px-6">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">Blog</h1>
        <p className="mb-12 max-w-[600px] text-lg text-neutral-400">
          Thoughts on product management, user experience design, and building
          digital products that make a difference.
        </p>
        <BlogGridComponent>
          {posts.map((post) => (
            <BlogPostComponent
              key={post.id}
              post={post}
              isMedium={!!post.mediumLink}
              isSubstackLink={!!post.substackLink}
            />
          ))}
        </BlogGridComponent>
      </div>
    </div>
  );
}

// BlogPost Component
export function BlogPost({ post, isMedium = false, isSubstackLink = false }: { post: any; isMedium?: boolean; isSubstackLink?: boolean }) {
  return (
    <div className="rounded-lg bg-neutral-900 p-6">
      <Image
        src={post.image}
        alt={post.title}
        className="mb-4 w-full rounded-lg object-cover"
        width={400}
        height={250}
      />
      <h2 className="text-2xl font-bold text-white">{post.title}</h2>
      <p className="mt-2 text-sm text-neutral-400">{post.excerpt}</p>
      <div className="mt-4 text-sm">
        {isMedium ? (
          <a
            href={post.mediumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        ) : isSubstackLink ? (
          <a
            href={post.substackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        ) : (
          <p className="text-neutral-400">
            {post.date} • {post.readTime}
          </p>
        )}
      </div>
    </div>
  );
}

// BlogGrid Component
export function BlogGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}