import Image from "next/image";
import { notFound } from "next/navigation";

const articles = [
  {
    title: "Gouvernance et Sécurité des Données au Sénégal",
    date: "2024-03-25", 
    readTime: "15 min",
    description: "Guide complet sur la gouvernance et la sécurité des données au Sénégal, incluant les aspects réglementaires, techniques et pratiques.",
    topics: ["Sécurité", "Gouvernance", "CDP", "Analyse Prédictive"],
    content: `
      <article class="prose prose-lg max-w-none dark:prose-invert">
        <div class="mb-8">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Au Sénégal, la gouvernance des données est une priorité stratégique, régie par la Commission des Données Personnelles (CDP) et la Loi n°2008-12 sur la protection des données personnelles. Dans un monde numérique en évolution rapide, la protection des données ne se limite pas à la conformité légale, mais s'étend à la mise en place de technologies avancées et de pratiques innovantes pour garantir leur sécurité et leur exploitation responsable.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">1. Sécurité des Données</h2>
          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">Définition</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">La sécurité des données comprend l'ensemble des mesures techniques et organisationnelles visant à protéger les données contre les accès non autorisés, les pertes accidentelles, ou les modifications malveillantes.</p>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">1.1 Protection des Données Sensibles</h3>
          <div class="mb-6">
            <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Chiffrement</h4>
            <p class="mb-4 text-gray-700 dark:text-gray-300">Le chiffrement au repos sécurise les données stockées, par exemple avec l'algorithme AES (Advanced Encryption Standard). Les solutions comme VeraCrypt ou BitLocker permettent de protéger les disques locaux. Le chiffrement en transit protège les communications en réseau, en utilisant des protocoles tels que TLS/SSL, déployés avec des serveurs web comme NGINX.</p>
            <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Configurez TLS pour les communications réseau avec un certificat SSL via des services comme Let's Encrypt.</li>
              <li>Utilisez des bibliothèques Python comme pycryptodome pour implémenter le chiffrement dans vos applications.</li>
              <li>Activez les options de chiffrement natif pour vos bases de données (par exemple, MongoDB ou PostgreSQL).</li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Authentification Forte</h4>
            <p class="text-gray-700 dark:text-gray-300">Mettre en place une authentification à deux facteurs (2FA) et intégrer des solutions biométriques pour renforcer la sécurité. Outils comme Okta ou Authy permettent de déployer facilement ces mesures.</p>
          </div>

          <div class="mb-6">
            <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Stockage Sécurisé</h4>
            <p class="text-gray-700 dark:text-gray-300">Utiliser des plateformes comme AWS S3 ou Azure Blob Storage, qui intègrent des fonctions de cryptage par défaut.</p>
          </div>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">1.2 Contrôle d'Accès</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Pour garantir que seules les personnes autorisées accèdent aux données :</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>IAM (Identity Access Management) : Implémentez des solutions telles que AWS IAM ou Azure Active Directory pour définir des permissions précises.</li>
            <li>Surveillance et Journalisation : Configurez des outils de journalisation tels que Elastic SIEM pour détecter les activités suspectes.</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">2. Analyse Prédictive</h2>
          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">Définition</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">L'analyse prédictive repose sur des algorithmes d'apprentissage automatique pour exploiter les données historiques et actuelles afin d'anticiper les risques et les tendances.</p>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">2.1 Applications au Sénégal</h3>
          <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Secteurs prioritaires</h4>
          <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Services financiers mobiles : Détection des fraudes dans les transactions.</li>
            <li>Santé : Surveillance épidémiologique et gestion des ressources.</li>
            <li>Agriculture : Prévisions météorologiques et détection précoce des maladies des cultures.</li>
            <li>Administration publique : Optimisation des services et gestion des risques liés à la cybersécurité.</li>
          </ul>

          <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Technologies clés</h4>
          <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Machine Learning : TensorFlow, Scikit-learn pour développer des modèles prédictifs</li>
            <li>Big Data : Apache Spark pour analyser de grandes quantités de données</li>
            <li>Visualisation : Power BI, Tableau pour expliquer les résultats aux décideurs</li>
          </ul>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">2.2 Mise en œuvre</h3>
          <div class="mb-6">
            <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Collecte des Données</h4>
            <p class="text-gray-700 dark:text-gray-300">Identifiez les sources de données pertinentes et assurez-vous de leur qualité avec des outils de nettoyage comme Python pandas.</p>
          </div>

          <div class="mb-6">
            <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Analyse et Modélisation</h4>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Construisez des modèles prédictifs avec des algorithmes supervisés ou non supervisés</li>
              <li>Validez les modèles avec des ensembles de test avant leur déploiement</li>
              <li>Déployez sur des plateformes cloud comme AWS SageMaker</li>
            </ul>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">3. Conformité et Recommandations Pratiques</h2>
          
          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">Pour les Entreprises</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Nommer un DPO (Data Protection Officer) pour superviser la gouvernance des données</li>
            <li>Documenter les traitements dans un registre centralisé et le soumettre à la CDP</li>
            <li>Sensibiliser régulièrement les employés à la sécurité des données</li>
          </ul>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">Pour la Conformité avec la CDP</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Déclarer tous les traitements de données personnelles auprès de la CDP</li>
            <li>Obtenir le consentement explicite des utilisateurs avant de collecter leurs données</li>
            <li>Respecter les droits des personnes (accès, modification, suppression)</li>
          </ul>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">Outils recommandés</h3>
          <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Sécurité</h4>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Pare-feu : Palo Alto, Fortinet</li>
                <li>Chiffrement : VeraCrypt, AWS KMS</li>
                <li>IAM : Okta, AWS IAM</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-300">Analyse prédictive</h4>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Frameworks ML : TensorFlow, PyTorch</li>
                <li>Big Data : Hadoop, Spark</li>
                <li>Visualisation : Power BI, Tableau</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Conclusion</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Adopter une gouvernance des données robuste et des pratiques de sécurité avancées permet non seulement de se conformer aux exigences légales au Sénégal, mais aussi de renforcer la résilience des organisations face aux défis numériques modernes. Une combinaison d'outils technologiques, d'analyses prédictives, et de sensibilisation continue constitue la clé d'un écosystème numérique sûr et efficace.
          </p>
        </section>
      </article>
    `,
    slug: "securite-gouvernance-donnees",
    author: {
      name: "LY Ibrahima",
      image: "/images/ibrahimaly.jpeg",
      
    },
    image: "/images/gouvernance.webp"
  },
  {
    "title": "L'IA et l'Analyse Prédictive : Un Levier pour les Données au Sénégal",
    "date": "2024-12-30", 
    "readTime": "15 min",
    "description": "Découvrez comment l'intelligence artificielle transforme les données au Sénégal grâce à l'analyse prédictive et explorez ses applications concrètes dans des secteurs clés comme l'agriculture, la santé et les finances.",
    "topics": ["IA", "Analyse Prédictive", "Big Data", "Machine Learning", "Innovation au Sénégal"],
    "content": `
      <article class="prose prose-lg max-w-none dark:prose-invert">
        <div class="mb-8">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            L'intelligence artificielle (IA) et l'analyse prédictive redéfinissent la manière dont les données sont exploitées au Sénégal. Avec l'essor de la technologie et de la numérisation, ces outils ouvrent la voie à des innovations qui répondent à des défis locaux tout en offrant des opportunités globales.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Dans ce blog, nous explorerons les concepts de l'analyse prédictive, ses applications pratiques au Sénégal, ainsi que ses défis et perspectives. Vous découvrirez comment ces technologies transforment des secteurs vitaux et pourquoi elles sont essentielles pour bâtir un avenir connecté.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">1. Qu'est-ce que l'Analyse Prédictive ?</h2>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            L'analyse prédictive est une branche de l'IA qui utilise des algorithmes pour analyser des données historiques et actuelles afin de prévoir des événements futurs. Elle repose sur plusieurs techniques :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Apprentissage supervisé et non supervisé.</li>
            <li>Techniques de régression et de classification.</li>
            <li>Big Data pour gérer des ensembles de données volumineux et complexes.</li>
          </ul>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            En combinant ces outils, l'analyse prédictive aide les entreprises et les gouvernements à optimiser leurs ressources, anticiper les risques et améliorer la prise de décision.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">2. Applications de l'Analyse Prédictive au Sénégal</h2>
          
          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">2.1 Agriculture</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Au Sénégal, l'agriculture représente une part importante de l'économie. L'analyse prédictive offre des solutions telles que :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>La prévision des rendements agricoles en fonction des conditions climatiques.</li>
            <li>La détection précoce des maladies des cultures grâce à des modèles basés sur des images satellites.</li>
            <li>La gestion optimisée de l'irrigation pour réduire le gaspillage d'eau.</li>
          </ul>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">2.2 Santé</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Dans le secteur de la santé, les technologies prédictives améliorent la gestion des ressources et sauvent des vies :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Prévision des épidémies pour mieux planifier les campagnes de vaccination.</li>
            <li>Allocation efficace des stocks de médicaments en fonction des besoins prévus.</li>
            <li>Personnalisation des traitements grâce à l'analyse des dossiers médicaux électroniques.</li>
          </ul>

          <h3 class="text-xl mb-3 text-gray-800 dark:text-gray-200">2.3 Services Financiers</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Les banques et les fintechs utilisent l'IA pour :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Détecter les fraudes en temps réel.</li>
            <li>Prédire les risques de crédit des clients.</li>
            <li>Personnaliser les produits et services financiers en fonction des comportements des utilisateurs.</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">3. Enjeux et Défis</h2>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Malgré son potentiel, l'adoption de l'IA et de l'analyse prédictive au Sénégal est confrontée à plusieurs obstacles :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Manque de données de qualité et accessibles.</li>
            <li>Coût élevé des infrastructures technologiques nécessaires.</li>
            <li>Problèmes liés à la protection de la vie privée et à l'éthique de l'utilisation des données.</li>
          </ul>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Pour surmonter ces défis, des initiatives sont nécessaires, comme :
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>La formation en IA pour développer les compétences locales.</li>
            <li>La collaboration avec des start-ups technologiques locales.</li>
            <li>L'adoption de solutions cloud comme AWS ou Google Cloud.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Conclusion et Appel à l'Action</h2>
          <p class="text-gray-700 dark:text-gray-300">
            L'IA et l'analyse prédictive ne sont pas seulement des technologies futuristes, mais des solutions actuelles qui peuvent transformer le Sénégal. En investissant dans ces outils, les entreprises et les gouvernements peuvent répondre aux défis locaux tout en s'alignant sur les tendances globales.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            Si vous êtes passionné par ces sujets, je vous invite à explorer davantage mon blog ou à me contacter pour discuter de collaborations potentielles.
          </p>
        </section>
      </article>
    `,
    "slug": "ia-analyse-predictive",
    "author": {
      "name": "LY Ibrahima",
      "image": "/images/ibrahimaly.jpeg"
    },
    image: "/images/images.jpeg"
}




];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const metadata = {
  title: 'Articles',
  description: 'Liste des articles',
}

export const dynamicParams = false;

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(article => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          {/* En-tête de l'article */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{article.title}</h1>
            
            {/* Ligne d'informations alignée avec texte plus petit sur mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
              {/* Auteur avec image */}
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Image
                  src={article.author.image}
                  alt={article.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{article.author.name}</span>
              </div>

              {/* Séparateur visible uniquement sur desktop */}
              <span className="hidden sm:inline">•</span>

              {/* Date et temps de lecture */}
              <div className="flex items-center gap-2">
                <time>{new Date(article.date).toLocaleDateString('fr-FR')}</time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative h-64 md:h-96 mt-8 rounded-xl overflow-hidden group">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </header>

          {/* Contenu de l'article */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Pied de page de l'article */}
          <footer className="mt-12 pt-6 border-t border-border">
            <div className="flex justify-between items-center">
              

            
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}