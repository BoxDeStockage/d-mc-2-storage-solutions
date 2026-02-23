import { Check } from "lucide-react";

const plans = [
  {
    name: "Petit",
    surface: "3 m²",
    volume: "9 m³",
    price: 55,
    features: ["Rez-de-chaussée", "Accès 24h/24", "Parking attenant"],
  },
  {
    name: "Moyen",
    surface: "7 m²",
    volume: "20 m³",
    price: 95,
    popular: true,
    features: ["Rez-de-chaussée", "Accès 24h/24", "Parking attenant", "Idéal T2/T3"],
  },
  {
    name: "Grand",
    surface: "15 m²",
    volume: "45 m³",
    price: 160,
    features: ["Rez-de-chaussée", "Accès 24h/24", "Parking attenant", "Maison complète"],
  },
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Tarifs fixes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-gradient-orange">Box</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tous nos box sont au rez-de-chaussée avec parking attenant.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-6 flex flex-col transition-all hover:scale-[1.02] ${
                plan.popular
                  ? "border-primary bg-card glow-orange"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Populaire
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.surface} · {plan.volume}
              </p>
              <p className="text-4xl font-bold text-gradient-orange mb-1">
                {plan.price}€
              </p>
              <p className="text-muted-foreground text-xs mb-6">/ mois HT</p>
              <ul className="space-y-2 mt-auto">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#devis"
                className={`mt-6 block rounded-md py-3 text-center text-sm font-bold uppercase tracking-widest transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Demander un devis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
