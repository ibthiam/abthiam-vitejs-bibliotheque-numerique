import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Users, Target, History } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos</h1>
          <p className="text-xl text-primary-foreground/90">
            Découvrez notre mission et notre histoire
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-16">
        {/* Mission */}
        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Notre mission</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              La Bibliothèque Numérique est née d'une conviction profonde : la connaissance
              doit être accessible à tous, partout et à tout moment. Notre mission est de
              démocratiser l'accès à la culture et au savoir en proposant une plateforme
              gratuite de lecture numérique.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Nous croyons que chaque livre est une porte ouverte sur un nouveau monde, une
              nouvelle perspective, une nouvelle possibilité. C'est pourquoi nous nous
              engageons à offrir un catalogue diversifié, allant des classiques intemporels
              aux œuvres contemporaines, en passant par des ouvrages scientifiques et
              pédagogiques.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <History className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Notre histoire</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              Fondée en 2020, la Bibliothèque Numérique est le fruit d'une collaboration
              entre passionnés de littérature et experts du numérique. Face au constat que
              de nombreuses œuvres restaient inaccessibles pour des raisons économiques ou
              géographiques, nous avons décidé d'agir.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Depuis nos débuts avec quelques centaines de titres, nous avons grandi pour
              devenir une plateforme de référence, proposant aujourd'hui des milliers
              d'ouvrages dans tous les domaines. Chaque jour, des milliers de lecteurs nous
              font confiance pour leurs découvertes littéraires.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Nos valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Accessibilité</h3>
              <p className="text-foreground/80">
                Un accès gratuit et illimité à la culture pour tous, sans discrimination.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Qualité</h3>
              <p className="text-foreground/80">
                Une sélection rigoureuse d'ouvrages de qualité dans tous les domaines.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-foreground/80">
                Une plateforme moderne et intuitive pour une expérience de lecture optimale.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Notre équipe</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              La Bibliothèque Numérique est animée par une équipe passionnée de
              bibliothécaires, développeurs, designers et experts en littérature. Ensemble,
              nous travaillons chaque jour pour enrichir notre catalogue, améliorer notre
              plateforme et offrir la meilleure expérience possible à nos lecteurs.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Notre équipe éditoriale sélectionne avec soin chaque ouvrage ajouté à la
              collection, tandis que notre équipe technique veille à ce que la plateforme
              reste performante, accessible et agréable à utiliser sur tous les supports.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
