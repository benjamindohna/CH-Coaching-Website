import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-light">
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-12 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-3 transition-opacity hover:opacity-70">
            <span className="text-2xl font-serif text-white">CH</span>
            <span className="text-[10px] tracking-[0.3em] uppercase font-light border-l pl-3 text-white border-white/30">Executive Coaching</span>
          </a>
        </Link>
        <Link href="/">
          <a className="text-[10px] tracking-[0.2em] uppercase font-medium text-white flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-3 h-3" /> Back
          </a>
        </Link>
      </div>
    </nav>

    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-serif mb-12 italic text-primary">{title}</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-lg leading-relaxed text-foreground/80">
          {children}
        </div>
      </motion.div>
    </main>

    <footer className="py-12 px-6 bg-secondary/30 border-t border-primary/10 text-center">
      <Link href="/">
        <a className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70 mb-6">
          <span className="text-xl font-serif text-primary">CH</span>
          <span className="text-[8px] tracking-[0.3em] uppercase font-light border-l pl-3 text-primary border-primary/30">Executive Coaching</span>
        </a>
      </Link>
      <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground/60">
        <Link href="/impressum"><a className="hover:text-primary transition-colors">Impressum</a></Link>
        <Link href="/datenschutz"><a className="hover:text-primary transition-colors">Datenschutz</a></Link>
      </div>
    </footer>
  </div>
);

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-medium text-foreground mb-4">Angaben gemäß § 5 DDG</h3>
          <p>
            <strong>Anbieterin:</strong><br />
            Chantal Hammer<br />
            ch-executive coach<br />
            Lilienstraße 10<br />
            81669 München<br />
            Deutschland
          </p>
        </section>

        <section>
          <h3 className="text-xl font-medium text-foreground mb-4">Kontakt</h3>
          <p>E-Mail: <a href="mailto:ch@ch-executive.coach" className="text-primary hover:underline">ch@ch-executive.coach</a></p>
        </section>

        <section>
          <h3 className="text-xl font-medium text-foreground mb-4">Umsatzsteuer-ID</h3>
          <p>Es wird keine Umsatzsteuer-ID geführt.</p>
        </section>

        <section>
          <h3 className="text-xl font-medium text-foreground mb-4">Registereintrag</h3>
          <p>Kein Eintrag im Handelsregister.</p>
        </section>

        <section>
          <h3 className="text-xl font-medium text-foreground mb-4">Streitbeilegung</h3>
          <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
