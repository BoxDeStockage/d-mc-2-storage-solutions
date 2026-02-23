import { useState } from "react";
import { Plus, Minus, Calculator } from "lucide-react";

interface Item {
  name: string;
  volume: number;
  count: number;
}

const presets: { label: string; volume: number }[] = [
  { label: "Studio (≈20m²)", volume: 8 },
  { label: "T2 (≈40m²)", volume: 15 },
  { label: "T3 (≈60m²)", volume: 25 },
  { label: "T4+ (≈80m²)", volume: 40 },
];

const furnitureItems: { name: string; volume: number }[] = [
  { name: "Canapé", volume: 1.5 },
  { name: "Lit double", volume: 2 },
  { name: "Armoire", volume: 1.8 },
  { name: "Table + chaises", volume: 1.2 },
  { name: "Bureau", volume: 0.8 },
  { name: "Machine à laver", volume: 0.5 },
  { name: "Carton standard", volume: 0.06 },
  { name: "Vélo", volume: 0.5 },
  { name: "Réfrigérateur", volume: 0.8 },
  { name: "Commode", volume: 0.7 },
];

const suggestBox = (volume: number) => {
  if (volume <= 9) return { name: "Petit", size: "3m² / 9m³", price: "55€/mois" };
  if (volume <= 20) return { name: "Moyen", size: "7m² / 20m³", price: "95€/mois" };
  return { name: "Grand", size: "15m² / 45m³", price: "160€/mois" };
};

const VolumeCalculator = () => {
  const [items, setItems] = useState<Item[]>(
    furnitureItems.map((f) => ({ ...f, count: 0 }))
  );

  const totalVolume = items.reduce((sum, i) => sum + i.volume * i.count, 0);
  const suggestion = suggestBox(totalVolume);

  const updateCount = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, count: Math.max(0, item.count + delta) } : item
      )
    );
  };

  const applyPreset = (volume: number) => {
    setItems(furnitureItems.map((f) => ({ ...f, count: 0 })));
    // Set a rough distribution
    const ratio = volume / 25;
    setItems([
      { name: "Canapé", volume: 1.5, count: Math.round(1 * ratio) },
      { name: "Lit double", volume: 2, count: Math.max(1, Math.round(1 * ratio)) },
      { name: "Armoire", volume: 1.8, count: Math.round(2 * ratio) },
      { name: "Table + chaises", volume: 1.2, count: Math.round(1 * ratio) },
      { name: "Bureau", volume: 0.8, count: Math.round(1 * ratio) },
      { name: "Machine à laver", volume: 0.5, count: Math.round(1 * ratio) },
      { name: "Carton standard", volume: 0.06, count: Math.round(20 * ratio) },
      { name: "Vélo", volume: 0.5, count: 0 },
      { name: "Réfrigérateur", volume: 0.8, count: Math.round(1 * ratio) },
      { name: "Commode", volume: 0.7, count: Math.round(1 * ratio) },
    ]);
  };

  return (
    <section id="calculateur" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Outil interactif
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculateur de <span className="text-gradient-orange">Volume</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estimez le volume nécessaire et trouvez le box idéal.
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => applyPreset(p.volume)}
              className="rounded-md border border-border bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Items list */}
          <div className="space-y-2">
            {items.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3"
              >
                <span className="text-sm">{item.name} <span className="text-muted-foreground text-xs">({item.volume}m³)</span></span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateCount(i, -1)}
                    className="h-7 w-7 flex items-center justify-center rounded bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">{item.count}</span>
                  <button
                    onClick={() => updateCount(i, 1)}
                    className="h-7 w-7 flex items-center justify-center rounded bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center glow-orange">
            <Calculator className="text-primary mb-4" size={40} />
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Volume estimé</p>
            <p className="text-5xl font-bold text-gradient-orange mb-1">
              {totalVolume.toFixed(1)}
            </p>
            <p className="text-muted-foreground mb-8">m³</p>

            {totalVolume > 0 && (
              <div className="w-full rounded-md border border-primary/30 bg-primary/10 p-5">
                <p className="text-xs uppercase tracking-widest text-primary mb-1">Box recommandé</p>
                <p className="text-lg font-bold">{suggestion.name}</p>
                <p className="text-muted-foreground text-sm">{suggestion.size}</p>
                <p className="text-primary font-bold text-xl mt-2">{suggestion.price}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolumeCalculator;
