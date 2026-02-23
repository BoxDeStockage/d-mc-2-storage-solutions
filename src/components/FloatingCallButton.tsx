import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+33000000000"
      className="fixed bottom-6 right-6 z-50 flex md:hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg glow-orange"
      aria-label="Appeler maintenant"
    >
      <Phone size={18} />
      Appeler
    </a>
  );
};

export default FloatingCallButton;
