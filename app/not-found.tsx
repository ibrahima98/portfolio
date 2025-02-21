import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
        <p className="text-gray-600 mb-6">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link 
          href="/blog"
          className="text-primary hover:underline"
        >
          Retourner au Blog
        </Link>
      </div>
    </div>
  );
} 