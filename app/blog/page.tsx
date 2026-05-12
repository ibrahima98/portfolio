import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { articles } from "./_content/articles";
import { ClickableAvatar } from "./components/clickable-avatar";

// Import dynamique des composants
const BlogCard = dynamic(() => import("@/components/blog-card"), {
  loading: () => <div className="h-[300px] bg-muted animate-pulse rounded-lg" />
});

export const metadata: Metadata = {
  title: "Blog - LY Ibrahima",
  description: "Articles sur le développement web et la data science",
};

async function getBlogPosts() {
  // Simulez un délai de chargement pour tester
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      title: "Introduction au Machine Learning",
      description: "Une approche pratique du machine learning avec Python",
      image: "/images/blog/ml-intro.jpg",
      date: "2024-03-20",
      readTime: "5 min",
    },
    // ... autres articles
  ];
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Articles &amp; Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes articles sur le développement web, la data science et l&apos;intelligence artificielle
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article 
              key={article.slug}
              className="group relative bg-card hover:bg-card/80 rounded-lg overflow-hidden 
                       border border-border/50 transition-all duration-300 
                       hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative h-40 sm:h-48">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  width={384}
                  height={192}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  priority={article.slug === articles[0].slug}
                  loading={article.slug === articles[0].slug ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/90 text-white text-xs px-2 py-0.5"
                  >
                    {article.readTime}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ClickableAvatar author={article.author} />
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1 opacity-70" />
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold leading-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.description}
                </p>
                
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between text-sm hover:bg-primary/5 hover:text-primary"
                >
                  <Link 
                    href={`/blog/${article.slug}`}
                    prefetch={true}
                  >
                    <span>Lire l'article</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 