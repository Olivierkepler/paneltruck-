import BeforeAfterSlider from "./BeforeAfterSlider";

interface FeaturedProjectsProps {
  projects: {
    before: string;
    after: string;
    opacity?: number;
  }[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="flex flex-col items-center w-full gap-16 py-10">
      {projects.map((p, i) => (
        <BeforeAfterSlider
          key={i}
          beforeSrc={p.before}
          afterSrc={p.after}
          overlayOpacity={p.opacity ?? 1}
          width={800}
          height={450}
        />
      ))}
    </div>
  );
}
