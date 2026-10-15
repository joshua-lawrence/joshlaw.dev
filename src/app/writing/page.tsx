import { formatDate, getArticles } from "@/lib/writing";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing · Joshua Lawrence",
  description: "Notes and essays by Joshua Lawrence",
};

export default function Writing() {
  const articles = getArticles();

  return (
    <section className="relative z-50 mt-16 flex flex-col gap-5">
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
        writing
      </span>
      {articles.length === 0 ? (
        <p className="text-sm opacity-50">Nothing here yet.</p>
      ) : (
        <ul className="flex flex-col">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/writing/${article.slug}`}
                className="group flex items-baseline justify-between gap-6 py-3 border-b border-foreground/[0.06]"
              >
                <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  {article.title}
                  {article.draft && (
                    <span className="ml-2 text-[10px] font-mono uppercase tracking-widest opacity-50">
                      draft
                    </span>
                  )}
                </span>
                <time
                  dateTime={article.date}
                  className="shrink-0 text-[10px] font-mono tabular-nums opacity-40 group-hover:opacity-60 transition-opacity"
                >
                  {formatDate(article.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
