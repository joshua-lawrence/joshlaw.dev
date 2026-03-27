const projects = [
  {
    name: "nox",
    href: "https://getnoxapp.com/",
    description: "Photophobia screen filter for macOS",
    stack: ["Swift", "SwiftUI"],
  },
  {
    name: "sadiephoto",
    href: "https://www.sadiephoto.com",
    description: "Wedding photography site with Stripe checkout",
    stack: ["Astro", "React", "Stripe"],
  },
];

function NoxArt() {
  return (
    <svg viewBox="0 0 100 100" className="w-full aspect-[4/3]" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="0.5" fill="none">
        <path d="M 10 35 C 30 15, 70 55, 90 35">
          <animate
            attributeName="d"
            values="M 10 35 C 30 15, 70 55, 90 35; M 10 35 C 30 55, 70 15, 90 35; M 10 35 C 30 15, 70 55, 90 35"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M 10 50 C 30 40, 70 60, 90 50" opacity="0.6">
          <animate
            attributeName="d"
            values="M 10 50 C 30 40, 70 60, 90 50; M 10 50 C 30 60, 70 40, 90 50; M 10 50 C 30 40, 70 60, 90 50"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M 10 65 C 30 62, 70 68, 90 65" opacity="0.3">
          <animate
            attributeName="d"
            values="M 10 65 C 30 62, 70 68, 90 65; M 10 65 C 30 68, 70 62, 90 65; M 10 65 C 30 62, 70 68, 90 65"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}

function SadiephotoArt() {
  return (
    <svg viewBox="0 0 100 100" className="w-full aspect-[4/3]" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="0.5" fill="none">
        <rect x="30" y="25" width="40" height="50" rx="1" opacity="0.4">
          <animate attributeName="y" values="25; 20; 25" dur="7s" repeatCount="indefinite" />
          <animate attributeName="height" values="50; 60; 50" dur="7s" repeatCount="indefinite" />
        </rect>
        <rect x="25" y="30" width="50" height="40" rx="1" opacity="0.8">
          <animate attributeName="x" values="25; 20; 25" dur="5s" repeatCount="indefinite" />
          <animate attributeName="width" values="50; 60; 50" dur="5s" repeatCount="indefinite" />
        </rect>
        <circle cx="50" cy="50" r="1" fill="currentColor" stroke="none">
          <animate attributeName="opacity" values="0.1; 1; 0.1" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

const artMap: Record<string, () => React.ReactNode> = {
  nox: () => <NoxArt />,
  sadiephoto: () => <SadiephotoArt />,
};

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-50 flex flex-col gap-3 mt-8"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
        projects
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            className="pointer-events-auto group flex flex-col gap-3"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            <div className="rounded-lg border border-foreground/[0.08] overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/[0.15] group-hover:shadow-md">
              <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                {artMap[project.name]?.()}
              </div>
            </div>
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.name}
                </h3>
                <svg
                  className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-1 group-hover:opacity-30 group-hover:translate-x-0 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="text-xs mt-1 leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono opacity-50 group-hover:opacity-70 transition-opacity"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
