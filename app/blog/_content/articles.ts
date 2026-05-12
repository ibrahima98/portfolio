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

const DEFAULT_AUTHOR_IMAGE = "/images/ibrahimaly.jpeg#avatar";

export const articles: Article[] = [
  {
    slug: "securite-gouvernance-donnees-senegal",
    title: "Sécurité et gouvernance des données : repères pour les équipes produit",
    description:
      "Du cadre institutionnel sénégalais aux contrôles concrets côté application : définitions utiles, articulation réglementaire / technique, et une check-list opérationnelle pour les développeurs (chiffrement, journaux, minimisation, accès).",
    date: "2024-11-20",
    image: "/images/gouvernance.webp",
    readTime: "14 min",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      bio: "Développeur full-stack, intéressé par la conformité et la fiabilité des systèmes.",
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-6 sm:space-y-8">
          <section>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              La <strong>gouvernance des données</strong> décrit comment une organisation décide qui peut accéder à quelles informations, dans quel but, avec quels garde-fous et sur quels critères de qualité. La <strong>sécurité des données</strong> recouvre les moyens techniques et organisationnels pour préserver la confidentialité, l&apos;intégrité et la disponibilité. Pour une équipe qui livre du logiciel (web, API, data), ces deux notions se rejoignent : une belle politique sur le papier ne tient que si le code, l&apos;infrastructure et les processus humains vont dans le même sens.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Au Sénégal, la protection des personnes physiques à l&apos;égard des traitements de données à caractère personnel s&apos;inscrit dans un cadre public (loi n° 2008-12 du 25 janvier 2008, textes d&apos;application, rôle de la Commission de protection des données personnelles — CDP). L&apos;objectif de cet article n&apos;est pas de remplacer un avocat ou un DPO : il est de donner des <strong>repères techniques</strong> compréhensibles par des profils produit / développement, et de relier chaque bonne pratique à une idée de conformité et de réduction des risques.
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">01</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Concepts à maîtriser avant d&apos;architecturer</h2>
            </div>
            <div class="space-y-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Donnée personnelle</h3>
                <p class="text-sm text-foreground/80 leading-relaxed">
                  Toute information qui permet d&apos;identifier directement ou indirectement une personne (nom, e-mail, numéro de téléphone, adresse IP complète dans certains contextes, identifiant interne croisé avec d&apos;autres bases, etc.). En conception d&apos;API, se poser la question : « si cette valeur fuitait, pourrait-on reconstituer une personne ? »
                </p>
              </div>
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Finalité et minimisation</h3>
                <p class="text-sm text-foreground/80 leading-relaxed mb-3">
                  Chaque traitement doit avoir un <strong>but clair</strong> (facturation, support, personnalisation, statistiques agrégées, etc.). La <strong>minimisation</strong> impose de ne collecter que ce qui est nécessaire : par exemple, stocker la tranche d&apos;âge plutôt que la date de naissance complète si l&apos;usage métier le permet ; éviter les champs « au cas où » dans les formulaires Next.js ou les payloads mobiles.
                </p>
              </div>
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Responsable du traitement et sous-traitant</h3>
                <p class="text-sm text-foreground/80 leading-relaxed">
                  Le <strong>responsable</strong> détermine les finalités et les moyens. Le <strong>sous-traitant</strong> agit pour le compte du responsable (hébergeur, SaaS d&apos;e-mailing, outil d&apos;analytics). Côté développement, un contrat ou un registre des traitements doit refléter qui accède aux données en production, qui peut exporter des dumps SQL, et quels prestataires reçoivent des flux (webhooks, intégrations tierces).
                </p>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">02</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Cadre institutionnel et documentation interne</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              La CDP exerce des missions de conseil, d&apos;information et de contrôle liées aux traitements de données personnelles. Pour une startup ou une direction SI, l&apos;alignement passe souvent par un <strong>registre des traitements</strong> (quel système, quelles données, quelle base légale, quels délais de conservation, quels pays pour l&apos;hébergement), des clauses types avec les sous-traitants, et une procédure de réponse en cas d&apos;incident (violation de données).
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Côté télécommunications et services numériques, l&apos;ARTP intervient sur d&apos;autres dimensions (qualité de service, licences, etc.) : utile à connaître lorsque votre produit touche la couche réseau ou des agrégateurs de paiement mobile, mais la gouvernance « données personnelles » reste centrée sur le cadre CDP / loi 2008-12 dans la chaîne de conformité habituelle.
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">03</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Contrôles techniques concrets (stack web moderne)</h2>
            </div>
            <div class="grid gap-3 sm:gap-4">
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Transport et stockage</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2"><span class="text-primary">•</span><span><strong>TLS</strong> obligatoire entre client et serveur ; vérifier HSTS, certificats, et l&apos;absence de contenu mixte sur le front Next.js.</span></li>
                  <li class="flex gap-2"><span class="text-primary">•</span><span>Chiffrement au repos pour les bases gérées (disques, snapshots) et pour les secrets (vault, variables d&apos;environnement chiffrées en CI/CD, rotation des clés API).</span></li>
                  <li class="flex gap-2"><span class="text-primary">•</span><span>Mots de passe : algorithmes adaptatifs (argon2, bcrypt avec coût suffisant), jamais en clair ; tokens de session HttpOnly / Secure / SameSite selon le cas.</span></li>
                </ul>
              </div>
              <div class="bg-card/40 border border-border/50 rounded-lg p-4">
                <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Contrôle d&apos;accès et traçabilité</h3>
                <ul class="space-y-2 text-sm text-foreground/80">
                  <li class="flex gap-2"><span class="text-primary">•</span><span>Modèle <strong>least privilege</strong> pour les comptes cloud et les rôles base de données ; éviter un seul utilisateur « root » partagé.</span></li>
                  <li class="flex gap-2"><span class="text-primary">•</span><span>Journaux d&apos;audit sur les actions sensibles (connexion admin, export CSV, modification de rôles) avec corrélation d&apos;identité (qui, quand, quelle ressource).</span></li>
                  <li class="flex gap-2"><span class="text-primary">•</span><span>Pseudonymisation / anonymisation pour les environnements de test : jeux de données synthétiques ou masquage plutôt que copie brute de production.</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">04</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Analyse d&apos;impact, transferts et alignement international</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Lorsqu&apos;un traitement présente un risque élevé pour les droits des personnes (profilage à grande échelle, données de santé, surveillance systématique, etc.), une <strong>analyse d&apos;impact relative à la protection des données</strong> (AIPD, souvent appelée DPIA en anglais) structure la discussion : description du traitement, nécessité et proportionnalité, mesures pour adresser les risques résiduels. Même si votre équipe n&apos;est pas signataire légale, livrer un questionnaire produit + schéma de flux accélère la validation juridique.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les <strong>transferts transfrontaliers</strong> surviennent dès qu&apos;un sous-traitant héberge hors du territoire ou qu&apos;un CDN edge traite des journaux contenant des identifiants. Les mécanismes varient selon les textes applicables et les accords contractuels ; côté technique, documenter la <em>data residency</em> réelle (région du cluster, réplication multi-région, sauvegardes) évite les promesses marketing floues sur le site vitrine.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les cadres européens (RGPD) et africains en évolution ne sont pas identiques, mais les <strong>principes matériels</strong> se recoupent : licéité, loyauté, transparence, limitation des finalités, exactitude, intégrité et confidentialité. Pour un développeur, cela se traduit par des choix UX clairs (cases à cocher explicites plutôt que pré-cochées abusives), des APIs qui exposent uniquement les champs nécessaires, et des politiques de rétention implémentées dans le code (jobs planifiés, TTL sur les logs).
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">05</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">En pratique — avant mise en production</h2>
            </div>
            <div class="bg-muted/50 border border-border rounded-lg p-4 sm:p-5">
              <ul class="space-y-2 text-sm sm:text-base text-foreground/80 list-none">
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Cartographier les flux : navigateur → API Next.js → base → outils tiers (CRM, analytics).</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Vérifier les durées de conservation et les jobs de purge (cron, soft-delete vs hard-delete).</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Documenter les bases légales et les mentions d&apos;information utilisateur (formulaires, bannières cookies si applicable).</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Tester les rôles : un utilisateur standard ne doit pas accéder aux routes <code class="text-xs bg-muted px-1 rounded">/admin</code> ou aux identifiants d&apos;autrui via IDOR.</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Prévoir le process « violation » : qui alerte la CDP si nécessaire, qui contacte les personnes affectées, dans quels délais.</li>
              </ul>
            </div>
          </section>

          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-2">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Une gouvernance solide relie le juridique, l&apos;organisationnel et le technique. Pour une équipe qui travaille avec Next.js, des API et des pipelines de données, l&apos;effort rentable consiste à traduire les principes (minimisation, traçabilité, sous-traitance maîtrisée) en choix d&apos;architecture répétables : moins de surfaces d&apos;exposition, des journaux exploitables, et des données de test qui ne révèlent jamais la vie privée des utilisateurs réels.
            </p>
          </div>
        </div>
      </article>
    `,
  },
  {
    slug: "ia-analyse-predictive",
    title: "Analyse prédictive et apprentissage automatique : du concept au service",
    description:
      "Clarifier régression / classification, pipeline de données, évaluation et limites ; exemple orienté métier (scoring tabulaire) ; intégration dans une application (API, latence, monitoring) sans promesse magique d'« IA omnisciente ».",
    date: "2025-01-02",
    image: "/images/images.jpeg",
    readTime: "13 min",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      bio: "Développeur orienté data et expérience produit web.",
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-6 sm:space-y-8">
          <section>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              L&apos;<strong>analyse prédictive</strong> consiste à utiliser des données historiques pour estimer un événement futur ou une valeur inconnue : demande de billets, probabilité de churn, charge serveur, délai de livraison, etc. L&apos;<strong>apprentissage automatique</strong> (machine learning) désigne une famille de méthodes où le programme ajuste des paramètres à partir d&apos;exemples plutôt qu&apos;à partir de règles entièrement écrites à la main. Dans un contexte de transformation numérique, l&apos;enjeu n&apos;est pas d&apos;ajouter le mot « IA » sur une slide : c&apos;est de livrer un <strong>service mesurable</strong> (qualité prédictive, coût d&apos;inférence, fraîcheur des données, respect de la vie privée).
            </p>
            <blockquote class="border-l-4 border-primary bg-muted/40 pl-4 py-2 rounded-r-lg text-sm text-foreground/80 my-4">
              Règle utile : si vous pouvez résoudre le problème avec une règle métier simple et des agrégations SQL, commencez par là. Le ML apporte le plus quand le signal est riche, la fonction objectif claire, et les données disponibles en volume suffisant.
            </blockquote>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">01</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Supervisé : régression et classification</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              En <strong>apprentissage supervisé</strong>, chaque exemple d&apos;entraînement contient des <em>features</em> (variables d&apos;entrée) et une <em>étiquette</em> (la cible à prédire). Si la cible est numérique continue (montant, durée), on parle de <strong>régression</strong>. Si la cible est une catégorie (fraude / non fraude, segment client A/B/C), on parle de <strong>classification</strong>.
            </p>
            <div class="bg-card/40 border border-border/50 rounded-lg p-4 mb-4">
              <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Exemple structurant : scoring de désabonnement (churn)</h3>
              <p class="text-sm text-foreground/80 leading-relaxed mb-3">
                Supposons une application SaaS avec un historique d&apos;usage : fréquence de connexion, nombre de tickets support, consommation d&apos;API, ancienneté du compte, type d&apos;offre. La cible binaire vaut 1 si le client a résilié dans les 30 jours suivant la date d&apos;observation. Un modèle tabulaire (forêt aléatoire, gradient boosting type XGBoost/LightGBM, ou régression logistique bien calibrée) apprend des seuils et interactions non triviaux entre ces signaux.
              </p>
              <ul class="space-y-2 text-sm text-foreground/80">
                <li class="flex gap-2"><span class="text-primary">•</span><span><strong>Partitionnement</strong> : on sépare train / validation / test dans le temps (split temporel) pour éviter de « tricher » avec des informations futures.</span></li>
                <li class="flex gap-2"><span class="text-primary">•</span><span><strong>Métriques</strong> : au-delà de la simple accuracy (trompeuse si les classes sont déséquilibrées), suivre AUC-PR, recall sur la classe minoritaire, ou le coût métier associé aux faux positifs / faux négatifs.</span></li>
              </ul>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">02</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Données, fuites d&apos;information et biais</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Une <strong>fuite de données</strong> (data leakage) survient quand une variable d&apos;entrée contient indirectement la réponse : par exemple une colonne « date de résiliation » utilisée comme prédicteur alors qu&apos;elle n&apos;existe qu&apos;après l&apos;événement. Côté pipeline ETL, il faut figer la définition temporelle des features au moment de la prédiction (point-in-time correct).
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les <strong>biais</strong> peuvent refléter l&apos;histoire injuste des données (sous-représentation de certains groupes, politiques passées discriminatoires). Des outils d&apos;explicabilité (SHAP values, importance de permutation) aident à auditer le modèle, mais ne remplacent pas une revue métier et, le cas échéant, des contraintes légales sur les variables sensibles.
            </p>
            <div class="bg-card/40 border border-border/50 rounded-lg p-4">
              <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Calibration, probabilités et décision</h3>
              <p class="text-sm text-foreground/80 leading-relaxed mb-3">
                Un modèle peut avoir une bonne AUC tout en produisant des probabilités mal <strong>calibrées</strong> (0,7 ne veut pas dire « 70 % de chance » vérifiée empiriquement). Des techniques comme la régression isotonique ou le scaling Platt ajustent les scores pour que des agrégations et des seuils métier aient du sens — indispensable si la probabilité alimente un pricing, une file de priorisation ou une alerte frauduleuse.
              </p>
              <p class="text-sm text-foreground/80 leading-relaxed">
                La <strong>dérive des données</strong> (data drift) désigne un écart de distribution entre entraînement et production : changement de population, saisonnalité, bug de capteur, nouvelle version d&apos;application qui log différemment. Des tests statistiques simples (KS, PSI) ou des contrôles par cohorte sur des features clés permettent d&apos;alerter avant que la métrique métier ne s&apos;effondre.
              </p>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">03</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">MLOps minimal et intégration Next.js</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              <strong>MLOps</strong> désigne les pratiques pour versionner les données et les modèles, rejouer les entraînements, tracer les expériences et surveiller la dérive des performances en production. Concrètement : un identifiant de modèle (hash des hyperparamètres + jeu de données), des logs d&apos;inférence (latence, erreurs), et des alertes si la distribution des entrées change brusquement.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Dans une architecture web moderne, une route API Next.js (ou un backend dédié) peut exposer <code class="text-xs bg-muted px-1 rounded">POST /predict</code> qui charge un modèle sérialisé (ONNX, pickle sécurisé, endpoint vers un service Python). Points d&apos;attention : cold start sur les serverless functions, taille du bundle, authentification des appels batch vs interactifs, et <strong>rate limiting</strong> pour éviter l&apos;abus.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Un <strong>feature store</strong> (Feast, Tecton, solution maison sur warehouse) sert de couche partagée entre entraînement et serving : mêmes définitions de colonnes, historique de valeurs pour le point-in-time join, et réduction du risque où le notebook calcule une feature différente de la prod. Pour une équipe petite, un contrat de schéma (JSON Schema, protobuf) + tables SQL versionnées peut suffire tant que la discipline de revue est là.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Distinction utile : <strong>inférence batch</strong> (scores pré-calculés la nuit pour des millions de lignes, chargés en cache Redis ou en colonne base) vs <strong>online</strong> (latence millisecondes par clic). Le batch amortit le coût GPU/CPU ; l&apos;online impose des budgets d&apos;allocation mémoire stricts et souvent des modèles plus légers (distillation, quantification INT8).
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">04</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">En pratique — check-list projet</h2>
            </div>
            <div class="bg-muted/50 border border-border rounded-lg p-4 sm:p-5">
              <ul class="space-y-2 text-sm sm:text-base text-foreground/80 list-none">
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Définir la cible, l&apos;horizon temporel et le coût d&apos;une erreur de chaque type.</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Garantir reproductibilité (graines aléatoires, versions de librairies, snapshot des données d&apos;entraînement).</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Évaluer sur données non vues et sur fenêtres temporelles réalistes.</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Prévoir le fallback : que fait l&apos;UI si le service de scoring est indisponible ?</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Documenter les features et la politique de rétention associée aux journaux d&apos;inférence.</li>
              </ul>
            </div>
          </section>

          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-2">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed">
              L&apos;analyse prédictive utile combine statistiques, ingénierie des données et humilité opérationnelle : mesurer, itérer, et garder des filets de sécurité quand le modèle se trompe — ce qui arrivera. Pour un profil full-stack / data, la valeur ajoutée est souvent de faire le lien entre notebook d&apos;expérimentation et service fiable consommé par une interface Next.js ou une file d&apos;événements.
            </p>
          </div>
        </div>
      </article>
    `,
  },
  {
    slug: "microservices-gestion-donnees",
    title: "Microservices et données : patterns réalistes pour des équipes web",
    description:
      "Bounded contexts, cohérence des données, sagas, idempotence, API gateway et observabilité ; liens concrets avec Node.js / Next.js (BFF) et compromis face au monolithe modulaire.",
    date: "2025-02-05",
    image: "/images/microservice.jpg",
    readTime: "12 min",
    author: {
      name: "LY Ibrahima",
      image: DEFAULT_AUTHOR_IMAGE,
      bio: "Intérêt pour l'architecture distribuée et la qualité de service.",
    },
    content: `
      <article class="max-w-3xl mx-auto">
        <div class="space-y-6 sm:space-y-8">
          <section>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les <strong>microservices</strong> découpent une application en services déployables indépendamment, chacun aligné sur une capacité métier ou technique cohérente. L&apos;alternative la plus fréquente reste le <strong>monolithe modulaire</strong> : un seul dépôt et un seul processus, mais avec des frontières de code nettes. Le choix ne relève pas de la mode : il trade complexité réseau, cohérence transactionnelle et vélocité d&apos;équipe.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Ce texte se concentre sur la <strong>gestion des données</strong> en architecture décomposée : comment éviter qu&apos;un « tour de Babel » de bases ne rende les rapports impossibles, et quels patterns éprouvés aident à garder des invariants métier.
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">01</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">DDD et bounded contexts</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Le <strong>Domain-Driven Design</strong> propose de modéliser le logiciel à partir du langage métier (<em>ubiquitous language</em>) et de délimiter des <strong>bounded contexts</strong> : une zone où un terme (ex. « Commande ») a une signification stable. Un microservice idéal recouvre souvent un contexte : le service « facturation » ne partage pas sa table SQL avec le service « catalogue ».
            </p>
            <div class="bg-card/40 border border-border/50 rounded-lg p-4">
              <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">Base de données par service</h3>
              <p class="text-sm text-foreground/80 leading-relaxed">
                Chaque service possède son schéma ou sa base : cela évite le couplage caché via migrations globales, mais impose des <strong>transactions distribuées</strong> explicites quand une opération touche plusieurs agrégats. On préfère souvent la <strong>saga</strong> : une séquence d&apos;étapes locales avec des actions de compensation (annuler la réservation de stock si le paiement échoue).
              </p>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">02</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Communication, API Gateway, événements</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les appels <strong>synchrones HTTP/gRPC</strong> restent simples à raisonner mais créent des chaînes de latence (A appelle B qui appelle C). Un <strong>API Gateway</strong> centralise l&apos;authentification, le routage et parfois l&apos;agrégation de réponses pour le front. Les architectures <strong>orientées événements</strong> publient des faits (« PaiementAccepté ») sur une file (Kafka, RabbitMQ, NATS) : plusieurs services réagissent sans se connaître directement, au prix d&apos;une cohérence <em>eventually consistent</em>.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Le pattern <strong>circuit breaker</strong> (resilience4j, opossum côté Node) coupe temporairement les appels vers un voisin en panne pour préserver la capacité du système et éviter les cascades de timeouts.
            </p>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">03</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Idempotence et double livraison</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Les réseaux réessayent. Un même message peut arriver deux fois. Les handlers doivent être <strong>idempotents</strong> : un second traitement avec la même clé d&apos;idempotence ne change pas l&apos;état final (clé stockée en base, contrainte d&apos;unicité sur un identifiant externe, etc.). C&apos;est indispensable pour les webhooks de paiement ou les consumers de file.
            </p>
            <div class="bg-card/40 border border-border/50 rounded-lg p-4">
              <h3 class="font-semibold text-foreground dark:text-white text-sm sm:text-base mb-2">CQRS et modèles de lecture</h3>
              <p class="text-sm text-foreground/80 leading-relaxed mb-3">
                Le pattern <strong>CQRS</strong> (Command Query Responsibility Segregation) sépare les chemins d&apos;écriture (commandes validant des invariants métier stricts) des chemins de lecture optimisés pour l&apos;agrégation (vues matérialisées, search index, cache). Dans les microservices, il permet d&apos;éviter des jointures SQL impossibles entre bases hétérogènes : un service « reporting » consomme des événements pour tenir à jour une projection dénormalisée.
              </p>
              <p class="text-sm text-foreground/80 leading-relaxed">
                La migration progressive (<strong>strangler fig pattern</strong>) enveloppe un monolithe existant derrière une façade qui route tranche par tranche le trafic vers de nouveaux services. Côté données, on duplique temporairement certaines lectures ou on synchronise via événements jusqu&apos;à ce que l&apos;ancienne voie puisse être retirée sans big bang risqué.
              </p>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">04</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">Observabilité et lien avec Next.js</h2>
            </div>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              La <strong>observabilité</strong> regroupe logs structurés (JSON avec correlation-id), métriques (latence p95, taux d&apos;erreur par route) et traces distribuées (OpenTelemetry → Jaeger/Zipkin). Sans ces trois piliers, diagnostiquer une lenteur transverse à six services devient du devinage.
            </p>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              Dans une stack JavaScript, un <strong>Backend-for-Frontend</strong> (BFF) Next.js peut orchestrer plusieurs microservices pour composer une page : il adapte le contrat aux besoins précis du client (mobile vs web), mutualise l&apos;authentification et limite le chattyness du navigateur. Attention au placement : trop de logique métier dans le BFF le transforme en monolithe distribué ambulant.
            </p>
            <div class="grid gap-3 sm:grid-cols-3">
              <div class="bg-card/40 border border-border/50 rounded-lg p-3">
                <h4 class="font-medium text-primary text-sm mb-2">Logs</h4>
                <p class="text-xs text-foreground/80">Centraliser (ELK, Loki) avec champs service, traceId, user anonymisé.</p>
              </div>
              <div class="bg-card/40 border border-border/50 rounded-lg p-3">
                <h4 class="font-medium text-primary text-sm mb-2">Métriques</h4>
                <p class="text-xs text-foreground/80">Prometheus + Grafana ; RED method (rate, errors, duration).</p>
              </div>
              <div class="bg-card/40 border border-border/50 rounded-lg p-3">
                <h4 class="font-medium text-primary text-sm mb-2">Traces</h4>
                <p class="text-xs text-foreground/80">OpenTelemetry SDK Node ; propager le contexte W3C traceparent.</p>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">05</div>
              <h2 class="text-lg sm:text-2xl font-bold text-foreground dark:text-white">En pratique — avant de multiplier les services</h2>
            </div>
            <div class="bg-muted/50 border border-border rounded-lg p-4 sm:p-5">
              <ul class="space-y-2 text-sm sm:text-base text-foreground/80 list-none">
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Les frontières de domaine sont-elles stables ou encore fluides ? Si fluides, un monolithe modulaire peut aller plus vite.</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Avez-vous défini les sagas / compensations pour les workflows multi-services ?</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Chaque endpoint critique a-t-il budgets de latence, timeouts et idempotency keys ?</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Les équipes peuvent-elles déployer sans coordination permanente (ownership clair) ?</li>
                <li class="flex gap-2"><span class="text-primary font-bold">☐</span> Le plan d&apos;observabilité est-il en place avant la première panne nocturne ?</li>
              </ul>
            </div>
          </section>

          <div class="bg-card/40 border border-border/50 rounded-lg p-4 mt-2">
            <h2 class="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">Conclusion</h2>
            <p class="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Les microservices excellent quand les équipes, les domaines et l&apos;exploitation sont matures. La gestion des données y est plus exigeante qu&apos;en monolithe : cohérence explicite, messages fiables, observabilité de bout en bout. Pour un profil orienté Next.js et services Node, comprendre ces compromis permet de choisir consciemment entre découpage réseau et simplicité opérationnelle.
            </p>
          </div>
        </div>
      </article>
    `,
  },
];
