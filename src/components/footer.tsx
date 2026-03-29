import Office from "./office";

export default function Footer() {
  return (
    <footer className="pt-21 pb-8 text-[10px] tracking-wide text-foreground/50">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Office />
        </div>
        <div className="flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} Joshua Lawrence</span>
          <a href="mailto:josh@joshlaw.dev" className="hover:text-foreground/70 transition-colors">josh@joshlaw.dev</a>
        </div>
      </div>
    </footer>
  );
}
