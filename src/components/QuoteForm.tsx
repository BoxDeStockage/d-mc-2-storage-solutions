import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const boxSizes = ["Petit (3m²)", "Moyen (7m²)", "Grand (15m²)"];

const QuoteForm = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (formData: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    const nom = (formData.get("nom") as string)?.trim();
    const prenom = (formData.get("prenom") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const telephone = (formData.get("telephone") as string)?.trim();
    const volume = formData.get("volume") as string;

    if (!nom) errs.nom = "Le nom est requis.";
    if (!prenom) errs.prenom = "Le prénom est requis.";
    if (!email) errs.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email invalide.";
    if (!telephone) errs.telephone = "Le téléphone est requis.";
    else if (!/^[\d\s+()-]{6,20}$/.test(telephone)) errs.telephone = "Numéro invalide.";
    if (!volume) errs.volume = "Veuillez choisir un volume.";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xvzbveoq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({
          title: "Demande envoyée !",
          description: "Nous vous recontacterons sous 24h.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Réessayez.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Erreur réseau",
        description: "Vérifiez votre connexion internet.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

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
            <div>
              <input
                name="nom"
                placeholder="Nom"
                className={inputClass}
              />
              {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom}</p>}
            </div>
            <div>
              <input
                name="prenom"
                placeholder="Prénom"
                className={inputClass}
              />
              {errors.prenom && <p className="text-destructive text-xs mt-1">{errors.prenom}</p>}
            </div>
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={inputClass}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              name="telephone"
              type="tel"
              placeholder="Téléphone"
              className={inputClass}
            />
            {errors.telephone && <p className="text-destructive text-xs mt-1">{errors.telephone}</p>}
          </div>
          <div>
            <select
              name="volume"
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>Taille de box souhaitée</option>
              {boxSizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.volume && <p className="text-destructive text-xs mt-1">{errors.volume}</p>}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity glow-orange disabled:opacity-50"
          >
            <Send size={16} />
            {submitting ? "Envoi en cours…" : "Demander mon devis"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
