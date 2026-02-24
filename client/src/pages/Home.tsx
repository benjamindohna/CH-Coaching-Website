import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/lib/images";
import { ArrowRight, Mail, Linkedin, GraduationCap, Globe, Briefcase, Heart, Menu, X } from "lucide-react";
import { translations } from "@/lib/translations";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Logo = ({ scrolled, variant = "default" }: { scrolled?: boolean, variant?: "default" | "footer" }) => (
  <div className="flex items-center gap-3">
    <span className={`text-2xl font-serif transition-colors duration-300 ${variant === "footer" ? "text-primary" : (scrolled ? 'text-white' : 'text-white/90')}`}>CH</span>
    <span className={`text-[10px] tracking-[0.3em] uppercase font-light border-l pl-3 transition-colors duration-300 ${variant === "footer" ? "text-primary border-primary/30" : (scrolled ? 'text-white border-white/30' : 'text-white/80 border-white/20')}`}>Executive Coaching</span>
  </div>
);

const Navbar = ({ lang, setLang, t }: { lang: string, setLang: (l: string) => void, t: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.mirror, href: "#narrative" },
    { name: t.nav.pivot, href: "#methodology" },
    { name: t.nav.authority, href: "#authority" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const LanguageSwitch = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div 
      className={`relative flex items-center rounded-sm cursor-pointer w-[66px] h-8 border transition-all duration-300 bg-clip-padding ${
        isMobile || scrolled 
          ? "bg-white/10 border-white/20" 
          : "bg-white/10 border-white/20"
      }`}
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      style={{ padding: '4px' }}
    >
      <motion.div
        className="absolute rounded-[2px] shadow-sm z-0 bg-white"
        style={{ width: '28px', height: '22px' }}
        initial={false}
        animate={{ x: lang === "de" ? 0 : 28 }}
        transition={{ type: "tween", ease: [0.65, 0, 0.35, 1], duration: 0.4 }}
      />
      <div className="flex w-full h-full z-10 pointer-events-none relative">
        <div className="flex-1 h-full flex items-center justify-center">
          <motion.span 
            animate={{ color: lang === "de" ? "#0F172A" : "rgba(255,255,255,0.4)" }}
            transition={{ duration: 0.4 }}
            className="text-[8px] font-bold leading-none flex items-center justify-center h-full w-full text-center tracking-tighter"
          >
            DE
          </motion.span>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <motion.span 
            animate={{ color: lang === "en" ? "#0F172A" : "rgba(255,255,255,0.4)" }}
            transition={{ duration: 0.4 }}
            className="text-[8px] font-bold leading-none flex items-center justify-center h-full w-full text-center tracking-tighter"
          >
            EN
          </motion.span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ease-in-out ${
          scrolled 
            ? "bg-primary shadow-lg py-4 lg:py-6 lg:px-12" 
            : "max-[999px]:bg-primary bg-transparent py-4 lg:py-8 lg:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="relative z-50">
            <Logo scrolled={true} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden min-[1000px]:flex items-center gap-6">
            <motion.div 
              initial={false}
              animate={{ 
                opacity: scrolled ? 1 : 0,
                y: scrolled ? 0 : -10,
                pointerEvents: scrolled ? "auto" : "none"
              }}
              transition={{ duration: 0.3 }}
              className="flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="transition-colors duration-300 hover:opacity-70 text-white"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
            
            <div className={`flex items-center border-l pl-6 transition-colors duration-300 ${scrolled ? 'border-white/10' : 'border-transparent'}`}>
              <LanguageSwitch />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1000px]:hidden relative z-50 p-2 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center p-12"
          >
            <div className="flex flex-col gap-12 text-center mb-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-white font-serif italic tracking-wide hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mb-12"
            >
              <LanguageSwitch isMobile />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8"
            >
              <a href="mailto:contact@chantalhammer.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TrustBar = ({ t }: { t: any }) => {
  const items = [
    { icon: GraduationCap, text: t.trust.insead },
    { icon: Globe, text: t.trust.languages },
    { icon: Briefcase, text: t.trust.luxury },
    { icon: Heart, text: t.trust.resilience },
  ];

  return (
    <section className="py-16 bg-secondary/50 border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center space-y-4">
                <item.icon className="w-5 h-5 text-primary/60 stroke-[1.5px]" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/70">
                  {item.text}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [lang, setLangState] = useState<"de" | "en">(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "de" || saved === "en") ? saved : "de";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLang = (newLang: string) => {
    if (newLang === lang) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLangState(newLang as "de" | "en");
      localStorage.setItem("lang", newLang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-primary/20">
      
      <Navbar lang={lang} setLang={setLang} t={t} />

      <motion.div
        animate={{ 
          opacity: isTransitioning ? 0 : 1,
          y: isTransitioning ? 20 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 1. Hero Section */}
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-0">
          <div className="relative h-[60vh] lg:h-screen w-full overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={images.hero} 
              alt="Chantal Hammer Portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start px-8 lg:px-24 py-20 lg:py-0 bg-background">
            <FadeIn>
              <h1 className="text-5xl lg:text-7xl leading-[1.1] mb-8 text-foreground">
                <span data-i18n="hero.title">{t.hero.title}</span> <br/> 
                <span className="italic" data-i18n="hero.subtitle">{t.hero.subtitle}</span>
              </h1>
              <p className="text-lg lg:text-xl font-light text-muted-foreground mb-12 max-w-md leading-relaxed" data-i18n="hero.description">
                {t.hero.description}
              </p>
              <a 
                href="#contact"
                className="group inline-flex items-center text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <span data-i18n="nav.contact">{t.nav.contact}</span>
                <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* 2. Narrative Section (The Mirror) */}
        <section id="narrative" className="py-32 lg:py-40 px-6 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl mb-16 italic font-serif text-primary" data-i18n="narrative.quote">
              {t.narrative.quote}
            </h2>
            <div className="space-y-8 text-lg lg:text-xl font-light leading-loose text-foreground/80">
              <p data-i18n="narrative.p1">
                {t.narrative.p1}
              </p>
              <p data-i18n="narrative.p2">
                {t.narrative.p2}
              </p>
              <p className="font-medium text-foreground" data-i18n="narrative.p3">
                {t.narrative.p3}
              </p>
            </div>
          </FadeIn>
        </section>

        {/* 3. Methodology Section (The Pivot) */}
        <section id="methodology" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 items-center bg-white">
          <div className="order-2 lg:order-1 px-8 lg:pl-24 py-20 lg:py-0">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block" data-i18n="methodology.label">{t.methodology.label}</span>
              <h2 className="text-4xl lg:text-6xl mb-10 leading-tight">
                <span data-i18n="methodology.title">{t.methodology.title}</span> <br className="hidden lg:block"/>
                <span className="italic text-muted-foreground" data-i18n="methodology.subtitle">{t.methodology.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80 max-w-lg">
                <p data-i18n="methodology.p1">
                  {t.methodology.p1}
                </p>
                <p data-i18n="methodology.p2">
                  {t.methodology.p2}
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2 h-[60vh] lg:h-screen w-full relative overflow-hidden">
            <FadeIn delay={0.2} className="w-full h-full">
              <img 
                src={images.methodology} 
                alt="Lifestyle with dogs" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </FadeIn>
          </div>
        </section>

        {/* 4. Authority Section (The Bio) */}
        <section id="authority" className="py-32 lg:py-40 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative aspect-[3/4] lg:aspect-[4/5]">
                 <FadeIn>
                  <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 pointer-events-none h-full lg:h-[120%]" />
                  <img 
                    src={images.authority} 
                    alt="Chantal at work" 
                    className="w-full h-full object-cover relative z-10 shadow-xl"
                  />
                </FadeIn>
              </div>
              <div className="lg:col-span-1 lg:col-start-7 lg:col-end-13">
                <FadeIn delay={0.2}>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block" data-i18n="authority.label">{t.authority.label}</span>
                  <h2 className="text-4xl lg:text-5xl mb-10 leading-tight text-foreground">
                    <span data-i18n="authority.title">{t.authority.title}</span> <br/>
                    <span className="italic text-primary/70" data-i18n="authority.subtitle">{t.authority.subtitle}</span>
                  </h2>
                  <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
                    <p data-i18n="authority.p1">
                      {t.authority.p1}
                    </p>
                    <p data-i18n="authority.p2">
                      {t.authority.p2}
                    </p>
                    <p data-i18n="authority.p3">
                      {t.authority.p3}
                    </p>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-primary/20 pt-8">
                    <div>
                      <span className="block text-3xl font-serif mb-2 text-primary/80">25+</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground" data-i18n="authority.stat1">{t.authority.stat1}</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-serif mb-2 text-primary/80">INSEAD</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Executive Coach</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-serif mb-2 text-primary/80">LVMH</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground" data-i18n="authority.stat2">{t.authority.stat2}</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-serif mb-2 text-primary/80" data-i18n="authority.stat3">{t.authority.stat3}</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground" data-i18n="authority.stat4">{t.authority.stat4}</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="py-32 lg:py-40 px-6 bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-6xl mb-6 text-foreground" data-i18n="contact.title">{t.contact.title}</h2>
              <p className="text-xl text-muted-foreground font-light mb-16" data-i18n="contact.description">
                {t.contact.description}
              </p>
              
              <div className="border border-primary/50 p-12 lg:p-16 relative bg-white/50 backdrop-blur-sm">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-xs tracking-[0.2em] uppercase text-primary" data-i18n="contact.label">
                  {t.contact.label}
                </span>
                
                <div className="space-y-8">
                  <a href="mailto:contact@chantalhammer.com" className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary/60" />
                    contact@chantalhammer.com
                  </a>
                  
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5 text-primary/60" />
                    <span data-i18n="contact.linkedin">{t.contact.linkedin}</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <footer className="py-16 px-6 bg-secondary/30 border-t border-primary/10">
          <div className="container mx-auto flex flex-col items-center">
            <Logo variant="footer" />
            <p className="mt-8 text-[10px] uppercase tracking-widest text-muted-foreground/60">
              &copy; {new Date().getFullYear()} CH Executive Coaching. <span data-i18n="footer.rights">{t.footer.rights}</span>
            </p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
