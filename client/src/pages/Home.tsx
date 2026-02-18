import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/lib/images";
import { ArrowRight, Mail, Linkedin, GraduationCap, Globe, Briefcase, Heart, Menu, X } from "lucide-react";

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

const Logo = ({ scrolled }: { scrolled?: boolean }) => (
  <div className="flex items-center gap-3">
    <span className={`text-2xl font-serif transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white/90'}`}>CH</span>
    <span className={`text-[10px] tracking-[0.3em] uppercase font-light border-l pl-3 transition-colors duration-300 ${scrolled ? 'text-white border-white/30' : 'text-white/80 border-white/20'}`}>Executive Coaching</span>
  </div>
);

const Navbar = () => {
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
    { name: "The Mirror", href: "#narrative" },
    { name: "The Pivot", href: "#methodology" },
    { name: "The Authority", href: "#authority" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-primary shadow-lg py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="relative z-50">
            <Logo scrolled={scrolled} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-white" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${scrolled ? "text-white" : "text-foreground"}`} />
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
            <div className="flex flex-col gap-12 text-center">
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
              className="absolute bottom-12 flex gap-8"
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

const TrustBar = () => {
  const items = [
    { icon: GraduationCap, text: "INSEAD Executive Coach" },
    { icon: Globe, text: "Fluent in 5 Languages" },
    { icon: Briefcase, text: "25+ Years Luxury Leadership" },
    { icon: Heart, text: "Mother of 4 & Resilience Expert" },
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
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-primary/20">
      
      <Navbar />

      {/* 1. Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
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
              Coming Home <br/> 
              <span className="italic">to Yourself.</span>
            </h1>
            <p className="text-lg lg:text-xl font-light text-muted-foreground mb-12 max-w-md leading-relaxed">
              Rediscovering your strengths and purpose beyond roles, routines, and responsibilities.
            </p>
            <a 
              href="#contact"
              className="group inline-flex items-center text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
            >
              Begin Your Journey
              <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 2. Narrative Section (The Mirror) */}
      <section id="narrative" className="py-32 lg:py-40 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl mb-16 italic font-serif text-primary">
            "Where am I in all of this?"
          </h2>
          <div className="space-y-8 text-lg lg:text-xl font-light leading-loose text-foreground/80">
            <p>
              Many women over 40 find themselves in the space between 'everything looks fine on the outside' 
              and 'something essential is missing on the inside.'
            </p>
            <p>
              Between responsibility, expectations, and the quiet longing to finally choose themselves again. 
              After years of caring for others, a deeper question surfaces.
            </p>
            <p className="font-medium text-foreground">
              This is where your journey begins: A journey of reconnecting with the woman you are—beyond roles, routines, and responsibilities.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 3. Methodology Section (The Pivot) */}
      <section id="methodology" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 items-center bg-white">
        <div className="order-2 lg:order-1 px-8 lg:pl-24 py-20 lg:py-0">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block">The Pivot</span>
            <h2 className="text-4xl lg:text-6xl mb-10 leading-tight">
              Your Next Chapter, <br className="hidden lg:block"/>
              <span className="italic text-muted-foreground">Defined.</span>
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80 max-w-lg">
              <p>
                I specialize in empowering mature women to rediscover their untapped potential. 
                Whether you are ready to redefine your business, create relationships based on mutual respect, 
                or step fully into your leadership and inner strength—I walk beside you.
              </p>
              <p>
                I help you gain clarity about how you truly want your future to look—professionally, 
                personally, and on a soul level.
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
                <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 pointer-events-none" />
                <img 
                  src={images.authority} 
                  alt="Chantal at work" 
                  className="w-full h-full object-cover relative z-10 shadow-xl"
                />
              </FadeIn>
            </div>
            <div className="lg:col-span-1 lg:col-start-7 lg:col-end-13">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block">The Authority</span>
                <h2 className="text-4xl lg:text-5xl mb-10 leading-tight text-foreground">
                  CH Executive Coaching <br/>
                  <span className="italic text-primary/70">Meets Personal Transformation.</span>
                </h2>
                <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
                  <p>
                    I am Chantal Hammer—an entrepreneur with over 25 years in the luxury sector and a certified <strong>INSEAD Executive Coach</strong>. 
                    My background in Retail and Consumer Goods, supported by a <strong>B.Sc. in Business and Economics</strong>, shapes my strategic and commercial perspective.
                  </p>
                  <p>
                    From leading roles at <strong>Polo Ralph Lauren</strong> and <strong>LVMH</strong> to serving as Board Chair at Hammer AG, I combine high-level business precision with deep human understanding. 
                    As a <strong>mother of four sons</strong>, I bring a unique blend of resilience, empathy, and practical leadership to my work.
                  </p>
                  <p>
                    <strong>Fluent in five languages</strong>, I operate confidently across international environments, coaching women who are ready for change and willing to look in the mirror with radical honesty.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-primary/20 pt-8">
                  <div>
                    <span className="block text-3xl font-serif mb-2">25+</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif mb-2">LVMH</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Former Leadership</span>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-primary/20 pt-8">
                  <div>
                    <span className="block text-3xl font-serif mb-2">INSEAD</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Executive Coach</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif mb-2">4 Sons</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Resilience & Empathy Expert</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      {/* <TrustBar /> */}
      
      {/* 5. Contact Section */}
      <section id="contact" className="py-32 lg:py-40 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl mb-6 text-foreground">This is your time.</h2>
            <p className="text-xl text-muted-foreground font-light mb-16">
              To choose yourself. To create your next chapter with clarity and confidence.
            </p>
            
            <div className="border border-primary/50 p-12 lg:p-16 relative bg-white/50 backdrop-blur-sm">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-xs tracking-[0.2em] uppercase text-primary">
                Private Inquiry
              </span>
              
              <div className="space-y-8">
                <a href="mailto:contact@chantalhammer.com" className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary/60" />
                  contact@chantalhammer.com
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-primary/60" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-16 px-6 bg-secondary/30 border-t border-primary/10">
        <div className="container mx-auto flex flex-col items-center">
          <Logo />
          <p className="mt-8 text-[10px] uppercase tracking-widest text-muted-foreground/60">
            &copy; {new Date().getFullYear()} CH Executive Coaching. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
