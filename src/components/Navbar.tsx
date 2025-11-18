import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const location = useLocation();

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`transition-colors hover:text-accent ${
            location.pathname === link.to
              ? "text-accent font-semibold"
              : "text-foreground"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6 text-accent" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bibliothèque Numérique
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
