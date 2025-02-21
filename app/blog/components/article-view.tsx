"use client";

import Image from "next/image";
import { ClickableAvatar } from "./clickable-avatar";

interface ArticleViewProps {
  article: {
    title: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
    readTime: string;
    image: string;
    content: string;
    tags: string[];
  };
}

export function ArticleView({ article }: ArticleViewProps) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{article.title}</h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <ClickableAvatar author={article.author} />
            <span>{article.author.name}</span>
          </div>

          <span className="hidden sm:inline">•</span>

          <div className="flex items-center gap-2">
            <time>{new Date(article.date).toLocaleDateString('fr-FR')}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="relative h-64 md:h-96 mt-8 rounded-xl overflow-hidden group">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </header>

      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <footer className="mt-12 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
} 