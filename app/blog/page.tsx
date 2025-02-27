import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { articles } from "./_content/articles";
import { ClickableAvatar } from "./components/clickable-avatar";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-foreground dark:text-white">
          Articles & Insights
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {articles.map((article) => (
            <article 
              key={article.slug}
              className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden 
                         shadow-sm hover:shadow-lg transition-all duration-300 
                         border border-neutral-200 dark:border-neutral-800
                         w-full max-w-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  width={384}
                  height={192}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                <div className="absolute top-3 right-3 z-10">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/90 text-white text-xs font-medium px-2.5 py-0.5 shadow-sm"
                  >
                    {article.readTime}
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 py-4 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ClickableAvatar author={article.author} />
                  </div>
                  <span className="text-muted-foreground/60">•</span>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1.5 opacity-70" />
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h2>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.description}
                </p>
                
                <div className="pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    <Link href={`/blog/${article.slug}`}>
                      <span className="font-medium">Lire l'article</span>
                      <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 