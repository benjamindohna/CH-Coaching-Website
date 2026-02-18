import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "DE" | "EN";

interface Translations {
  [key: string]: {
    DE: string;
    EN: string;
  };
}

export const translations: Translations = {
  nav_mirror: { DE: "Der Spiegel", EN: "The Mirror" },
  nav_pivot: { DE: "Der Drehpunkt", EN: "The Pivot" },
  nav_authority: { DE: "Die Autorität", EN: "The Authority" },
  nav_contact: { DE: "Kontakt", EN: "Contact" },
  hero_title: { DE: "Zu sich selbst kommen.", EN: "Coming Home to Yourself." },
  hero_subtitle: { DE: "Entdecken Sie Ihre Stärken und Ziele jenseits von Rollen, Routinen und Verantwortlichkeiten neu.", EN: "Rediscovering your strengths and purpose beyond roles, routines, and responsibilities." },
  hero_cta: { DE: "Beginnen Sie Ihre Reise", EN: "Begin Your Journey" },
  narrative_quote: { DE: "\"Wo bleibe ich bei all dem?\"", EN: "\"Where am I in all of this?\"" },
  narrative_p1: { DE: "Viele Frauen über 40 befinden sich in dem Raum zwischen 'nach außen hin sieht alles gut aus' und 'im Inneren fehlt etwas Wesentliches'.", EN: "Many women over 40 find themselves in the space between 'everything looks fine on the outside' and 'something essential is missing on the inside.'" },
  narrative_p2: { DE: "Zwischen Verantwortung, Erwartungen und der stillen Sehnsucht, sich endlich wieder für sich selbst zu entscheiden. Nach Jahren der Fürsorge für andere taucht eine tiefere Frage auf.", EN: "Between responsibility, expectations, and the quiet longing to finally choose themselves again. After years of caring for others, a deeper question surfaces." },
  narrative_p3: { DE: "Hier beginnt Ihre Reise: Eine Reise der Wiederverbindung mit der Frau, die Sie sind – jenseits von Rollen, Routinen und Verantwortlichkeiten.", EN: "This is where your journey begins: A journey of reconnecting with the woman you are—beyond roles, routines, and responsibilities." },
  pivot_label: { DE: "Der Drehpunkt", EN: "The Pivot" },
  pivot_title_1: { DE: "Ihr nächstes Kapitel,", EN: "Your Next Chapter," },
  pivot_title_2: { DE: "Definiert.", EN: "Defined." },
  pivot_p1: { DE: "Ich bin darauf spezialisiert, reife Frauen zu ermutigen, ihr ungenutztes Potenzial wiederzuentdecken. Ganz gleich, ob Sie bereit sind, Ihr Unternehmen neu zu definieren, Beziehungen auf der Grundlage gegenseitigen Respekts aufzubauen oder voll und ganz in Ihre Führung und innere Stärke einzutreten – ich begleite Sie.", EN: "I specialize in empowering mature women to rediscover their untapped potential. Whether you are ready to redefine your business, create relationships based on mutual respect, or step fully into your leadership and inner strength—I walk beside you." },
  pivot_p2: { DE: "Ich helfe Ihnen, Klarheit darüber zu gewinnen, wie Ihre Zukunft wirklich aussehen soll – beruflich, persönlich und auf Seelenebene.", EN: "I help you gain clarity about how you truly want your future to look—professionally, personally, and on a soul level." },
  authority_label: { DE: "Die Autorität", EN: "The Authority" },
  authority_title_1: { DE: "CH Executive Coaching", EN: "CH Executive Coaching" },
  authority_title_2: { DE: "Trifft auf persönliche Transformation.", EN: "Meets Personal Transformation." },
  authority_p1: { DE: "Ich bin Chantal Hammer – eine Unternehmerin mit über 25 Jahren Erfahrung im Luxussektor und zertifizierter INSEAD Executive Coach. Mein Hintergrund im Einzelhandel und Konsumgüterbereich, unterstützt durch einen B.Sc. in Betriebs- und Volkswirtschaftslehre, prägt meine strategische und kommerzielle Perspektive.", EN: "I am Chantal Hammer—an entrepreneur with over 25 years in the luxury sector and a certified INSEAD Executive Coach. My background in Retail and Consumer Goods, supported by a B.Sc. in Business and Economics, shapes my strategic and commercial perspective." },
  authority_p2: { DE: "Von Führungspositionen bei Polo Ralph Lauren und LVMH bis hin zum Vorstandsvorsitz der Hammer AG verbinde ich unternehmerische Präzision auf hohem Niveau mit tiefem menschlichem Verständnis. Als Mutter von vier Söhnen bringe ich eine einzigartige Mischung aus Belastbarkeit, Empathie und praktischer Führung in meine Arbeit ein.", EN: "From leading roles at Polo Ralph Lauren and LVMH to serving as Board Chair at Hammer AG, I combine high-level business precision with deep human understanding. As a mother of four sons, I bring a unique blend of resilience, empathy, and practical leadership to my work." },
  authority_p3: { DE: "Ich spreche fließend fünf Sprachen und bewege mich sicher in internationalen Umgebungen. Ich coache Frauen, die bereit für Veränderungen sind und bereit sind, sich mit radikaler Ehrlichkeit im Spiegel zu betrachten.", EN: "Fluent in five languages, I operate confidently across international environments, coaching women who are ready for change and willing to look in the mirror with radical honesty." },
  exp_years: { DE: "Jahre Erfahrung", EN: "Years Experience" },
  exp_leadership: { DE: "Ehemalige Führungskraft", EN: "Former Leadership" },
  trust_insead: { DE: "INSEAD Executive Coach", EN: "INSEAD Executive Coach" },
  trust_languages: { DE: "Fließend in 5 Sprachen", EN: "Fluent in 5 Languages" },
  trust_leadership: { DE: "25+ Jahre Luxus-Führung", EN: "25+ Years Luxury Leadership" },
  trust_resilience: { DE: "Mutter von 4 & Resilienz-Expertin", EN: "Mother of 4 & Resilience Expert" },
  contact_title: { DE: "Dies ist Ihre Zeit.", EN: "This is your time." },
  contact_subtitle: { DE: "Sich für sich selbst zu entscheiden. Ihr nächstes Kapitel mit Klarheit und Zuversicht zu gestalten.", EN: "To choose yourself. To create your next chapter with clarity and confidence." },
  contact_inquiry: { DE: "Private Anfrage", EN: "Private Inquiry" },
  contact_linkedin: { DE: "Auf LinkedIn vernetzen", EN: "Connect on LinkedIn" },
  footer_rights: { DE: "Alle Rechte vorbehalten.", EN: "All Rights Reserved." }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    return (saved as Language) || "DE";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
