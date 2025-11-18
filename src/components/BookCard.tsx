import { Link } from "react-router-dom";
import { Book } from "@/data/books";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <Badge variant="accent" className="text-xs">
            {book.category}
          </Badge>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <p className="text-xs text-muted-foreground">{book.year}</p>
        </div>
      </div>
    </Link>
  );
};
