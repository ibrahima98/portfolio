import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Code, Database } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const competences = [
    {
      categorie: "Développement",
      icon: Code,
      items: ["Java", "PHP", "JavaScript", "Python", "Flask", "React", "Node.js","React Native", "Nextjs" ]
    },
    {
      categorie: "Ingénierie des Données",
      icon: Database,
      items: ["ETL", "SQL", "NoSQL","Hadoop", "Spark","Power automate" ,"Saleforces","Power BI","Pipelines de Données","APIs", "AWS", "Docker", "Linux" ,"Git", "CI/CD"]
    },
    {
      categorie: "Science des Données & IA",
      icon: Brain,
      items: ["Machine Learning", "Deep Learning", "AI Generative", "Scikit-learn", "TensorFlow", "PyTorch", "Analyse de Données"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Première section - Photo et Nom */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/20 animate-pulse" />
                <img
                  src="/images/ibrahimaly.jpeg" 
                  alt="Photo de profil"
                  className="relative rounded-full object-cover w-full h-full p-2 object-[center_10%]"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4 text-primary">
                LY Ibrahima
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Adresse :</span> HLM Rufisque 
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email :</span> papalybn@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-foreground">Téléphone :</span> +221 78 520 40 78
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deuxième section - Titre et Description */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 blur-sm opacity-50"/>
              <span className="relative text-primary">
                Développeur Full Stack & Data Scientist
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Je fais le pont entre le développement web et la science des données, créant des solutions intelligentes pour des problèmes complexes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projets">
                Voir les Projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Me Contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="parcours" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Formation</h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Développement Data</h4>
                  <p className="text-sm text-muted-foreground">Février 2024 - Septembre2024</p>
                  <p className="mt-2">Orange Digital Center (Sonatel Academy)</p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Développement Full Stack Java</h4>
                  <p className="text-sm text-muted-foreground">2022 - 2023</p>
                  <p className="mt-2">Université numérique Cheikh Hamidou Kane (UNCK) (Programme Force-N)</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Programmation | Développement </h4>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                  <p className="mt-2">Groupe Sup'info Dakar</p>
                </div>
              </div>
            </div>

            {/* Expérience Professionnelle */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Expérience Professionnelle</h3>
              <div className="space-y-8">

              <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Développeur Full Stack | Data Scientist </h4>
                  <p className="text-sm text-muted-foreground">2024/09 | Dakar, Sénégal</p>
                  <p className="mt-2">Co-fondateur Sahim Group</p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground">
                    <li>Mise en place de l’architecture complète du projet Auto Map, incluant le frontend et le backend.
                    </li>
                    <li>Développement d’API RESTful avec Flask pour gérer les utilisateurs, les avis et les données des auto-écoles.
                    </li>
                    <li>Implémentation frontend avec Next.js et TypeScript, garantissant une expérience utilisateur fluide et réactive.</li>
                    <li>Configuration de pipelines CI/CD avec GitHub Actions et Docker, pour automatiser les tests et le déploiement continu.</li>
                    <li>Conception et intégration d’un système de recommandation basé sur le machine learning, optimisant la recherche et augmentant l’engagement utilisateur.</li>
                    <li>Participation à la planification stratégique pour la mise en production prévue en 2025.
                    </li>
                  
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Intégrateur de Données</h4>
                  <p className="text-sm text-muted-foreground">2024/03 – 2024/03 | Dakar, Sénégal</p>
                  <p className="mt-2">Coalition Diomaye Président 2024</p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground">
                    <li>Collecte et gestion des données électorales provenant de divers bureaux de vote</li>
                    <li>Saisie et suivi précis des données sur Google Sheets pour assurer leur intégrité et leur accessibilité</li>
                    <li>Collaboration étroite avec les membres de l'équipe pour garantir l'exactitude et la fiabilité des données</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold">Développeur Full Stack </h4>
                  <p className="text-sm text-muted-foreground">2022/08 – 2023/02 | Dakar, Senegal</p>
                  <p className="mt-2">BLS Sénégal (MAKKITY)</p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground">
                    <li>Analyses des éxigences</li>
                    <li>Modélisations base de Données,</li>
                    <li>Conception et développement d'applications web</li>
                    <li>Mise en place de solutions de sécurité</li>
                    <li>Tests unitaires et de performance</li>

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Expertise Technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competences.map((competence) => (
              <Card key={competence.categorie} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <competence.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{competence.categorie}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {competence.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}



