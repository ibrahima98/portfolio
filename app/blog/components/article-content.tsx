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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
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
        className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:text-foreground
          prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6
          prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:text-muted-foreground prose-ul:leading-relaxed
          prose-li:marker:text-primary
          prose-a:text-primary
          prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
          [&>section]:mb-16"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <footer className="mt-12 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
} 