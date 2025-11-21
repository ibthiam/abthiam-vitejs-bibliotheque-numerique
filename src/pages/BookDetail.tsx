import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const book = books.find((b) => b.id === parseInt(id || "0"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Livre non trouvé</h1>
            <Link to="/catalogue">
              <Button>Retour au catalogue</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const similarBooks = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  const handleReadExcerpt = () => {
    toast({
      title: "Extrait du livre",
      description: book.excerpt,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container py-8">
        <Link to="/catalogue">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au catalogue
          </Button>
        </Link>

        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-8 mb-12">
          {/* Book Cover */}
          <div className="animate-fade-in">
            <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-elegant border border-border/50">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <Badge variant="accent" className="mb-3">
                {book.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-1">{book.author}</p>
              <p className="text-sm text-muted-foreground">
                Année de publication : {book.year}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Résumé</h2>
              <p className="text-foreground/90 leading-relaxed">
                {book.description}
              </p>
            </div>

            <Button onClick={handleReadExcerpt} size="lg" className="shadow-glow">
              <BookOpen className="mr-2 h-5 w-5" />
              Lire un extrait
            </Button>
          </div>
        </div>

        {/* Similar Books */}
        {similarBooks.length > 0 && (
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold mb-6">Livres similaires</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {similarBooks.map((similarBook) => (
                <BookCard key={similarBook.id} book={similarBook} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BookDetail;
