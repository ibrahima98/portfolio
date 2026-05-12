import { notFound } from "next/navigation";
import { articles } from "../_content/articles";
import { ArticleView } from "../components/article-view";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'Cet article n\'existe pas'
    };
  }

  return {
    title: `${article.title} | Blog`,
    description: article.description
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <ArticleView article={article} />
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
