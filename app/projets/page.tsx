"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { GitCommit, GitFork, Mail, Star } from "lucide-react";

import { useState } from "react";

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
    Data: ["Elasticsearch", "MongoDB", "PostgreSQL", "MySQL", "Big Data", "Data Analysis"],
    Backend: ["Python", "Flask", "REST API", "JWT", "PostgreSQL", "Laravel", "PHP"],
    DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS", "Cloud Computing"]
  };

  const projets = [
    {
      titre: "Plateforme Web Auto-Map",
      description: "Plateforme web pour la gestion des auto-écoles et la recherche de l'auto-école la plus proche.",
      longDescription: "site de cartographie des auto-écoles au Sénégal",
      image: "/images/Logo_autoecole-02.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Flask", "Python", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "AWS", "Cloud Computing"],
      stats: {
        commits: 120,
        stars: 10,
        forks: 5
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "Portfolio Personnel",
      description: "Portfolio développé avec Next.js et Tailwind CSS, présentant mes compétences et réalisations.",
      longDescription: "Une vitrine interactive de mes compétences et réalisations, construite avec les dernières technologies web.",
      image: "/images/porfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      stats: {
        commits: 120,
        stars: 10,
        forks: 5
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "E-commerce Laravel",
      description: "Plateforme e-commerce complète avec paiement Stripe et gestion des commandes.",
      longDescription: "Solution e-commerce développée avec Laravel, intégrant Stripe pour les paiements, gestion des produits et du panier en temps réel.",
      image: "/images/fruits.png",
      technologies: ["Laravel", "PHP", "MySQL", "Stripe", "Livewire", "TailwindCSS"],
      stats: {
        commits: 250,
        stars: 18,
        forks: 7
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "Détection de Maladies par CNN",
      description: "Modèle de Deep Learning (CNN) développé avec TensorFlow et Scikit-learn pour la détection de deux types de maladies sur les cultures d'haricot.",
      longDescription: "Solution d'IA pour l'analyse automatique des maladies des plantes via l'analyse d'images.",
      image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?q=80&w=2940&auto=format&fit=crop",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "CNN", "OpenCV", "Mobile App"],
      stats: {
        commits: 180,
        stars: 22,
        forks: 8
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "Numérisation État Civil",
      description: "Application Java pour la numérisation et la gestion des documents d'état civil.",
      longDescription: "Solution complète de numérisation des documents d'état civil.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2940&auto=format&fit=crop",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      stats: {
        commits: 200,
        stars: 15,
        forks: 8
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "API REST Prompts",
      description: "API REST Flask pour la gestion de prompts avec système de votes et notations.",
      longDescription: "API robuste avec authentification JWT, gestion des rôles, système de votes et états complexes des prompts.",
      image: "/images/api.png",
      technologies: ["Python", "Flask", "PostgreSQL", "JWT", "REST API", "UML"],
      stats: {
        commits: 150,
        stars: 25,
        forks: 12
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "Moteur de Recherche ELK",
      description: "Moteur de recherche spécialisé utilisant la stack ELK pour l'analyse des tendances de prix.",
      longDescription: "Solution de web scraping et d'analyse de données avec visualisation des tendances via Elasticsearch et Kibana.",
      image: "/images/elk.png",
      technologies: ["Python", "Elasticsearch", "Kibana", "Web Scraping", "Data Analysis"],
      stats: {
        commits: 180,
        stars: 15,
        forks: 7
      },
      email: "papalybn@gmail.com"
    },
    {
      titre: "Data Warehouse Commercial",
      description: "Conception et implémentation d'un entrepôt de données pour l'analyse des ventes multi-magasins.",
      longDescription: "Architecture complète d'un Data Warehouse avec modélisation des données et génération de jeux de test.",
      image: "/images/datawharehouse.png",
      technologies: ["SQL", "PostgreSQL", "Data Modeling", "ETL", "Data Warehouse"],
      stats: {
        commits: 85,
        stars: 12,
        forks: 4
      },
      email: "papalybn@gmail.com"
    }
  ];

  const handleContactClick = (projet: any) => {
    const subject = `Intéressé par votre projet : ${projet.titre}`;
    const body = `Bonjour,\n\nJe suis intéressé par votre projet "${projet.titre}".\nPourrions-nous en discuter ?\n\nCordialement`;
    window.location.href = `mailto:papalybn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const filteredProjets = selectedCategory === "Tous" 
    ? projets
    : projets.filter(projet => {
        const projectTechnologies = new Set(projet.technologies);
        return techCategories[selectedCategory as keyof typeof techCategories]
          .some(tech => projectTechnologies.has(tech));
      });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(categories).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className="text-sm"
            >
              {value}
            </Button>
          ))}
        </div>

        {/* Section Développement Web & Mobile */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Développement Web & Mobile</h2>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredProjets
                .filter(projet => 
                  (projet.technologies.some(tech => 
                    techCategories.Web.includes(tech) || 
                    techCategories.Mobile.includes(tech) ||
                    techCategories.Backend.includes(tech)
                  ) ||
                  projet.titre === "API REST Prompts" ||
                  projet.titre === "Détection de Maladies par CNN" ||
                  projet.titre === "E-commerce Laravel"
                ) && 
                projet.titre !== "Moteur de Recherche ELK" &&
                projet.titre !== "Data Warehouse Commercial"
                )
                .map((projet) => (
                  <motion.div
                    key={projet.titre}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="max-w-sm mx-auto w-full"
                  >
                    <Card className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image avec overlay au hover */}
                      <div className="relative overflow-hidden group">
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <p className="text-white text-sm font-light">
                            {projet.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-4 space-y-3">
                        {/* En-tête */}
                        <div className="space-y-1">
                          <h3 className="font-medium text-lg leading-tight">
                            {projet.titre}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {projet.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {projet.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {projet.technologies.length > 3 && (
                            <span className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full">
                              +{projet.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Statistiques du projet */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                          <div className="flex items-center gap-1">
                            <GitCommit className="h-3.5 w-3.5" />
                            {projet.stats.commits}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" />
                            {projet.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" />
                            {projet.stats.forks}
                          </div>
                        </div>

                        {/* Bouton */}
                        {projet.titre !== "Portfolio Personnel" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2 text-xs font-normal"
                            onClick={() => handleContactClick(projet)}
                          >
                            <Mail className="h-3 w-3 mr-1.5" />
                            Me contacter
                          </Button>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Section Intelligence Artificielle */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Intelligence Artificielle</h2>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredProjets
                .filter(projet => 
                  projet.titre === "Détection de Maladies par CNN"  // Garde le projet dans la section IA
                )
                .map((projet) => (
                  <motion.div
                    key={projet.titre}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="max-w-sm mx-auto w-full"
                  >
                    <Card className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image avec overlay au hover */}
                      <div className="relative overflow-hidden group">
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <p className="text-white text-sm font-light">
                            {projet.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-4 space-y-3">
                        {/* En-tête */}
                        <div className="space-y-1">
                          <h3 className="font-medium text-lg leading-tight">
                            {projet.titre}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {projet.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {projet.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {projet.technologies.length > 3 && (
                            <span className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full">
                              +{projet.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Statistiques du projet */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                          <div className="flex items-center gap-1">
                            <GitCommit className="h-3.5 w-3.5" />
                            {projet.stats.commits}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" />
                            {projet.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" />
                            {projet.stats.forks}
                          </div>
                        </div>

                        {/* Bouton */}
                        {projet.titre !== "Portfolio Personnel" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2 text-xs font-normal"
                            onClick={() => handleContactClick(projet)}
                          >
                            <Mail className="h-3 w-3 mr-1.5" />
                            Me contacter
                          </Button>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Section Data & Business Intelligence */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Data & Business Intelligence</h2>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredProjets
                .filter(projet => 
                  projet.titre === "Moteur de Recherche ELK" ||
                  projet.titre === "Data Warehouse Commercial"
                )
                .map((projet) => (
                  <motion.div
                    key={projet.titre}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="max-w-sm mx-auto w-full"
                  >
                    <Card className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image avec overlay au hover */}
                      <div className="relative overflow-hidden group">
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <p className="text-white text-sm font-light">
                            {projet.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-4 space-y-3">
                        {/* En-tête */}
                        <div className="space-y-1">
                          <h3 className="font-medium text-lg leading-tight">
                            {projet.titre}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {projet.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {projet.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {projet.technologies.length > 3 && (
                            <span className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full">
                              +{projet.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Statistiques du projet */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                          <div className="flex items-center gap-1">
                            <GitCommit className="h-3.5 w-3.5" />
                            {projet.stats.commits}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" />
                            {projet.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" />
                            {projet.stats.forks}
                          </div>
                        </div>

                        {/* Bouton */}
                        {projet.titre !== "Portfolio Personnel" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2 text-xs font-normal"
                            onClick={() => handleContactClick(projet)}
                          >
                            <Mail className="h-3 w-3 mr-1.5" />
                            Me contacter
                          </Button>
                        )}
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