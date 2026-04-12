import imgSchema from "@/assets/article-ceramique-schema.png";
import imgTerrasse from "@/assets/article-ceramique-terrasse.jpg";
import imgTexture from "@/assets/article-ceramique-texture.jpg";

export interface Article {
  slug: string;
  title: { fr: string; en: string; de: string };
  subtitle: { fr: string; en: string; de: string };
  date: string;
  readTime: { fr: string; en: string; de: string };
  cover: string;
  images: { src: string; alt: { fr: string; en: string; de: string } }[];
  content: { fr: string; en: string; de: string };
  sources: { label: string; url: string }[];
}

export const articles: Article[] = [
  {
    slug: "ceramique-habitat-afrique",
    title: {
      fr: "L'Excellence sous vos Pieds : Pourquoi le Choix de la Céramique Redéfinit l'Habitat en Afrique",
      en: "Excellence Underfoot: Why Ceramic Choices Redefine Housing in Africa",
      de: "Exzellenz unter Ihren Füßen: Warum die Wahl der Keramik das Wohnen in Afrika neu definiert",
    },
    subtitle: {
      fr: "Recherche sur les matériaux céramiques adaptés au climat africain",
      en: "Research on ceramic materials adapted to the African climate",
      de: "Forschung zu keramischen Materialien für das afrikanische Klima",
    },
    date: "2025-01-15",
    readTime: { fr: "8 min de lecture", en: "8 min read", de: "8 Min. Lesezeit" },
    cover: imgTerrasse,
    images: [
      {
        src: imgSchema,
        alt: {
          fr: "Composition technique : couches de feldspath, quartz et kaolin",
          en: "Technical composition: feldspar, quartz and kaolin layers",
          de: "Technische Zusammensetzung: Feldspat-, Quarz- und Kaolinschichten",
        },
      },
      {
        src: imgTerrasse,
        alt: {
          fr: "Terrasse bioclimatique avec carrelage clair",
          en: "Bioclimatic terrace with light tiles",
          de: "Bioklimatische Terrasse mit hellen Fliesen",
        },
      },
      {
        src: imgTexture,
        alt: {
          fr: "Gros plan sur la texture pleine masse",
          en: "Close-up of full-body texture",
          de: "Nahaufnahme der Vollkörpertextur",
        },
      },
    ],
    content: {
      fr: `Bâtir en Afrique ne se résume pas à empiler des briques ; c'est un défi permanent contre les éléments. Entre la chaleur intense du Sahel, l'humidité des zones côtières et l'abrasion constante causée par le sable, le choix de vos revêtements de sol et de murs est déterminant pour la longévité de votre investissement.

Chez Mane Josselin, nous croyons que l'esthétique ne doit jamais compromettre la performance. Voici pourquoi nos compositions céramiques sont spécifiquement pensées pour l'environnement africain.

## La Science de la Durabilité : Bien plus que de l'Argile

Un bon carreau repose sur une "triade minérale" précise : l'argile pour la forme, le quartz pour la solidité et le feldspath pour l'imperméabilité. Pour nos collections, nous privilégions des formulations riches en kaolin de haute pureté (Al₂Si₂O₅(OH)₄), garantissant une structure cristalline capable de résister aux chocs thermiques les plus violents.

Contrairement aux produits standards, nos carreaux "pleine masse" intègrent les pigments directement dans la structure. Résultat ? Même après des années d'abrasion par le sable dans les zones arides, vos sols conservent l'éclat et le motif du premier jour.

## Le Confort Thermique : Votre Allié contre la Chaleur

La climatisation coûte cher et pèse sur l'environnement. Nos solutions de carrelage exploitent l'Indice de Réflectance Solaire (SRI). En choisissant nos finitions à haute valeur L (clarté), vos surfaces réfléchissent jusqu'à 80 % du rayonnement solaire, abaissant naturellement la température intérieure de vos pièces. C'est le concept du "Cool Roof" et du sol passif : la céramique devient un bouclier thermique, pas un accumulateur de chaleur.

## Une Hygiène Irréprochable en Milieu Humide

Dans les climats tropicaux humides, la porosité est l'ennemi numéro un. Un carreau trop poreux absorbe l'eau et favorise les moisissures. Les sélections Mane Josselin affichent un taux d'absorption d'eau inférieur à 0,5 % (norme ISO 10545-3), garantissant un environnement sain, aseptique et facile à entretenir, même dans les salles de bains les plus exposées.

## Vers une Construction Responsable

Nous nous engageons dans une démarche d'économie circulaire en intégrant, dès que possible, des matériaux locaux et des composants recyclés, comme le calcin de verre, qui réduit l'énergie grise nécessaire à la cuisson. Choisir Mane Josselin, c'est soutenir une vision de l'architecture africaine souveraine et durable.

---

**Votre projet mérite une expertise à la hauteur de vos ambitions.**

Vous avez un projet de construction ou de rénovation ? Ne laissez pas le climat décider pour vous. Contactez Mane Josselin dès aujourd'hui pour une consultation personnalisée et découvrez nos collections adaptées à votre environnement.`,
      en: `Building in Africa is not just about stacking bricks; it's a permanent challenge against the elements. Between the intense heat of the Sahel, the humidity of coastal areas, and the constant abrasion caused by sand, your choice of floor and wall coverings is crucial for the longevity of your investment.

At Mane Josselin, we believe that aesthetics should never compromise performance. Here's why our ceramic compositions are specifically designed for the African environment.

## The Science of Durability: Much More Than Clay

A good tile relies on a precise "mineral triad": clay for shape, quartz for strength, and feldspar for impermeability. For our collections, we favor formulations rich in high-purity kaolin (Al₂Si₂O₅(OH)₄), ensuring a crystalline structure capable of withstanding the most violent thermal shocks.

Unlike standard products, our "full-body" tiles integrate pigments directly into the structure. The result? Even after years of sand abrasion in arid zones, your floors retain the brilliance and pattern of the first day.

## Thermal Comfort: Your Ally Against the Heat

Air conditioning is expensive and weighs on the environment. Our tiling solutions exploit the Solar Reflectance Index (SRI). By choosing our finishes with a high L value (lightness), your surfaces reflect up to 80% of solar radiation, naturally lowering the interior temperature of your rooms. This is the concept of "Cool Roof" and passive flooring: ceramics become a thermal shield, not a heat accumulator.

## Impeccable Hygiene in Humid Environments

In humid tropical climates, porosity is enemy number one. A tile that is too porous absorbs water and promotes mold. Mane Josselin selections feature a water absorption rate of less than 0.5% (ISO 10545-3 standard), ensuring a healthy, aseptic, and easy-to-maintain environment, even in the most exposed bathrooms.

## Towards Responsible Construction

We are committed to a circular economy approach by integrating, whenever possible, local materials and recycled components, such as cullet, which reduces the embodied energy required for firing. Choosing Mane Josselin means supporting a vision of sovereign and sustainable African architecture.

---

**Your project deserves expertise that matches your ambitions.**

Do you have a construction or renovation project? Don't let the climate decide for you. Contact Mane Josselin today for a personalized consultation and discover our collections adapted to your environment.`,
      de: `Bauen in Afrika bedeutet nicht nur, Steine aufeinander zu stapeln; es ist eine permanente Herausforderung gegen die Elemente. Zwischen der intensiven Hitze der Sahelzone, der Feuchtigkeit der Küstengebiete und der ständigen Abrasion durch Sand ist die Wahl Ihrer Boden- und Wandbeläge entscheidend für die Langlebigkeit Ihrer Investition.

Bei Mane Josselin glauben wir, dass Ästhetik niemals die Leistung beeinträchtigen sollte. Hier erfahren Sie, warum unsere keramischen Zusammensetzungen speziell für die afrikanische Umgebung konzipiert sind.

## Die Wissenschaft der Haltbarkeit: Viel mehr als Ton

Eine gute Fliese basiert auf einer präzisen "mineralischen Triade": Ton für die Form, Quarz für die Festigkeit und Feldspat für die Undurchlässigkeit. Für unsere Kollektionen bevorzugen wir Formulierungen, die reich an hochreinem Kaolin (Al₂Si₂O₅(OH)₄) sind, um eine kristalline Struktur zu gewährleisten, die den heftigsten Temperaturschocks standhalten kann.

Im Gegensatz zu Standardprodukten integrieren unsere "Vollkörper"-Fliesen die Pigmente direkt in die Struktur. Das Ergebnis? Selbst nach Jahren der Sandabrasion in trockenen Gebieten behalten Ihre Böden den Glanz und das Muster des ersten Tages.

## Thermischer Komfort: Ihr Verbündeter gegen die Hitze

Klimaanlagen sind teuer und belasten die Umwelt. Unsere Fliesenlösungen nutzen den Solar Reflectance Index (SRI). Durch die Wahl unserer Oberflächen mit hohem L-Wert (Helligkeit) reflektieren Ihre Oberflächen bis zu 80 % der Sonnenstrahlung und senken so auf natürliche Weise die Innentemperatur Ihrer Räume. Dies ist das Konzept des "Cool Roof" und des passiven Bodens: Keramik wird zum Wärmeschild, nicht zum Wärmespeicher.

## Einwandfreie Hygiene in feuchten Umgebungen

In feuchten tropischen Klimazonen ist Porosität der Feind Nummer eins. Eine zu poröse Fliese absorbiert Wasser und fördert Schimmel. Die Mane Josselin Auswahl weist eine Wasseraufnahmerate von weniger als 0,5 % auf (Norm ISO 10545-3), die eine gesunde, aseptische und pflegeleichte Umgebung gewährleistet, selbst in den am stärksten exponierten Badezimmern.

## Auf dem Weg zum verantwortungsvollen Bauen

Wir engagieren uns für einen Kreislaufwirtschaftsansatz, indem wir wann immer möglich lokale Materialien und recycelte Komponenten wie Glasscherben integrieren, die die für das Brennen erforderliche graue Energie reduzieren. Sich für Mane Josselin zu entscheiden bedeutet, eine Vision souveräner und nachhaltiger afrikanischer Architektur zu unterstützen.

---

**Ihr Projekt verdient eine Expertise, die Ihren Ambitionen entspricht.**

Haben Sie ein Bau- oder Renovierungsprojekt? Lassen Sie nicht das Klima für Sie entscheiden. Kontaktieren Sie Mane Josselin noch heute für eine persönliche Beratung und entdecken Sie unsere Kollektionen, die an Ihre Umgebung angepasst sind.`,
    },
    sources: [
      {
        label: "Espace Aubade — Carrelage teinté dans la masse : avantages, pose et résistance",
        url: "https://www.espace-aubade.fr/guides/carrelage-teinte-dans-la-masse",
      },
    ],
  },
];
