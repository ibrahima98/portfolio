import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground tracking-tight">
          404 — Page non trouvée
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          <Link href="/" className="text-primary hover:underline">
            Retour à l&apos;accueil
          </Link>
          <Link href="/blog" className="text-primary hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 