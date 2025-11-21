import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { books, categories } from "@/data/books";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Catalogue = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || "all");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const authors = useMemo(() => {
    return Array.from(new Set(books.map((book) => book.author))).sort();
  }, []);

  const years = useMemo(() => {
    return Array.from(new Set(books.map((book) => book.year.toString()))).sort(
      (a, b) => parseInt(b) - parseInt(a)
    );
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || book.category === selectedCategory;
      const matchesAuthor =
        selectedAuthor === "all" || book.author === selectedAuthor;
      const matchesYear =
        selectedYear === "all" || book.year.toString() === selectedYear;

      return matchesSearch && matchesCategory && matchesAuthor && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedAuthor, selectedYear]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalogue complet</h1>
          <p className="text-xl text-primary-foreground/90">
            Découvrez notre collection de {books.length} ouvrages
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher un livre ou un auteur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
              <SelectTrigger>
                <SelectValue placeholder="Auteur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les auteurs</SelectItem>
                {authors.map((author) => (
                  <SelectItem key={author} value={author}>
                    {author}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les années</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredBooks.length} livre{filteredBooks.length > 1 ? "s" : ""} trouvé
            {filteredBooks.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Aucun livre ne correspond à vos critères de recherche.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Catalogue;
