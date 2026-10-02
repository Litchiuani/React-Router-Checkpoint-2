// Films/émissions présentés au chargement de l'application.
// Chaque film possède : titre, description, posterURL, note, trailerURL
// (URL d'intégration YouTube, utilisée sur la page de détail).
const initialMovies = [
  {
    id: 1,
    titre: "Inception",
    description: "Un voleur qui s'infiltre dans les rêves doit implanter une idée dans l'esprit d'un PDG.",
    posterURL: "https://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    note: 8.8,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    titre: "Breaking Bad",
    description: "Un professeur de chimie atteint d'un cancer se lance dans la fabrication de méthamphétamine.",
    posterURL: "https://image.tmdb.org/t/p/w342/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    note: 9.5,
    trailerURL: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    id: 3,
    titre: "Parasite",
    description: "Une famille pauvre s'infiltre progressivement dans le foyer d'une famille riche.",
    posterURL: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    note: 8.6,
    trailerURL: "https://www.youtube.com/embed/5xH0HfJHsaY",
  },
];

export default initialMovies;
