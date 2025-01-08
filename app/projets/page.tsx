"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";

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
    Backend: ["Python", "Flask", "REST API", "JWT", "PostgreSQL", "Laravel", "PHP", "JAVA", "POO"],
    DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS", "Cloud Computing"]
  };

  const projets = [
    {
      titre: "Plateforme Web Auto-Map",
      description: "Plateforme web pour la gestion des auto-écoles et la recherche de l'auto-école la plus proche.",
      longDescription: "site de cartographie des auto-écoles au Sénégal",
      date: "2024-12-17",
      image: "/images/Logo_autoecole-02.png",
      

      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Flask", "Python", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "AWS", "Cloud Computing"],
      
      email: "papalybn@gmail.com"
    },
    {
      titre: "Portfolio Personnel",
      description: "Portfolio développé avec Next.js et Tailwind CSS, présentant mes compétences et réalisations.",
      longDescription: "Une vitrine interactive de mes compétences et réalisations, construite avec les dernières technologies web.",
      date: "2022-11-27",
      image: "/images/porfolio.png",
      githubLink: "https://github.com/ibrahima98/portfolio.git",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "E-commerce Laravel",
      description: "Plateforme e-commerce complète avec paiement Stripe et gestion des commandes.",
      longDescription: "Solution e-commerce développée avec Laravel, intégrant Stripe pour les paiements, gestion des produits et du panier en temps réel.",
      date: "2021-12-27",
      image: "/images/fruits.png",
      githubLink: "https://github.com/ibrahima98/Ferme.git",
      technologies: ["Laravel", "PHP", "MySQL", "Stripe", "Livewire", "TailwindCSS"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "Détection de Maladies par CNN",
      description: "Modèle de Deep Learning (CNN) développé avec TensorFlow et Scikit-learn pour la détection de deux types de maladies sur les cultures d'haricot.",
      longDescription: "Solution d'IA pour l'analyse automatique des maladies des plantes via l'analyse d'images.",
      date: "2024-10-28",
      image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?q=80&w=2940&auto=format&fit=crop",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "CNN", "OpenCV", "Mobile App"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "Numérisation État Civil",
      description: "Application Java pour la numérisation et la gestion des documents d'état civil.",
      longDescription: "Solution complète de numérisation des documents d'état civil.",
      date: "2021-07-10",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2940&auto=format&fit=crop",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "API REST Prompts",
      description: "API REST Flask pour la gestion de prompts avec système de votes et notations.",
      longDescription: "API robuste avec authentification JWT, gestion des rôles, système de votes et états complexes des prompts.",
      date: "2024-07-15",
      image: "/images/api.png",
      githubLink: "https://github.com/ibrahima98/api-gestion-prompt.git",
      technologies: ["Python", "Flask", "PostgreSQL", "JWT", "REST API", "UML"],
      
      email: "papalybn@gmail.com"
    },
    {
      titre: "Moteur de Recherche ELK",
      description: "Moteur de recherche spécialisé utilisant la stack ELK pour l'analyse des tendances de prix.",
      longDescription: "Solution de web scraping et d'analyse de données avec visualisation des tendances via Elasticsearch et Kibana.",
      date: "2024-09-01",
      image: "/images/elk.png",
      technologies: ["Python", "Elasticsearch", "Kibana", "Web Scraping", "Data Analysis"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "Data Warehouse Commercial",
      description: "Conception et implémentation d'un entrepôt de données pour l'analyse des ventes multi-magasins.",
      longDescription: "Architecture complète d'un Data Warehouse avec modélisation des données et génération de jeux de test.",
      date: "2024-08-19",
      image: "/images/datawharehouse.png",
      technologies: ["SQL", "PostgreSQL", "Data Modeling", "ETL", "Data Warehouse"],
     
      email: "papalybn@gmail.com"
    },
    {
      titre: "Gestion de Bibliothèque",
      description: "Application Java orientée objet pour gérer une bibliothèque, intégrant des fonctionnalités de prêt, de retour et de gestion des ressources.",
      longDescription: "Un système de gestion de bibliothèque conçu avec des concepts avancés de programmation orientée objet. Le projet inclut des interfaces, des classes abstraites, et des relations entre objets pour une architecture modulaire et extensible.",
      date: "2022-04-21",
      image: "/images/bib.png",
      githubLink: "https://github.com/ibrahima98/Bibliotheque.git",
      technologies: [
        "Java",
        "POO",
        "Interfaces",
        "Collections Framework",
        "JUnit"
      ],
  
      "email": "papalybn@gmail.com"
    },
    {
      titre: "Système de Gestion de Stock",
      description:  "Plateforme open source pour la gestion des stocks, améliorée avec des fonctionnalités personnalisées.",
      longDescription:"Un système de gestion de stock développé en PHP, permettant de suivre les inventaires",
      date: "2022-03-19",

      image: "/images/bib.png",
      githubLink: "https://github.com/ibrahima98/InventorySystem.git",
      technologies: [
         "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery"
      ],
  
      "email": "papalybn@gmail.com"
    },
    
    
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

        {/* Section Projets */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Mes Projets</h2>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredProjets.map((projet) => (
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
                    {/* Image avec lien GitHub */}
                    <div className="relative overflow-hidden group">
                      <a href={projet.githubLink} target="_blank" rel="noopener noreferrer">
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-white text-sm font-light">
                          {projet.longDescription}
                        </p>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-4 space-y-3">
                      {/* Titre avec lien GitHub */}
                      <div className="space-y-1">
                        <a href={projet.githubLink} target="_blank" rel="noopener noreferrer">
                          <h3 className="font-medium text-lg leading-tight hover:text-primary transition">
                            {projet.titre}
                          </h3>
                        </a>
                         {/* Date */}
                        <div className="text-xs text-muted-foreground">
                          <p>Ajouté le : {new Date(projet.date).toLocaleDateString()}</p>
                        </div>
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

                      

                      {/* Bouton */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2 text-xs font-normal"
                        onClick={() => handleContactClick(projet)}
                      >
                        <Mail className="h-3 w-3 mr-1.5" />
                        Me contacter
                      </Button>
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