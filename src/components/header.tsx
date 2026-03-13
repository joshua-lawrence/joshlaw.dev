"use client";
import CubeAnimation from "@/components/cube-animation";

const projects = [
  {
    name: "nox",
    href: "https://getnoxapp.com/",
    description: "Photophobia screen filter for macOS",
    stack: "Swift, SwiftUI",
  },
  {
    name: "sadiephoto",
    href: "https://www.sadiephoto.com",
    description: "Wedding photography site with Stripe checkout",
    stack: "Astro, React, Stripe",
  },
];

export default function Header() {
  return (
    <div
      className="flex justify-center w-full pb-16"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <CubeAnimation />
      <div className="flex flex-col gap-2 max-w-md w-full justify-center">
        <h1 className="text-2xl pt-72 text-center pointer-events-none">
          Joshua Lawrence
        </h1>
        <div className="relative flex gap-4 w-full z-50 justify-center">
          <a
            href="https://github.com/joshua-lawrence/"
            target="_blank"
            className="pointer-events-auto opacity-50 hover:opacity-100 transition-opacity"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshuaglawrence/"
            target="_blank"
            className="pointer-events-auto opacity-50 hover:opacity-100 transition-opacity"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            LinkedIn
          </a>
        </div>
        <div className="relative z-50 flex flex-col items-center mt-10 gap-2">
          <span className="text-xs font-mono uppercase tracking-widest opacity-30">
            projects
          </span>
          <div className="flex gap-4">
            {projects.map((project) => (
              <div key={project.name} className="relative group">
                <a
                  href={project.href}
                  target="_blank"
                  className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity block px-3 py-1.5 -mx-3 -my-1.5"
                  style={{ userSelect: "none", WebkitUserSelect: "none" }}
                >
                  {project.name}
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-48">
                  <div className="bg-background border border-foreground/10 rounded-md px-3 py-2 text-center shadow-sm">
                    <p className="text-xs opacity-60">{project.description}</p>
                    <p className="text-xs font-mono opacity-30 mt-1">
                      {project.stack}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
