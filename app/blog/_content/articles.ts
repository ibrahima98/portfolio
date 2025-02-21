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
  tags: string[];
}

// Modifier la constante pour l'image par défaut de l'auteur
const DEFAULT_AUTHOR_IMAGE = "/images/ibrahimaly.jpeg#avatar"; // Ajouter un hash pour identifier que c'est un avatar

export const articles: Article[] = [
  {
    slug: "securite-gouvernance-donnees",
    title: "Sécurité et Gouvernance des Données",
    description: "Plongez dans les aspects essentiels de la sécurité des données et de l'analyse prédictive. Découvrez les meilleures pratiques en matière de protection des données et comment l'analyse prédictive peut renforcer votre stratégie de sécurité.",
    content: `
      <article class="prose prose-lg max-w-none dark:prose-invert">
        <section>
          <h2>Introduction à la Gouvernance des Données</h2>
          <p>
            Dans l'ère numérique actuelle, la gouvernance et la sécurité des données sont devenues des enjeux majeurs pour les organisations au Sénégal.
            La transformation digitale rapide nécessite une approche structurée de la gestion des données, garantissant à la fois leur protection
            et leur utilisation efficace.
          </p>

          <blockquote class="border-l-4 border-primary pl-4 italic">
            "La gouvernance des données n'est pas seulement une question de conformité, c'est un avantage stratégique
            qui permet aux organisations de maximiser la valeur de leurs données tout en minimisant les risques."
          </blockquote>
        </section>

        <section>
          <h2>Cadre Réglementaire et Conformité</h2>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800 my-8 shadow-sm">
            <h3 class="text-blue-900 dark:text-blue-100 text-xl font-semibold mb-4">
              🔒 Réglementations Clés en Matière de Protection des Données
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-blue-900/40 p-4 rounded-lg">
                <h4 class="text-blue-800 dark:text-blue-200 font-medium mb-2">RGPD (GDPR)</h4>
                <p class="text-blue-700 dark:text-blue-300">
                  Même hors UE, cette réglementation impacte toute entreprise traitant des données de citoyens européens.
                  Points clés :
                </p>
                <ul class="mt-2 space-y-1 text-blue-600 dark:text-blue-200">
                  <li>• Consentement explicite requis</li>
                  <li>• Droit à l'oubli</li>
                  <li>• Protection des données dès la conception</li>
                </ul>
              </div>

              <div class="bg-white dark:bg-blue-900/40 p-4 rounded-lg">
                <h4 class="text-blue-800 dark:text-blue-200 font-medium mb-2">CDP (Loi sur la Protection des Données au Sénégal)</h4>
                <p class="text-blue-700 dark:text-blue-300">
                  Cadre national définissant les règles de protection des données personnelles.
                </p>
                <ul class="mt-2 space-y-1 text-blue-600 dark:text-blue-200">
                  <li>• Obligations des responsables de traitement</li>
                  <li>• Droits des personnes concernées</li>
                  <li>• Sanctions en cas de non-conformité</li>
                </ul>
              </div>
            </div>
          </div>

          <p>
            La conformité aux réglementations n'est pas optionnelle. Les organisations doivent mettre en place des
            processus rigoureux pour :
          </p>
          <ul>
            <li>Documenter le traitement des données personnelles</li>
            <li>Obtenir le consentement explicite des utilisateurs</li>
            <li>Garantir le droit à l'oubli et à la portabilité des données</li>
            <li>Mettre en place des mesures de sécurité adéquates</li>
          </ul>
        </section>

        <section>
          <h2>Stratégies de Protection des Données</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-lg mb-3">Protection Technique</h4>
              <ul>
                <li>Chiffrement des données sensibles</li>
                <li>Authentification multi-facteurs</li>
                <li>Segmentation des réseaux</li>
                <li>Surveillance continue</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-lg mb-3">Protection Organisationnelle</h4>
              <ul>
                <li>Formation des employés</li>
                <li>Politiques de sécurité</li>
                <li>Gestion des accès</li>
                <li>Plans de continuité</li>
              </ul>
            </div>
          </div>

          <div class="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-xl border border-amber-100 dark:border-amber-800 my-8 shadow-sm">
            <h3 class="text-amber-900 dark:text-amber-100 text-xl font-semibold mb-4">
              ⚠️ Bonnes Pratiques de Sécurité Essentielles
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-amber-900/40 p-6 rounded-lg">
                <h4 class="text-amber-800 dark:text-amber-200 font-medium mb-3">Protection Technique</h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <span class="text-amber-600 dark:text-amber-300 mr-2">🔐</span>
                    <div>
                      <strong class="text-amber-700 dark:text-amber-200">Chiffrement Avancé</strong>
                      <p class="text-amber-600 dark:text-amber-300 text-sm mt-1">
                        Utilisation d'algorithmes modernes (AES-256, RSA) pour les données sensibles
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-600 dark:text-amber-300 mr-2">🔑</span>
                    <div>
                      <strong class="text-amber-700 dark:text-amber-200">Authentification MFA</strong>
                      <p class="text-amber-600 dark:text-amber-300 text-sm mt-1">
                        Double facteur obligatoire pour les accès critiques
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="bg-white dark:bg-amber-900/40 p-6 rounded-lg">
                <h4 class="text-amber-800 dark:text-amber-200 font-medium mb-3">Protection Organisationnelle</h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <span class="text-amber-600 dark:text-amber-300 mr-2">👥</span>
                    <div>
                      <strong class="text-amber-700 dark:text-amber-200">Formation Continue</strong>
                      <p class="text-amber-600 dark:text-amber-300 text-sm mt-1">
                        Sessions régulières de sensibilisation à la sécurité
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-600 dark:text-amber-300 mr-2">📋</span>
                    <div>
                      <strong class="text-amber-700 dark:text-amber-200">Politiques Documentées</strong>
                      <p class="text-amber-600 dark:text-amber-300 text-sm mt-1">
                        Procédures claires et accessibles pour tous les employés
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Qualité et Intégrité des Données</h2>
          <p>
            La qualité des données est un aspect crucial de la gouvernance. Une donnée de qualité doit être :
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div class="text-center p-4 bg-gray-50 rounded">
              <h5 class="font-bold">Précise</h5>
              <p class="text-sm">Exacte et fiable</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded">
              <h5 class="font-bold">Complète</h5>
              <p class="text-sm">Sans données manquantes</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded">
              <h5 class="font-bold">Cohérente</h5>
              <p class="text-sm">Uniforme dans le système</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded">
              <h5 class="font-bold">À jour</h5>
              <p class="text-sm">Mise à jour régulièrement</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Gestion des Incidents</h2>
          <p>
            Malgré toutes les précautions, des incidents peuvent survenir. Un plan de réponse aux incidents doit inclure :
          </p>
          <div class="bg-red-50 dark:bg-slate-800/50 p-8 rounded-xl border border-red-100 dark:border-red-700/50 my-8 shadow-sm">
            <h3 class="text-red-900 dark:text-red-300 text-xl font-semibold mb-4 flex items-center">
              <span class="mr-2">🚨</span>
              Plan de Réponse aux Incidents
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h4 class="text-red-800 dark:text-red-300 font-medium mb-4">Étapes Critiques</h4>
                <ol class="mt-4 space-y-6">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900 rounded-full mr-4">
                      <span class="text-red-700 dark:text-red-300 font-semibold">1</span>
                    </div>
                    <div>
                      <h5 class="text-red-700 dark:text-red-300 font-medium">Détection</h5>
                      <p class="text-slate-700 dark:text-slate-300 mt-1">
                        Monitoring continu et alertes automatisées pour une détection rapide des incidents
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900 rounded-full mr-4">
                      <span class="text-red-700 dark:text-red-300 font-semibold">2</span>
                    </div>
                    <div>
                      <h5 class="text-red-700 dark:text-red-300 font-medium">Évaluation</h5>
                      <p class="text-slate-700 dark:text-slate-300 mt-1">
                        Analyse rapide de l'impact et de la gravité pour prioriser la réponse
                      </p>
                    </div>
                  </li>
                  <!-- Autres étapes similaires -->
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            La gouvernance et la sécurité des données sont des piliers essentiels de toute stratégie digitale moderne.
            Les organisations doivent adopter une approche holistique, combinant technologies, processus et formation
            pour protéger efficacement leurs actifs numériques.
          </p>
          
          <div class="bg-emerald-50 dark:bg-slate-800/50 p-8 rounded-xl border border-emerald-100 dark:border-emerald-700/50 my-8 shadow-sm">
            <h3 class="text-emerald-900 dark:text-emerald-300 text-xl font-semibold mb-6 flex items-center">
              <span class="mr-2">✅</span>
              Points Essentiels à Retenir
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h4 class="text-emerald-800 dark:text-emerald-300 font-medium mb-4">Conformité & Sécurité</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p class="text-slate-700 dark:text-slate-300">
                        La conformité réglementaire n'est pas une option mais une nécessité absolue
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p class="text-slate-700 dark:text-slate-300">
                        La sécurité doit être intégrée dès la conception des systèmes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h4 class="text-emerald-800 dark:text-emerald-300 font-medium mb-4">Formation & Qualité</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p class="text-slate-700 dark:text-slate-300">
                        La formation continue des équipes est un investissement crucial
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    `,
    date: "2024-11-25",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      bio: "Expert en sécurité des données et gouvernance IT"
    },
    image: "/images/gouvernance.webp",
    readTime: "10 min",
    tags: ["Sécurité", "Gouvernance", "Protection des données", "Conformité"]
  },
  {
    slug: "ia-analyse-predictive",
    title: "L'IA et l'Analyse Prédictive : Un Levier pour les Données au Sénégal",
    date: "2025-1-02",
    description: "Explorez comment l'intelligence artificielle transforme les données au Sénégal à travers des applications d'analyse prédictive et des solutions pour la prise de décision.",
    content: `
      <article class="prose prose-lg max-w-none dark:prose-invert">
        <div class="mb-8">
          <p class="text-lg">
            L'intelligence artificielle et l'analyse prédictive transforment la manière dont les organisations 
            au Sénégal exploitent leurs données pour prendre des décisions éclairées.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Applications Concrètes</h2>
          <ul class="list-disc pl-6 mb-6">
            <li>Prévision des tendances du marché</li>
            <li>Optimisation des processus</li>
            <li>Détection des anomalies</li>
            <li>Personnalisation des services</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Technologies Utilisées</h2>
          <ul class="list-disc pl-6 mb-6">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
          </ul>
        </section>
      </article>
    `,
    author: {
      name: "LY Ibrahima",
      image: DEFAULT_AUTHOR_IMAGE,
      bio: "Spécialiste en IA et analyse prédictive"
    },
    image: "/images/images.jpeg",
    readTime: "5 min",
    tags: ["IA", "Analyse Prédictive", "Machine Learning", "Innovation"]
  },
  {
    slug: "microservices-gestion-donnees",
    title: "Microservices et Bonnes Pratiques : Optimiser la Gestion des Données",
    date: "2025-01-08",
    description: "Découvrez comment l'architecture microservices peut révolutionner la gestion des données en apportant scalabilité, résilience, et flexibilité, et explorez les meilleures pratiques pour une implémentation réussie.",
    content: `
      <article class="prose prose-lg max-w-none dark:prose-invert">
        <div class="mb-8">
          <p class="text-lg">
            Les architectures microservices offrent une approche moderne pour gérer les données 
            de manière efficace et scalable. Découvrez les meilleures pratiques et les pièges à éviter.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Avantages des Microservices</h2>
          <ul class="list-disc pl-6 mb-6">
            <li>Scalabilité indépendante</li>
            <li>Isolation des données</li>
            <li>Flexibilité technologique</li>
            <li>Maintenance simplifiée</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Bonnes Pratiques</h2>
          <ul class="list-disc pl-6 mb-6">
            <li>Design orienté domaine</li>
            <li>Communication asynchrone</li>
            <li>Gestion de la cohérence</li>
            <li>Monitoring et observabilité</li>
          </ul>
        </section>
      </article>
    `,
    author: {
      name: "LY Ibrahima",
      image: DEFAULT_AUTHOR_IMAGE,
      bio: "Architecte logiciel spécialisé en microservices"
    },
    image: "/images/microservice.jpg",
    readTime: "5 min",
    tags: ["Microservices", "Architecture", "DevOps", "Cloud"]
  }
]; 