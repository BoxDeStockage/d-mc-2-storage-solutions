import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const boxSizes = ["Petit (3m²)", "Moyen (7m²)", "Grand (15m²)"];

const QuoteForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    boxSize: boxSizes[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons sous 24h.",
    });
    setForm({ firstName: "", lastName: "", email: "", phone: "", boxSize: boxSizes[0] });
  };

  return (
    <section id="devis" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Gratuit & sans engagement
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Demander un <span className="text-gradient-orange">Devis</span>
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              placeholder="Nom"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              required
              placeholder="Prénom"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            required
            type="tel"
            placeholder="Téléphone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <select
            value={form.boxSize}
            onChange={(e) => setForm({ ...form, boxSize: e.target.value })}
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            {boxSizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-md bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity glow-orange"
          >
            <Send size={16} />
            Demander mon devis
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
