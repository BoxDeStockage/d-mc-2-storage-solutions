import { Camera, Clock, Car, ShieldAlert } from "lucide-react";

const features = [
  { icon: Camera, label: "Vidéosurveillance", desc: "Caméras HD 24h/24" },
  { icon: Clock, label: "Accès 24h/24", desc: "Badge personnel sécurisé" },
  { icon: Car, label: "Parking attenant", desc: "Accès direct au box" },
];

const SecuritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Sérénité totale
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sécurité & <span className="text-gradient-orange">Accès</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Accueil physique de 8h à 18h. Accès box 24h/24 via badge personnel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {features.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-sm font-bold mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
