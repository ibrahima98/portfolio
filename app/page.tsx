import { CertificationCard } from "@/components/certification-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Brain, Briefcase, Code, Database, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const competences = [
    {
      categorie: "Développement",
      icon: Code,
      items: ["Java", "PHP", "JavaScript", "TypeScript","Python", "Flask", "React","Angular", "Node.js","React Native", "Nextjs" ]
    },
    {
      categorie: "Ingénierie des Données",
      icon: Database,
      items: ["ETL", "SQL", "NoSQL","Hadoop", "Spark","Pipelines de Données","APIs", "AWS", "Docker", "Linux" ,"Git", "CI/CD"]
    },
    {
      categorie: "Science des Données & IA",
      icon: Brain,
      items: ["Machine Learning", "Deep Learning", "AI Generative", "Scikit-learn", "TensorFlow", "PyTorch", "Analyse de Données"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section Modernisée */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-foreground">LY Ibrahima</span>
              </h1>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-lg text-muted-foreground">
                  <span className="font-medium">Développeur Full Stack & Data Scientist</span>
                </div>
                
                <div className="flex items-center gap-3 justify-center lg:justify-start text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:papalybn@gmail.com" className="hover:text-primary transition-colors">
                    papalybn@gmail.com
                  </a>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4" />
                  <span>Dakar, Sénégal</span>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
                Je fais le pont entre le développement web et la science des données, 
                créant des solutions intelligentes pour des problèmes complexes.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex gap-4 sm:gap-6">
                  <Button 
                    asChild 
                    size="lg" 
                    className="rounded-full px-8 group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <Link href="/projets" className="flex items-center">
                      Projets
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="rounded-full px-8 group hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/blog" className="flex items-center">
                      Blog
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  >
                    <Link href="https://github.com/ibrahima98/">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  >
                    <Link href="https://www.linkedin.com/in/ibrahima-ly-20196b1a7/">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 animate-fade-in">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl opacity-50 animate-glow" />
              <img
                src="/images/ibrahimaly.jpeg" 
                alt="Photo de profil"
                className="relative rounded-full object-cover w-full h-full p-2 animate-float"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expertise Technique</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un ensemble de compétences diversifiées pour répondre aux défis technologiques modernes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competences.map((competence) => (
              <Card key={competence.categorie} className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <competence.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{competence.categorie}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {competence.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="secondary" 
                        className="bg-primary/5 hover:bg-primary/10 text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mon Parcours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une progression constante dans le développement et la data science
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expérience Pro */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Expérience Professionnelle</h3>
              </div>
              
              <div className="space-y-12">
                {/* Chaque expérience */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développeur Full Stack | Data Scientist</h4>
                  <p className="text-sm text-muted-foreground mb-4">2024/08 | Dakar, Sénégal • Co-fondateur Sahim Group</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Mise en place de l'architecture complète du projet Auto Map, incluant le frontend et le backend.</li>
                    <li>Développement d'API RESTful avec Flask pour gérer les utilisateurs, les avis et les données des auto-écoles.</li>
                    <li>Implémentation frontend avec Next.js et TypeScript, garantissant une expérience utilisateur fluide et réactive.</li>
                    <li>Configuration de pipelines CI/CD avec GitHub Actions et Docker, pour automatiser les tests et le déploiement continu.</li>
                    <li>Conception et intégration d'un système de recommandation basé sur le machine learning, optimisant la recherche et augmentant l'engagement utilisateur.</li>
                    <li>Participation à la planification stratégique pour la mise en production prévue en 2025.</li>
                  </ul>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Intégrateur de Données</h4>
                  <p className="text-sm text-muted-foreground mb-4">2024/03 – 2024/03 | Dakar, Sénégal • Coalition Diomaye Président 2024</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Collecte et gestion des données électorales provenant de divers bureaux de vote</li>
                    <li>Saisie et suivi précis des données sur Google Sheets pour assurer l'intégrité</li>
                    <li>Collaboration étroite avec les membres de l'équipe pour garantir l'exactitude des données</li>
                  </ul>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développeur Full Stack</h4>
                  <p className="text-sm text-muted-foreground mb-4">2022/08 – 2023/02 | Dakar, Senegal • BLS Sénégal (MAKKITY)</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Analyse des exigences et modélisation de la base de données</li>
                    <li>Développement d'applications web avec PHP et JavaScript</li>
                    <li>Implémentation de fonctionnalités de sécurité avancées</li>
                    <li>Réalisation de tests unitaires et de performance</li>
                    <li>Optimisation des performances et de l'expérience utilisateur</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Formation</h3>
              </div>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développement Data</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Février 2024 - Septembre 2024 • Orange Digital Center (Sonatel Academy)
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Formation intensive en Data Science et Développement</li>
                    <li>Projets pratiques et cas d'usage réels</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développement Full Stack Java</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    2022 - 2023 • Université numérique Cheikh Hamidou Kane (Programme Force-N)
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Développement Java Spring Boot et Angular</li>
                    <li>Architecture Microservices et bonnes pratiques</li>
                    <li>Patterns de conception et Clean Code</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Programmation | Développement</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    2019 - 2022 • Groupe Sup'info Dakar
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Formation complète en développement logiciel</li>
                    <li>Spécialisation en programmation web </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              <div className="space-y-8">
                <CertificationCard
                  title="DevOps on AWS"
                  date="2024"
                  organization="Coursera"
                  imagePath="/images/devops.png"
                  skills={[
                    "Infrastructure as Code et automatisation",
                    "CI/CD sur AWS",
                    "Gestion des conteneurs et orchestration"
                  ]}
                />

                <CertificationCard
                  title="CodinGame Java Certification"
                  date="2023"
                  organization="CodinGame"
                  imagePath="/images/java.png"
                  skills={[
                    "Certification en développement Java",
                    "Résolution de problèmes algorithmiques complexes",
                    "Maîtrise des concepts avancés de Java",
                    "Optimisation et performance du code"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



