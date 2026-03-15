import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Entrepôt de self-stockage moderne et sécurisé"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 pt-16">
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4 animate-fade-in-up">
          Saint-Avold · Moselle
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Box de stockage
          <br />
          <span className="text-gradient-orange">à Louer</span>
        </h1>
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Box en rez-de-chaussée avec accès direct 24h/7j à Saint-Avold
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
