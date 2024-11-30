import { BlogPost } from '@/components/blog-post';
import { BlogGrid } from '@/components/blog-grid';

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
      title: 'Unveiled: ChatGPTs Voice Mode & LLama Advancements',
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
        <BlogGrid>
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              isMedium={!!post.mediumLink}
              isSubstackLink={!!post.substackLink}
            />
          ))}
        </BlogGrid>
      </div>
    </div>
  );
}