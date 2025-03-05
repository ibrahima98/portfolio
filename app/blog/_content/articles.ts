export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  image: string;
  readTime: string;
}

// Modifier la constante pour l'image par défaut de l'auteur
const DEFAULT_AUTHOR_IMAGE = "/images/ibrahimaly.jpeg#avatar"; // Ajouter un hash pour identifier que c'est un avatar

export const articles: Article[] = [
  {
    slug: "securite-gouvernance-donnees-senegal",
    title: "Sécurité et Gouvernance des Données au Sénégal",
    description: "À l'ère du numérique, la sécurité et la gouvernance des données sont devenues des enjeux majeurs pour le Sénégal. Entre protection des données personnelles et conformité réglementaire, le pays développe une approche stratégique pour garantir un écosystème numérique fiable et résilient.",
    date: "2024-11-20",
    image: "/images/gouvernance.webp",
    readTime: "15 min",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      bio: "Expert en sécurité des données et gouvernance numérique"
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-4 sm:space-y-6">
          <!-- Section 1: Cadre Réglementaire -->
          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                01
              </div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Cadre Réglementaire</h2>
            </div>

            <div class="grid gap-3 sm:gap-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Lois et Réglementations</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Loi sur la Protection des Données Personnelles</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Stratégie Nationale de Cybersécurité</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Normes de Conformité CDP</span>
                  </li>
                </ul>
              </div>

              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Organismes de Contrôle</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Commission de Protection des Données (CDP)</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Agence de Régulation des Télécoms (ARTP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Section 2: Mesures de Sécurité -->
          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                02
              </div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Mesures de Sécurité</h2>
            </div>

            <div class="grid gap-3 sm:gap-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Protection des Données</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm mb-2">Sécurité Technique</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Chiffrement des données</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Authentification forte</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm mb-2">Sécurité Organisationnelle</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Formation du personnel</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Procédures de contrôle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 3: Bonnes Pratiques -->
          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                03
              </div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Bonnes Pratiques</h2>
            </div>

            <div class="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Gouvernance</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Politique de classification des données</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Gestion des accès</span>
                  </li>
                </ul>
              </div>

              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Conformité</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Audits réguliers</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Documentation des processus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Conclusion -->
          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-6">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80">
              La sécurité et la gouvernance des données sont essentielles pour le développement 
              numérique du Sénégal. Avec un cadre réglementaire solide et des pratiques adaptées, 
              le pays construit un environnement numérique de confiance.
            </p>
          </div>
        </div>
      </article>
    `
  },
  {
    slug: "ia-analyse-predictive",
    title: "L'IA et l'Analyse Prédictive : Un Levier pour les Données au Sénégal",
    description: "Dans un contexte de transformation numérique accélérée, le Sénégal mise sur l'intelligence artificielle et l'analyse prédictive pour révolutionner sa gestion des données. Le New Deal Technologies 2034 place ces technologies au cœur de l'innovation et du développement économique du pays.",
    date: "2025-01-02",
    image: "/images/images.jpeg",
    readTime: "12 min",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      bio: "Data Scientist & Expert en IA"
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-6">
          <!-- Section 1: État des Lieux -->
          <section>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                01
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-foreground dark:text-white">État des Lieux de l'IA au Sénégal</h2>
            </div>

            <div class="space-y-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                  <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-3">Infrastructure Numérique</h3>
                  <ul class="space-y-2 text-sm text-foreground/80">
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Déploiement de data centers souverains</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Couverture 5G nationale d'ici 2028</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Réseau de fibre optique étendu</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                  <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-3">Couverture 5G</h3>
                  <ul class="space-y-2 text-sm text-foreground/80">
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Implémentation de la technologie 5G</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Expansion de la couverture 5G</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 2: Mesures de Sécurité -->
          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                02
              </div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Mesures de Sécurité</h2>
            </div>

            <div class="grid gap-3 sm:gap-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Protection des Données</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm mb-2">Sécurité Technique</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Chiffrement des données</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Authentification forte</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm mb-2">Sécurité Organisationnelle</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Formation du personnel</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Procédures de contrôle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 3: Bonnes Pratiques -->
          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                03
              </div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Bonnes Pratiques</h2>
            </div>

            <div class="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Gouvernance</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Politique de classification des données</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Gestion des accès</span>
                  </li>
                </ul>
              </div>

              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Conformité</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Audits réguliers</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Documentation des processus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Conclusion -->
          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-6">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-3">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80">
              L'IA et l'analyse prédictive représentent des leviers majeurs pour le développement 
              du Sénégal. Avec le New Deal Technologies 2034, le pays se donne les moyens de ses 
              ambitions pour devenir un leader africain dans le domaine du numérique.
            </p>
          </div>
        </div>
      </article>
    `
  },
  {
    slug: "microservices-gestion-donnees",
    title: "Microservices et Bonnes Pratiques : Optimiser la Gestion des Données",
    description: "Les architectures microservices transforment la façon dont nous concevons et gérons les applications modernes. Cette approche, adoptée par les géants du numérique, offre des avantages significatifs en termes de scalabilité, de résilience et de flexibilité technologique.",
    date: "2025-02-05",
    image: "/images/microservice.jpg",
    readTime: "10 min",
    author: {
      name: "LY Ibrahima",
      image: DEFAULT_AUTHOR_IMAGE,
      bio: "Architecte logiciel spécialisé en microservices"
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-6">
          <!-- Section 1: Fondamentaux -->
          <section>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                01
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-foreground dark:text-white">Fondamentaux des Microservices</h2>
            </div>

            <div class="space-y-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                  <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-3">Caractéristiques Clés</h3>
                  <ul class="space-y-2 text-sm text-foreground/80">
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Services autonomes et spécialisés</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Communication via API REST ou messagerie</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Base de données dédiée par service</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Déploiement indépendant</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                  <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-3">Avantages</h3>
                  <ul class="space-y-2 text-sm text-foreground/80">
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Scalabilité granulaire et ciblée</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Résilience accrue aux pannes</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Innovation technologique facilitée</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="text-primary">•</span>
                      <span>Maintenance et évolution simplifiées</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 2: Patterns -->
          <section>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                02
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-foreground dark:text-white">Patterns et Bonnes Pratiques</h2>
            </div>

            <div class="space-y-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-foreground dark:text-white mb-4">Design et Architecture</h3>
                
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm sm:text-base mb-2">Domain-Driven Design</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Identification des bounded contexts</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Modélisation du domaine métier</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Ubiquitous language</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-background/50 rounded-lg p-3">
                    <h4 class="font-medium text-primary text-sm sm:text-base mb-2">Patterns de Communication</h4>
                    <ul class="space-y-1.5 text-sm text-foreground/80">
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>API Gateway pour l'agrégation</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Event-driven architecture</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-primary">•</span>
                        <span>Circuit breaker pattern</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 3: Observabilité -->
          <section>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                03
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-foreground dark:text-white">Observabilité</h2>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h4 class="font-medium text-primary text-sm sm:text-base mb-3">Logging Centralisé</h4>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>ELK Stack</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Log Aggregation</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Log Analysis</span>
                  </li>
                </ul>
              </div>

              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h4 class="font-medium text-primary text-sm sm:text-base mb-3">Tracing Distribué</h4>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Jaeger</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Zipkin</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>OpenTelemetry</span>
                  </li>
                </ul>
              </div>

              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h4 class="font-medium text-primary text-sm sm:text-base mb-3">Métriques</h4>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Prometheus</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Grafana</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-primary">•</span>
                    <span>Custom Metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Conclusion -->
          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-6">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-3">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80">
              L'architecture microservices, bien que complexe à mettre en œuvre, offre des avantages 
              considérables en termes de scalabilité, de résilience et d'agilité.
            </p>
          </div>
        </div>
      </article>
    `
  }
]; 