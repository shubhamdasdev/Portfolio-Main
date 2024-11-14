import { BlogPost } from '@/components/blog-post';
import { BlogGrid } from '@/components/blog-grid';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Product Management in AI-Driven World',
      excerpt: 'Exploring how artificial intelligence is reshaping the role of product managers and the skills needed to succeed.',
      date: '2024-03-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1673845320626-d51a53afa626',
      category: 'Product Strategy',
    },
    {
      id: 2,
      title: 'Building Products That Scale: Lessons Learned',
      excerpt: 'Key insights and strategies for creating products that can effectively scale with growing user demands.',
      date: '2024-03-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1672239792044-5cd0f4e9e550',
      category: 'Product Development',
    },
    {
      id: 3,
      title: 'User-Centered Design: Beyond the Basics',
      excerpt: 'Advanced techniques for incorporating user feedback and behavior into product design decisions.',
      date: '2024-03-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1671920090611-9a40303b52cb',
      category: 'UX Design',
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
            <BlogPost key={post.id} post={post} />
          ))}
        </BlogGrid>
      </div>
    </div>
  );
}