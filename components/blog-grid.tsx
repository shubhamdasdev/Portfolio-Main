'use client';

interface BlogGridProps {
  children: React.ReactNode;
}

export function BlogGrid({ children }: BlogGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}