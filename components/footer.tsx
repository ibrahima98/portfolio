import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[0.5px] dark:border-neutral-800/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo ou Nom */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-primary">LY Ibrahima</h3>
          <p className="text-muted-foreground mt-2">Développeur Full Stack & Data Scientist</p>
        </div>

        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="https://github.com/votre-github" className="transform hover:scale-110 transition-transform">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/votre-profil" className="transform hover:scale-110 transition-transform">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:votre@email.com" className="transform hover:scale-110 transition-transform">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LY Ibrahima. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 