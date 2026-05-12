import { CertificationCard } from "@/components/certification-card";
import { SkillsSlider } from "@/components/skills-slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Cloud,
  Code,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Classes partagées pour les blocs sous-projets (CBG, BPMN, Fanaye, Fripperie, At-Taqwa). */
const subProjectCard =
  "rounded-xl border border-border/60 bg-muted/30 dark:bg-muted/20 p-4 sm:p-5";
const subProjectCardInner = "border-l-2 border-primary/40 pl-3";

export default function Home() {
  const competences = [
    {
      categorie: "Développement Full Stack",
      icon: "Code",
      items: [
        "Python",
        "Java",
        "TypeScript",
        "SQL",
        "NoSQL",
        "Spring Boot",
        "Angular",
        "React",
        "Next.js",
        "React Native",
        "Flask",
        "REST",
        "OAuth",
        "jBPM",
        "BPMN",
        "SEO",
        "Performance web"
      ]
    },
    {
      categorie: "Data Science & Analyse",
      icon: "BarChart3",
      items: [
        "Pandas",
        "Matplotlib",
        "Hadoop HDFS",
        "CNN",
        "Machine Learning",
        "IA générative",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn"
      ]
    },
    {
      categorie: "DevOps & Cloud",
      icon: "Cloud",
      items: ["Docker", "GitHub Actions", "CI/CD", "Vercel", "Expo", "Git"]
    },
    {
      categorie: "Réseaux & Systèmes",
      icon: "Network",
      items: ["Linux", "Windows", "Sécurité", "Gestion réseau"]
    }
  ];

  const competenceIcons = {
    Code,
    BarChart3,
    Cloud,
    Network
  } as const;

  const certificationsAtos = [
    {
      title: "Cybersécurité",
      pdfPath: "/certificates/atos-cybersecurity.pdf",
      skills: ["Sensibilisation cybersécurité", "Culture sécurité Atos"],
    },
    {
      title: "Code d'éthique",
      pdfPath: "/certificates/atos-code-ethics.pdf",
      skills: ["Éthique professionnelle", "Conduite attendue"],
    },
    {
      title: "Protection des données",
      pdfPath: "/certificates/atos-data-protection-training.pdf",
      skills: ["Données personnelles", "Conformité & bonnes pratiques"],
    },
    {
      title: "Environnement & SME",
      pdfPath: "/certificates/atos-environmental-ems.pdf",
      skills: ["Environnement", "Système de management"],
    },
    {
      title: "Intégrité financière",
      pdfPath: "/certificates/atos-financial-integrity.pdf",
      skills: ["Gouvernance", "Règles d'intégrité"],
    },
    {
      title: "Human firewall",
      pdfPath: "/certificates/atos-human-firewall.pdf",
      skills: ["Ingénierie sociale", "Vigilance au quotidien"],
    },
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
                
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-x-3 gap-y-2 justify-center lg:justify-start text-muted-foreground text-sm sm:text-base">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0" />
                    <a href="mailto:papalybn@gmail.com" className="hover:text-primary transition-colors">
                      papalybn@gmail.com
                    </a>
                  </span>
                  <span className="hidden sm:inline text-muted-foreground/60">•</span>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" />
                    <a href="tel:+221785204078" className="hover:text-primary transition-colors">
                      +221 78 520 40 78
                    </a>
                  </span>
                  <span className="hidden sm:inline text-muted-foreground/60">•</span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>HLM, Rufisque — Sénégal</span>
                  </span>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
                Développeur full stack junior passionné par la conception d&apos;applications web et de solutions logicielles,
                avec une solide expérience sur <span className="text-foreground/90 font-medium">Java</span>,{" "}
                <span className="text-foreground/90 font-medium">Spring Boot</span> et{" "}
                <span className="text-foreground/90 font-medium">Angular</span> à travers des projets professionnels et clients.
                Rigoureux et orienté apprentissage continu, je complète ce profil par la data et l&apos;IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex gap-4 sm:gap-6">
                  <Button 
                    asChild 
                    size="lg" 
                    className="rounded-full px-8 group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <Link href="#parcours" className="flex items-center">
                      Parcours
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button 
                    asChild 
                    size="lg" 
                    className="rounded-full px-8 group hover:shadow-lg transition-all duration-300"
                  >
                    <Link 
                      href="/blog" 
                      prefetch
                      className="flex items-center"
                    >
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
              <Image
                src="/images/ibrahimaly.jpeg"
                alt="Photo de profil"
                width={384}
                height={384}
                priority
                className="relative rounded-full object-cover w-full h-full p-2 animate-float"
                style={{ objectPosition: 'center 20%' }}
                quality={85}
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
          
          {/* Version mobile avec Swiper */}
          <div className="block md:hidden">
            <SkillsSlider competences={competences} />
          </div>

          {/* Version desktop avec la grille */}
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {competences.map((competence) => {
              const CategoryIcon =
                competenceIcons[competence.icon as keyof typeof competenceIcons] ?? Code;
              return (
              <Card 
                key={competence.categorie}
                className="relative bg-background/50 backdrop-blur-sm 
                  border-2 border-violet-500/10 dark:border-violet-500/20
                  hover:border-violet-500/30 dark:hover:border-violet-500/40 
                  transition-all duration-300 
                  dark:bg-black/20 
                  shadow-sm hover:shadow-lg
                  hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 backdrop-blur-md">
                      <CategoryIcon className="h-6 w-6 text-violet-500 dark:text-violet-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground/90">{competence.categorie}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {competence.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-muted/80 
                          dark:bg-violet-500/5 dark:hover:bg-violet-500/10
                          text-foreground/80 hover:text-foreground 
                          transition-colors backdrop-blur-sm
                          border border-violet-500/10 dark:border-violet-500/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );})}
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section id="parcours" className="py-24 relative overflow-hidden scroll-mt-20">
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
                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développeur Full Stack</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    2025/04 – présent | Dakar •{" "}
                    <a
                      href="https://atos.net/en/africa"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Atos Sénégal
                    </a>
                  </p>
                  <div className="space-y-4">
                    <div className={subProjectCard}>
                      <div className={subProjectCardInner}>
                        <p className="text-sm font-semibold text-foreground mb-1">Gestion des prestataires médicaux — CBG</p>
                        <p className="text-xs text-muted-foreground mb-2">Spring Boot, Angular</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Projet mené de bout en bout : modélisation métier et données, conception fonctionnelle et développement
                          full stack des modules. La <span className="text-foreground font-medium">mise en production</span>{" "}
                          et le déploiement sont du ressort de l&apos;équipe DevOps / infrastructure.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          <li>
                            Objectif principal : <span className="text-foreground font-medium">lutter contre la fraude</span>{" "}
                            dans la prise en charge médicale des agents — traçabilité des actes, des dépenses et des circuits
                            prescriptifs.
                          </li>
                          <li>
                            Périmètre prestataires : <span className="text-foreground font-medium">médecins et pharmacies
                            partenaires</span>.
                          </li>
                          <li>
                            Génération et gestion de <span className="text-foreground font-medium">QR codes</span> pour
                            identifier les parcours de soin et sécuriser les accès aux informations médicales.
                          </li>
                          <li>
                            <span className="text-foreground font-medium">Consultation patient</span> : accès au dossier,
                            historique et suivi ; côté <span className="text-foreground font-medium">médecin</span>, prise en
                            charge via <span className="text-foreground font-medium">scan du QR code</span> pour valider
                            l&apos;identité et le contexte de la consultation.
                          </li>
                          <li>
                            <span className="text-foreground font-medium">Ordonnance numérique</span> : prescription de
                            médicaments, suivi des prescriptions et lien avec le circuit pharmaceutique partenaire.
                          </li>
                          <li>
                            Suivi des dépenses médicales des agents et mécanismes de contrôle renforcés pour limiter les abus.
                          </li>
                          <li>Centralisation et sécurisation des données des prestataires et des parcours de soin.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={subProjectCard}>
                      <div className={subProjectCardInner}>
                        <p className="text-sm font-semibold text-foreground mb-1">Atos BPMN</p>
                        <p className="text-xs text-muted-foreground mb-2">jBPM, BPMN, Angular</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Contribution à une <span className="text-foreground font-medium">solution BPM industrialisable</span>{" "}
                          : pensée pour être <span className="text-foreground font-medium">réutilisable et déployable</span>{" "}
                          dans d&apos;autres structures (banques, grandes entreprises, administrations, etc.) afin de piloter
                          des <span className="text-foreground font-medium">workflows métiers complexes</span> avec les
                          mêmes briques techniques.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          <li>
                            Conception et modélisation BPMN dans jBPM pour les ordres de mission nationaux et internationaux,
                            avec des patterns applicables à d&apos;autres cas d&apos;usage clients.
                          </li>
                          <li>
                            Workflows de validation multi-acteurs (chefs de service, managers, contrôle budgétaire, RH,
                            logistique) — modèle transposable à d&apos;autres circuits d&apos;approbation lourds.
                          </li>
                          <li>
                            Sous-processus jBPM indépendants et réutilisables ; intégration Angular — KIE Server pour
                            l&apos;exécution dynamique des processus et une expérience utilisateur homogène.
                          </li>
                          <li>
                            Synchronisation des formulaires Angular avec les variables de processus, pour accélérer
                            l&apos;industrialisation et la vente de la solution sur d&apos;autres verticales.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2 leading-snug">
                    <span className="block">Prestations de services</span>
                    <span className="block">Freelance</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Depuis 2024 • Dakar
                  </p>

                  <div className="space-y-4">
                    <div className={subProjectCard}>
                      <div className={subProjectCardInner}>
                        <p className="text-sm font-semibold text-foreground mb-1">Fanaye Prestataire de Service</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Temps partiel — maintenance de photocopieurs, installation d&apos;imprimantes, systèmes
                          d&apos;exploitation et assistance utilisateur.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-foreground mb-3 mt-2">
                      Développement web &amp; mobile
                    </p>
                    <div className={subProjectCard}>
                      <div className={subProjectCardInner}>
                        <p className="text-sm font-semibold text-foreground mb-1">E-commerce — Fripperie Sénégal</p>
                        <p className="text-sm text-muted-foreground mb-2">Août – décembre 2025</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                          Client final obtenu par mise en relation du gérant de Fanaye Prestataire de Service.
                        </p>
                        <a
                          href="https://fripperiesenegal.com/"
                          className="text-sm text-primary hover:underline mb-2 inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          fripperiesenegal.com
                        </a>
                        <p className="text-xs text-muted-foreground mb-2">Next.js, React, Prisma, Vercel</p>
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          <li>Développement complet du site : authentification, catalogue, panier, recherche et SEO.</li>
                          <li>Livraison d&apos;un site fonctionnel ; le client gère désormais l&apos;ajout des produits.</li>
                        </ul>
                      </div>
                    </div>

                    <div className={subProjectCard}>
                      <div className={subProjectCardInner}>
                        <p className="text-sm font-semibold text-foreground mb-1">Application mobile — At-Taqwa</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Module de paiement (socle) — décembre 2024 · Application mobile (Google Play) — janvier 2026
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                          <li>Application éducative sur les erreurs de prière ; intégration d&apos;un système de paiement (version premium).</li>
                          <li>Déploiement sur iOS et Android.</li>
                        </ul>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.attaqwaAly.app&pcampaignid=web_share"
                          className="text-sm text-primary hover:underline mt-3 inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Play — At-Taqwa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Bénévole — saisie et consolidation des PV (Google Sheets)</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    2024/03 | Keur Massar, Dakar • Bénévolat — Coalition Diomaye, campagne présidentielle 2024
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>
                      Périmètre Keur Massar : les agents de terrain couvrent l&apos;ensemble des bureaux de vote et
                      m&apos;envoyent les photographies des procès-verbaux (PV).
                    </li>
                    <li>
                      Saisie structurée des informations dans Google Sheets à partir des PV reçus, pour un suivi fiable
                      des résultats.
                    </li>
                    <li>
                      Mise à disposition des tableaux consolidés pour la direction de campagne (top management), afin de
                      visualiser et suivre l&apos;évolution des données.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Développeur Full Stack</h4>
                  <p className="text-sm text-muted-foreground mb-4">2022/08 – 2023/02 | Dakar • Makkity S.A</p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Développement d&apos;une application web avec Wappler.</li>
                    <li>Sécurisation des API (JWT) et gestion des permissions.</li>
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
                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Certificat — Développement Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    2024/02 – 2024/11 • Dakar •{" "}
                    <a
                      href="https://orangedigitalcenter.sn/competences"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Orange Digital Center — Sonatel Academy
                    </a>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Formation intensive et sélective (10 mois) : Python pour la data, machine learning, big data, visualisation, APIs, bases SQL / NoSQL.</li>
                    <li>
                      Projet de soutenance : détection de maladies des plantes par vision par ordinateur (CNN, TensorFlow, PyTorch)
                      et application mobile de recommandations agricoles.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">Certificat Force-N — Développement logiciel Java</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    2023/04 – 2024/06 • Dakar • Université numérique Cheikh Hamidou Kane (UN-CHK), programme Force-N
                  </p>
                  <p className="text-sm mb-3">
                    <a
                      href="https://force-n.sn/certificat/developpement-logiciel-java"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fiche certification Java — Force-N
                    </a>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Pratique du développement full stack Java : Spring Boot, Angular et MySQL.</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
                  <h4 className="font-semibold text-lg mb-2">
                    Bachelor Computer Science — Licence professionnelle (Sup&apos;Info Sénégal)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    2019/11 – 2022/08 • Dakar
                  </p>
                  <p className="text-sm mb-3">
                    <a
                      href="https://supinfo.sn/nos-programmes/licence-professionnelle/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Programme Sup&apos;Info — Licence professionnelle
                    </a>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Programmation avancée (Java, Python, C++), développement web et mobile (JavaScript, Angular, React Native).</li>
                    <li>Bases de données (SQL, Oracle, NoSQL), réseaux et sécurité, algorithmes, big data.</li>
                    <li>Projet de fin d&apos;études : application de gestion scolaire.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8 mt-12 lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-violet-500/10 dark:bg-violet-500/5">
                  <Award className="h-6 w-6 text-violet-500 dark:text-violet-400" />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-foreground/90">Formations internes — Atos</h4>
                <p className="text-sm text-muted-foreground max-w-3xl">
                  Certificats PDF issus des parcours de sensibilisation et de conformité chez Atos. Cliquez sur une carte pour
                  consulter le document.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
                {certificationsAtos.map((cert) => (
                  <CertificationCard
                    key={cert.pdfPath}
                    title={cert.title}
                    date="2025"
                    organization="Atos"
                    pdfPath={cert.pdfPath}
                    skills={cert.skills}
                    showTimeline={false}
                  />
                ))}
              </div>

              <h4 className="text-lg font-semibold text-foreground/90 mb-6">Autres certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CertificationCard
                  title="DevOps on AWS"
                  date="2024"
                  organization="Coursera"
                  imagePath="/images/devops.png"
                  showTimeline={false}
                  skills={[
                    "Infrastructure as Code et automatisation",
                    "CI/CD sur AWS",
                    "Gestion des conteneurs et orchestration"
                  ]}
                />

                <CertificationCard
                  title="CodinGame Java Certification"
                  date="2024"
                  organization="CodinGame"
                  imagePath="/images/java.png"
                  showTimeline={false}
                  skills={[
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



