interface ProjectsGridProps {
  children: React.ReactNode;
}

export function ProjectsGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}