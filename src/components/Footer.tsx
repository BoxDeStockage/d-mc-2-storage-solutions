import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-gradient-orange">D=mc</span>
              <sup className="text-gradient-orange text-xs">2</sup>
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                23 rue du Brack, Saint-Avold
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+33000000000" className="hover:text-primary transition-colors">
                  03 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@dmc2.fr" className="hover:text-primary transition-colors">
                  contact@dmc2.fr
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-6">
              Accueil : Lundi–Vendredi 8h–18h · Accès box : 24h/24, 7j/7
            </p>
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg border border-border bg-card overflow-hidden min-h-[250px] flex items-center justify-center">
            <iframe
              title="Localisation D=mc²"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.0!2d6.7094!3d49.1043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795a3b4c0c1f3e7%3A0x0!2s23+Rue+du+Brack%2C+57500+Saint-Avold!5e0!3m2!1sfr!2sfr!4v1"
              className="w-full h-full min-h-[250px] border-0 grayscale opacity-70"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} D=mc². Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
