import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { books, categories } from "@/data/books";
import { BookOpen, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-library.jpg";

const Home = () => {
  const featuredBooks = books.filter((book) => book.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bibliothèque moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative container h-full flex flex-col justify-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl animate-fade-in">
            Votre savoir, à portée de clic
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Explorez des milliers d'ouvrages numériques, disponibles 24/7
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/catalogue">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Explorer le catalogue
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="hero">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Banners */}
      <section className="bg-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Accès gratuit</h3>
                <p className="text-sm text-muted-foreground">Tous les livres disponibles</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Disponible 24/7</h3>
                <p className="text-sm text-muted-foreground">Lisez quand vous voulez</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Lecture en ligne</h3>
                <p className="text-sm text-muted-foreground">Directement dans votre navigateur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="container py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Livres en vedette</h2>
            <p className="text-muted-foreground">Nos recommandations du moment</p>
          </div>
          <Link to="/catalogue">
            <Button variant="outline">Voir tout</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Catégories populaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category} to={`/catalogue?category=${category}`}>
                <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold">{category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {books.filter((b) => b.category === category).length} livres
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
