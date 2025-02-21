"use client";

import Image from "next/image";
import { ArticleHeader } from "./article-header";

interface ArticleContentProps {
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

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          {article.title}
        </h1>

        <ArticleHeader 
          author={article.author}
          date={article.date}
          readTime={article.readTime}
        />

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