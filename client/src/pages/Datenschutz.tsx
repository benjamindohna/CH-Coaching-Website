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

    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-serif mb-12 italic text-primary">{title}</h1>
        <div className="space-y-10 text-lg leading-relaxed text-foreground/80">
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

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">1. Verantwortliche</h3>
        <p>
          Chantal Hammer<br />
          Lilienstraße 10<br />
          81669 München<br />
          Deutschland<br />
          E-Mail: <a href="mailto:ch@ch-executive.coach" className="text-primary hover:underline">ch@ch-executive.coach</a>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">2. Hosting und Bereitstellung der Website (Vercel)</h3>
        <p>Diese Website wird über Vercel bereitgestellt. Beim Aufruf der Website werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, übertragenes Datenvolumen, Browser-/Betriebssysteminformationen, Referrer-URL), um die Website auszuliefern, die Stabilität und Sicherheit zu gewährleisten und Fehler zu analysieren (Server-Logfiles).</p>
        <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und zuverlässigen Betrieb der Website).</p>
        <p className="mt-2 text-sm italic">Es kann nicht ausgeschlossen werden, dass dabei Daten in Staaten außerhalb der EU/des EWR (insbesondere USA) verarbeitet werden. Soweit erforderlich, erfolgt dies auf Grundlage geeigneter Garantien nach Art. 44 ff. DSGVO, z. B. durch Standardvertragsklauseln.</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">3. Versionsverwaltung/Deployment (GitHub)</h3>
        <p>Der Quellcode der Website wird zur Versionsverwaltung und Bereitstellung von Deployments über GitHub verwaltet. Dabei kann es technisch bedingt zu Verarbeitungen von Daten (z. B. Metadaten bei Deployments, IP-Adressen) kommen.</p>
        <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung der Website). Die Datenverarbeitung erfolgt ggf. in Drittstaaten (USA) unter Einhaltung der gesetzlichen Garantien nach Art. 44 ff. DSGVO.</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">4. Domainregistrierung (United Domains)</h3>
        <p>Die Domain wurde über United Domains registriert. In diesem Zusammenhang werden administrative und technische Daten verarbeitet, die für den Betrieb und die Verwaltung der Domain erforderlich sind.</p>
        <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer Domain).</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">5. Entwicklung (Replit)</h3>
        <p>Die Website wurde in der Entwicklungsumgebung Replit erstellt. Im Rahmen der Entwicklung können technisch bedingt Verarbeitungen von Projekt- und Build-Metadaten stattfinden.</p>
        <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Entwicklung und Wartung).</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">6. Kontaktaufnahme per E-Mail</h3>
        <p>Bei Kontaktaufnahme per E-Mail verarbeiten wir die von dir übermittelten Daten (z. B. E-Mail-Adresse, Inhalt der Nachricht), um die Anfrage zu bearbeiten.</p>
        <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO (allgemeine Kommunikation). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">7. Cookies / Tracking / Analyse</h3>
        <p>Diese Website verwendet keine Cookies zu Analyse- oder Marketingzwecken und setzt kein Tracking ein.</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">8. Sprachdarstellung</h3>
        <p>Die Website kann die vom Browser übermittelte Spracheinstellung (z. B. „de“/„en“) nutzen, um Inhalte passend anzuzeigen. Dabei erfolgt keine Profilbildung und keine Speicherung in Cookies.</p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-foreground mb-4">9. Deine Rechte</h3>
        <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO). Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO).</p>
      </section>

      <section className="bg-primary/5 p-8 border-l-4 border-primary">
        <h3 className="text-xl font-medium text-foreground mb-4 uppercase tracking-wider">BESONDERER HINWEIS ZUM WIDERSPRUCHSRECHT (Art. 21 DSGVO):</h3>
        <p><strong>Du hast das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit gegen die Verarbeitung dich betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO (Interessenabwägung) erfolgt, Widerspruch einzulegen. Legst du Widerspruch ein, werden deine personenbezogenen Daten nicht mehr verarbeitet, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die deine Interessen, Rechte und Freiheiten überwiegen.</strong></p>
      </section>
    </LegalLayout>
  );
}
