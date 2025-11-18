export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: number;
  coverUrl: string;
  description: string;
  excerpt: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Les Misérables",
    author: "Victor Hugo",
    category: "Roman",
    year: 1862,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description: "Une fresque monumentale de la société française du XIXe siècle, suivant le parcours de Jean Valjean, ancien forçat en quête de rédemption.",
    excerpt: "Tant qu'il existera, par le fait des lois et des mœurs, une damnation sociale créant artificiellement, en pleine civilisation, des enfers...",
    featured: true
  },
  {
    id: 2,
    title: "Une brève histoire du temps",
    author: "Stephen Hawking",
    category: "Science",
    year: 1988,
    coverUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=600&fit=crop",
    description: "Un voyage fascinant à travers les mystères de l'univers, du Big Bang aux trous noirs, expliqué de manière accessible.",
    excerpt: "Nous vivons dans un univers étrange et merveilleux. Son âge, sa taille, sa violence et même son existence sont des questions qui nous fascinent...",
    featured: true
  },
  {
    id: 3,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    category: "Jeunesse",
    year: 1943,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "Un conte poétique et philosophique racontant la rencontre d'un aviateur et d'un petit prince venu d'une autre planète.",
    excerpt: "J'ai ainsi vécu seul, sans personne avec qui parler véritablement, jusqu'à une panne dans le désert du Sahara...",
    featured: true
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Histoire",
    year: 2011,
    coverUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=600&fit=crop",
    description: "Une brève histoire de l'humanité qui explore comment Homo sapiens en est venu à dominer le monde.",
    excerpt: "Il y a environ 70 000 ans, Homo sapiens était encore un animal insignifiant qui vaquait à ses affaires dans un coin de l'Afrique...",
    featured: false
  },
  {
    id: 5,
    title: "L'Art de la guerre",
    author: "Sun Tzu",
    category: "Développement personnel",
    year: -500,
    coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    description: "Un traité de stratégie militaire devenu classique du management et de la stratégie d'entreprise.",
    excerpt: "L'art de la guerre, c'est de soumettre l'ennemi sans combat.",
    featured: false
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    category: "Roman",
    year: 1949,
    coverUrl: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop",
    description: "Une dystopie glaçante décrivant un régime totalitaire où la liberté individuelle est abolie.",
    excerpt: "C'était un jour d'avril froid et clair. Les horloges sonnaient treize heures.",
    featured: true
  },
  {
    id: 7,
    title: "L'Origine des espèces",
    author: "Charles Darwin",
    category: "Science",
    year: 1859,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    description: "L'œuvre fondatrice de la théorie de l'évolution par la sélection naturelle.",
    excerpt: "Quand on considère la lutte pour l'existence, on ne doit jamais oublier qu'il existe dans la nature un système de contrôle...",
    featured: false
  },
  {
    id: 8,
    title: "Harry Potter à l'école des sorciers",
    author: "J.K. Rowling",
    category: "Jeunesse",
    year: 1997,
    coverUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Le premier tome des aventures du jeune sorcier Harry Potter et de ses amis à Poudlard.",
    excerpt: "Mr et Mrs Dursley, qui habitaient au 4, Privet Drive, avaient toujours affirmé avec la plus grande fierté qu'ils étaient parfaitement normaux...",
    featured: false
  },
  {
    id: 9,
    title: "L'Étranger",
    author: "Albert Camus",
    category: "Roman",
    year: 1942,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "Un roman emblématique de l'absurde, suivant Meursault, un homme indifférent face à l'existence.",
    excerpt: "Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas.",
    featured: false
  },
  {
    id: 10,
    title: "Histoire de France",
    author: "Jules Michelet",
    category: "Histoire",
    year: 1833,
    coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    description: "Une œuvre monumentale retraçant l'histoire de France avec passion et lyrisme.",
    excerpt: "L'histoire est d'abord tout entière géographie. Ce n'est pas le lieu ici d'insister sur cette vérité...",
    featured: false
  },
  {
    id: 11,
    title: "Réfléchissez et devenez riche",
    author: "Napoleon Hill",
    category: "Développement personnel",
    year: 1937,
    coverUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=600&fit=crop",
    description: "Les principes du succès basés sur l'étude de personnalités qui ont réussi.",
    excerpt: "Vraiment, la pensée est la chose la plus puissante qui existe. La pensée est la seule chose sur laquelle vous avez un contrôle absolu...",
    featured: false
  },
  {
    id: 12,
    title: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    category: "Roman",
    year: 1844,
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    description: "Une histoire épique de vengeance et de rédemption dans la France du XIXe siècle.",
    excerpt: "Le 24 février 1815, la vigie de Notre-Dame de la Garde signala le trois-mâts le Pharaon, venant de Smyrne, Trieste et Naples.",
    featured: false
  }
];

export const categories = [
  "Roman",
  "Science",
  "Histoire",
  "Jeunesse",
  "Développement personnel"
];
