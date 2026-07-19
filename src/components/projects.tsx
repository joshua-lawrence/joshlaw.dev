const projects = [
  {
    name: "nox",
    href: "https://getnoxapp.com/",
    description: "Photophobia screen filter for macOS",
    stack: ["Swift", "SwiftUI"],
  },
  {
    name: "truecursor",
    href: "https://truecursor.com",
    description: "Tremor-stabilizing cursor for macOS",
    stack: ["Swift", "CoreML"],
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
        <line x1="24.8" y1="52" x2="42.3" y2="31.2" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8; 0.25; 0.8"
            dur="6s"
            begin="-4.8s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="39.1" y1="52" x2="47.8" y2="28" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8; 0.25; 0.8"
            dur="6s"
            begin="-3.6s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="50" y1="52" x2="50" y2="27" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8; 0.25; 0.8"
            dur="6s"
            begin="-2.4s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="60.9" y1="52" x2="52.2" y2="28" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8; 0.25; 0.8"
            dur="6s"
            begin="-1.2s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="75.2" y1="52" x2="57.7" y2="31.2" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8; 0.25; 0.8"
            dur="6s"
            begin="0s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="22" y1="55" x2="78" y2="55" opacity="0.7" />
        <line x1="36.2" y1="60" x2="31.1" y2="74" opacity="0.12">
          <animate
            attributeName="opacity"
            values="0.12; 0.4; 0.12"
            dur="6s"
            begin="-3.6s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="50" y1="60" x2="50" y2="74" opacity="0.12">
          <animate
            attributeName="opacity"
            values="0.12; 0.4; 0.12"
            dur="6s"
            begin="-2.4s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
        <line x1="63.8" y1="60" x2="68.9" y2="74" opacity="0.12">
          <animate
            attributeName="opacity"
            values="0.12; 0.4; 0.12"
            dur="6s"
            begin="-1.2s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </line>
      </g>
    </svg>
  );
}

function SadiephotoArt() {
  return (
    <svg viewBox="0 0 100 100" className="w-full aspect-[4/3]" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="0.5" fill="none">
        <g opacity="0.45">
          <rect x="26" y="36" width="48" height="36" rx="3" />
          <path d="M 41 36 L 43.5 31.5 L 56.5 31.5 L 59 36" />
          <rect x="64" y="32.5" width="5" height="2.5" rx="1" />
          <circle cx="34" cy="43" r="1.5" />
          <animate
            attributeName="opacity"
            values="0.4; 0.65; 0.4"
            dur="8s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </g>
        <circle cx="50" cy="54" r="11" opacity="0.85" />
        <path d="M 57 54 L 53.5 47.9 L 46.5 47.9 L 43 54 L 46.5 60.1 L 53.5 60.1 Z" opacity="0.55">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 54"
            to="60 50 54"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="50" cy="54" r="1" fill="currentColor" stroke="none">
          <animate
            attributeName="opacity"
            values="0.1; 0.9; 0.1"
            dur="6s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}

function TrueCursorArt() {
  return (
    <svg viewBox="0 0 100 100" className="w-full aspect-[4/3]" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="0.5" fill="none">
        <path d="M 10 50 L 16 44.7 L 22 54.5 L 28 46.5 L 34 52.75 L 40 48 L 46 51.5 L 52 48.9 L 58 50.75 L 64 49.5 L 70 50.3 L 76 49.8 L 80 50" opacity="0.8">
          <animate
            attributeName="d"
            values="M 10 50 L 16 44.7 L 22 54.5 L 28 46.5 L 34 52.75 L 40 48 L 46 51.5 L 52 48.9 L 58 50.75 L 64 49.5 L 70 50.3 L 76 49.8 L 80 50; M 10 50 L 16 55.3 L 22 45.5 L 28 53.5 L 34 47.25 L 40 52 L 46 48.5 L 52 51.1 L 58 49.25 L 64 50.5 L 70 49.7 L 76 50.2 L 80 50; M 10 50 L 16 46.8 L 22 52.7 L 28 47.9 L 34 51.65 L 40 48.8 L 46 50.9 L 52 49.3 L 58 50.5 L 64 49.7 L 70 50.2 L 76 49.9 L 80 50; M 10 50 L 16 44.7 L 22 54.5 L 28 46.5 L 34 52.75 L 40 48 L 46 51.5 L 52 48.9 L 58 50.75 L 64 49.5 L 70 50.3 L 76 49.8 L 80 50"
            dur="5s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </path>
        <path d="M 46 50 L 52 46.8 L 58 52.8 L 64 47.4 L 70 52.4 L 76 48 L 82 51" opacity="0.16">
          <animate
            attributeName="d"
            values="M 46 50 L 52 46.8 L 58 52.8 L 64 47.4 L 70 52.4 L 76 48 L 82 51; M 46 50 L 52 53.2 L 58 47.2 L 64 52.6 L 70 47.6 L 76 52 L 82 49; M 46 50 L 52 46.8 L 58 52.8 L 64 47.4 L 70 52.4 L 76 48 L 82 51"
            dur="5s"
            begin="-2.5s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 80 50 L 80 61 L 83.2 58.2 L 85.2 62.6 L 86.9 61.9 L 84.9 57.6 L 89 57.2 Z"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}

const artMap: Record<string, () => React.ReactNode> = {
  nox: () => <NoxArt />,
  sadiephoto: () => <SadiephotoArt />,
  truecursor: () => <TrueCursorArt />,
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
