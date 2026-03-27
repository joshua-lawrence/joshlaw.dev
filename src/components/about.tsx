"use client";

import { useEffect, useRef, useState } from "react";

function Portrait({ animate }: { animate: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1160 1540"
      className="w-full h-full"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset={animate ? undefined : "100"}
        pathLength={100}
        className={
          animate
            ? "animate-[drawLine_8s_cubic-bezier(0.35,0.05,0.2,1)_forwards]"
            : ""
        }
        d="m851 911l-58 60-66 80-16 16-20 12-34 28-86 36-56 32-58 5-31-21-38-40-48-58-48-66-60-80-24-60-12-60-34-112-10-120 8-52-6-68 8-32 30-12-24-32 34-44 30-45 64-54 104-34 103-32 77 6 75 20 66 48 48 77 54 120 52 158v50l4 50-8 38-32 22-44 8-8-16 44 28 66-44 22 34 24 42 28 44v42l-16 82-24 68-26 50-42 90-46 59-38 60-40 54-58 62h-66-20l4-38-19-56v-66-24l47 12v56l30 48 16 4 118-124 32-103 90-200 8-80-40-84-54 112-92 74-110 74-16-100-10-56-64-32-56-22-8 18-8 20-22 2-21 8-16 18-24 22-34 2h-26l-22-18 6-42 10-70-26 162 20 4 4 32 84-4 67-24 52-26 54-16 11 2-21 38-16 18-16-10-16 26-24-12-12 20-39 16-42 8-22-8-84-202-32 14-32 4-24-66h42l18 2 44-4-44 20 60-24-14-42h-34-36l-28 6 235-102h38 32l38 14-68 40-75 50 31-42 90-8h66 20l-110 60h-30l-16 4h-27l287-86 26-8 8-46 22-10 18-16 26-10 24 4-8 20-34 28 54-2v22l-32 92-30 4 8-22v-24-38l26 12"
      />
    </svg>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative z-50 mt-34">
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
        about
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 sm:gap-13 mt-5 items-center">
        <div
          ref={ref}
          className="overflow-hidden w-40 sm:w-52 aspect-[3/4] mx-auto sm:mx-0"
        >
          <Portrait animate={visible} />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base sm:text-lg font-light leading-relaxed opacity-80">
            I&apos;m a builder and software engineer based in Salt Lake City. I
            have a passion for untangling interesting problems and bringing
            ideas to life.
          </p>
          <p className="text-sm leading-relaxed opacity-50">
            I&apos;ve spent the last 7+ years working on a variety of projects
            at both small startups and large companies. I have experience in a
            wide range of technologies, and I&apos;m always looking to learn
            more and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
