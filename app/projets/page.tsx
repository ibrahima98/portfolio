"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Image from 'next/image';

import { useCallback, useState } from "react";

interface Projet {
  titre: string;
  description: string;
  longDescription: string;
  date: string;
  image: string;
  imageAlt?: string;
  githubLink?: string;
  technologies: string[];
  email: string;
}

export default function Projets() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = {
    "Tous": "Tous les projets",
    "Web": "Développement Web",
    "Mobile": "Applications Mobiles",
    "IA": "Intelligence Artificielle",
    "Data": "Science des Données",
    "Backend": "Backend & API",
    "DevOps": "DevOps & Cloud"
  };

  const techCategories = {
    Web: ["Next.js", "React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS", "Laravel", "PHP", "Livewire"],
    Mobile: ["React Native", "Flutter", "iOS", "Android", "Mobile App"],
    IA: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "CNN", "Machine Learning"],
    Data: ["Elasticsearch", "MongoDB", "PostgreSQL", "MySQL", "Big Data", "Data Analysis", "pandas", "seaborn", "matplotlib"],
    Backend: ["Python", "Flask", "REST API", "JWT", "PostgreSQL", "Laravel", "PHP", "JAVA", "POO"],
    DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS", "Cloud Computing"]
  };

  const projets: Projet[] = [
    {
      titre: "Attaqwa Paiement",
      description:
        "Module de paiement générique réutilisable, pensé pour être branché sur plusieurs produits, en particulier l’écosystème At Taqwa.",
      longDescription: `
        Dépôt : https://github.com/ibrahima98/attaqwa-paiement.git

        Objectif : offrir un socle de paiement cohérent (flux, callbacks, sécurité, configuration) pour éviter de dupliquer la logique sur chaque application.

        Cas d’usage : intégration dans des apps web ou mobiles, dont la suite At Taqwa, avec une API claire et des conventions stables pour les autres projets.
      `,
      date: "2024-12-01",
      image: "/images/attaqwa-paiement-en-ligne.jpg",
      imageAlt:
        "Paiement en ligne — carte bancaire et smartphone (photo Unsplash, licence Unsplash).",
      githubLink: "https://github.com/ibrahima98/attaqwa-paiement.git",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "REST API",
        "JWT",
        "PostgreSQL",
        "Backend",
        "Web",
      ],
      email: "papalybn@gmail.com",
    },
    {
      titre: "At Taqwa — Application",
      description:
        "Application mobile At Taqwa (iOS et Android) : code source sur GitHub, déployée sur les stores.",
      longDescription: `
        Dépôt application : https://github.com/papalybn1-svg/at-taqwa-app.git

        Application mobile At Taqwa pour iOS et Android, associée à l’écosystème (dont le module de paiement).
      `,
      date: "2026-01-01",
      image: "/images/attaqwa-play-store-feature.png",
      imageAlt:
        "At-Taqwa — visuel officiel Google Play (feature graphic du listing).",
      githubLink: "https://github.com/papalybn1-svg/at-taqwa-app.git",
      technologies: ["Mobile App", "Android", "iOS", "TypeScript"],
      email: "papalybn@gmail.com",
    },
  ];

  const handleContactClick = useCallback((projet: Projet) => {
    const subject = `Intéressé par votre projet : ${projet.titre}`;
    const body = `Bonjour,\n\nJe suis intéressé par votre projet "${projet.titre}".\nPourrions-nous en discuter ?\n\nCordialement`;
    window.location.href = `mailto:papalybn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, []);

  const filteredProjets = selectedCategory === "Tous"
    ? projets
    : projets.filter((projet) => {
        const projectTechnologies = new Set(projet.technologies);
        return techCategories[selectedCategory as keyof typeof techCategories]
          .some((tech) => projectTechnologies.has(tech));
      });

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Object.entries(categories).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className="text-sm"
              aria-pressed={selectedCategory === key}
              aria-label={`Filtrer par ${value}`}
            >
              {value}
            </Button>
          ))}
        </div>

        {/* Section Projets */}
        <section className="mb-16">
          <div className="text-center sm:text-left mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground tracking-tight">
              Mes Projets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0">
              Écosystème At Taqwa : module de paiement réutilisable et application mobile (iOS & Android).
            </p>
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjets.map((projet) => (
                <motion.div
                  key={projet.titre}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full h-full min-h-0 flex"
                >
                  <Card className="flex h-full min-h-[22rem] w-full flex-col overflow-hidden border border-border/60 bg-card text-card-foreground rounded-xl shadow-sm hover:shadow-md hover:border-border transition-all duration-300">
                    <div className="relative h-44 shrink-0 overflow-hidden group">
                      <Image
                        src={projet.image}
                        alt={projet.imageAlt ?? projet.titre}
                        width={800}
                        height={352}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-4 pt-4">
                      <div className="min-h-0 flex-1 space-y-1">
                        <h3 className="font-semibold text-lg leading-tight text-foreground">
                          {projet.titre}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-snug">
                          {projet.description}
                        </p>
                        <p className="text-xs text-muted-foreground pt-1">
                          Ajouté le : {new Date(projet.date).toLocaleDateString("fr-FR")}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-col gap-2 pt-4">
                        {projet.githubLink ? (
                          <a
                            href={projet.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-center text-sm font-medium text-foreground transition hover:border-primary hover:bg-accent hover:text-accent-foreground"
                          >
                            <Github className="h-3.5 w-3.5 shrink-0" />
                            Code source (GitHub)
                          </a>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-sm font-medium"
                            onClick={() => handleContactClick(projet)}
                          >
                            <Mail className="h-3 w-3 mr-1.5" />
                            Me contacter
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}