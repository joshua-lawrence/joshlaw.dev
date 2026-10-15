import { formatDate, getArticle, getArticles, renderMarkdown } from "@/lib/writing";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: `${article.title} · Joshua Lawrence`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  return (
    <article className="relative z-50 mt-16">
      <Link
        href="/writing"
        className="text-[10px] font-mono uppercase tracking-widest opacity-50 hover:opacity-80 transition-opacity"
      >
        &larr; writing
      </Link>
      <header className="mt-8 flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">{article.title}</h1>
        <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="mx-2">&middot;</span>
          {article.readingTime} min read
        </p>
      </header>
      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
      />
    </article>
  );
}
