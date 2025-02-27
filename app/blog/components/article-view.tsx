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
    description: string;
  };
}

export function ArticleView({ article }: ArticleViewProps) {
  return (
    <>
      {/* Titre en haut sur mobile */}
      <div className="block sm:hidden -mt-6 mb-6 px-4">
        <h1 className="text-2xl font-bold text-foreground dark:text-white">
          {article.title}
        </h1>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Titre masqué sur mobile, visible sur desktop */}
        <h1 className="hidden sm:block text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-8 sm:mb-10 leading-tight">
          {article.title}
        </h1>

        <header className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 p-4 rounded-xl bg-muted/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <ClickableAvatar author={article.author} />
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{article.author.name}</span>
                <span className="text-sm text-muted-foreground">Auteur</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:ml-auto">
              <time className="text-sm text-muted-foreground">
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-primary">•</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </span>
            </div>
          </div>

          <div className="relative h-[40vh] md:h-[45vh] rounded-2xl overflow-hidden shadow-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              quality={100}
            />
          </div>

          {/* Introduction dynamique après l'image */}
          <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {article.description}
            </p>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:text-primary 
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ul:leading-relaxed
            prose-li:marker:text-primary
            prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
            [&>section]:mb-16"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
} 