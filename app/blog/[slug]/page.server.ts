import { articles } from "../_content/articles";

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

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
} 