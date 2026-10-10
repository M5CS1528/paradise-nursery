export const categories = [
  {
    id: "air-purifying",
    title: "Air-Purifying Plants",
    description: "Freshen your space with beautiful, easy-going greenery.",
    plants: [
      { id: "snake-plant", name: "Snake Plant", price: 24.99, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80", description: "Upright architectural leaves with a forgiving nature." },
      { id: "peace-lily", name: "Peace Lily", price: 29.99, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80", description: "Glossy foliage and elegant white blooms." },
      { id: "spider-plant", name: "Spider Plant", price: 18.5, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80", description: "A lively cascading plant suited to shelves and hanging pots." },
      { id: "rubber-plant", name: "Rubber Plant", price: 34.0, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", description: "Bold, glossy leaves make a confident statement." },
      { id: "areca-palm", name: "Areca Palm", price: 39.5, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80", description: "Feathery fronds bring a tropical feel indoors." },
      { id: "english-ivy", name: "English Ivy", price: 16.99, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80", description: "Trailing greenery for a classic, layered look." }
    ]
  },
  {
    id: "low-maintenance",
    title: "Low-Maintenance Favorites",
    description: "Resilient plants for busy schedules and new plant parents.",
    plants: [
      { id: "zz-plant", name: "ZZ Plant", price: 27.5, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80", description: "Shiny leaves and excellent tolerance for missed waterings." },
      { id: "pothos", name: "Golden Pothos", price: 19.99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80", description: "Fast-growing vines with marbled golden leaves." },
      { id: "jade-plant", name: "Jade Plant", price: 21.0, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80", description: "A compact succulent with plump, rounded leaves." },
      { id: "cast-iron", name: "Cast Iron Plant", price: 31.0, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", description: "Hardy, deep-green foliage for low-fuss styling." },
      { id: "ponytail-palm", name: "Ponytail Palm", price: 32.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80", description: "A sculptural, drought-tolerant plant with a playful shape." },
      { id: "philodendron", name: "Heartleaf Philodendron", price: 22.5, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80", description: "Heart-shaped leaves trail beautifully from a pot or shelf." }
    ]
  },
  {
    id: "statement-plants",
    title: "Statement Plants",
    description: "Eye-catching shapes and foliage that anchor a room.",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 45.0, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "Iconic split leaves with a lush tropical silhouette." },
      { id: "fiddle-leaf", name: "Fiddle Leaf Fig", price: 59.99, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "Large violin-shaped leaves make a room feel finished." },
      { id: "bird-of-paradise", name: "Bird of Paradise", price: 69.0, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", description: "Upright tropical leaves with dramatic presence." },
      { id: "calathea", name: "Calathea Orbifolia", price: 38.99, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80", description: "Round, striped leaves with a soft silvery finish." },
      { id: "dracaena", name: "Dracaena Marginata", price: 42.0, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80", description: "Fine, arching leaves add height and movement." },
      { id: "alocasia", name: "Alocasia Polly", price: 36.5, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "Arrow-shaped leaves with striking contrasting veins." }
    ]
  }
];

export const allPlants = categories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, categoryId: category.id, categoryTitle: category.title }))
);
