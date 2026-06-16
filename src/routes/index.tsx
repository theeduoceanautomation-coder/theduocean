import { createFileRoute } from "@tanstack/react-router";
import {
  Compass, MapPin, Users, Brain, Target, ClipboardCheck, Crown, Headphones,
  TrendingUp, Rocket, CheckCircle2, XCircle, Sparkles, Clock, Trophy, ArrowRight,
  Calendar, GraduationCap, Briefcase, Shield, Cpu, Star, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aiImg from "@/assets/ai-advantage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduOcean — Structured Career Execution System" },
      { name: "description", content: "Not just certification. Structured execution. Roadmap-first bootcamps, mentor support, AI-integrated learning and lifetime access." },
      { property: "og:title", content: "EduOcean — Structured Career Execution System" },
      { property: "og:description", content: "From Day 1 to certification — and beyond. Clarity. Support. Execution. Results." },
    ],
  }),
  component: Landing,
});

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--gold),transparent_60%)]" />
        <svg viewBox="0 0 36 36" className="relative">
          <path d="M6 24 Q18 12 30 24" stroke="oklch(0.78 0.16 78)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M4 28 Q18 22 32 28" stroke="oklch(0.62 0.22 258)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
          <circle cx="18" cy="8" r="2" fill="oklch(0.82 0.16 80)"/>
          <path d="M18 4 L18 10 M14 6 L22 10 M14 10 L22 6" stroke="oklch(0.82 0.16 80)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg font-bold tracking-tight">
          <span className="text-blue">Edu</span><span className="text-foreground">Ocean</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Learn. Grow. Succeed.</div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Why EduOcean</a>
          <a href="#system" className="hover:text-foreground transition">The System</a>
          <a href="#compare" className="hover:text-foreground transition">Compare</a>
          <a href="#stories" className="hover:text-foreground transition">Success Stories</a>
        </nav>
        <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] text-accent-foreground px-5 py-2 text-sm font-semibold shadow-glow-gold hover:scale-[1.03] transition">
          Book a Call <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5"/>
        </a>
      </div>
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl md:text-3xl font-bold text-gradient">{value}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Structured Career Execution System
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            Not just <span className="text-blue">certification.</span><br/>
            Structured <span className="text-gold">execution.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Most professionals don't fail because they lack intelligence — they fail because they
            lack a system. We hand you the roadmap, the mentors, the AI tools, and the accountability
            to go from confusion to certified.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] text-accent-foreground px-6 py-3 font-semibold shadow-glow-gold hover:scale-[1.03] transition">
              Book Your Strategic Session <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/>
            </a>
            <a href="#system" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-semibold text-foreground hover:bg-card transition">
              See How It Works
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat value="450K+" label="Professionals" />
            <Stat value="100+" label="Countries" />
            <Stat value="95%" label="Success Rate" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gradient-blue)] opacity-25 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elev">
            <img src={heroImg} alt="Path to certification" width={1536} height={1024} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background/70 backdrop-blur border border-border px-4 py-3">
              <div className="flex items-center gap-2 text-sm">
                <Compass className="h-4 w-4 text-[var(--gold)]" />
                <span className="text-muted-foreground">Clarity changes your future.</span>
              </div>
              <span className="text-xs text-[var(--gold)] font-semibold">YOUR PATH →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="relative py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The real problem</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            The problem isn't <span className="text-blue">information.</span><br/>
            It's <span className="text-gold">clarity.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most professionals aren't uninformed. They're overwhelmed.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-destructive/30 bg-card-soft p-8">
            <div className="flex items-center gap-3">
              <XCircle className="h-6 w-6 text-destructive" />
              <h3 className="font-display text-xl font-semibold">Too much information. No direction.</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Best Certifications for 2026?","Reddit: Are certs even worth it?","LinkedIn: Top skills to learn",
                "AWS vs Azure?","PMP Worth It?","ISO 27001 vs CISSP?","10 High-Paying Certs",
              ].map((t) => (
                <span key={t} className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Endless scrolling. Conflicting advice. Months pass, nothing moves.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--gold)]/30 bg-card-soft p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[var(--gold)]" />
              <h3 className="font-display text-xl font-semibold">A clear, structured roadmap.</h3>
            </div>
            <ul className="relative mt-6 space-y-3">
              {[
                ["Right Certification","for your goals", Target],
                ["Right Sequence","for your background", MapPin],
                ["Right Timeline","for your schedule", Clock],
                ["Right Support","for execution", Users],
                ["Real Career Growth","not just another cert", Trophy],
              ].map(([t, s, Icon]: any) => (
                <li key={t} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                  <div className="flex-1 flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                    <span className="font-semibold">{t}</span>
                    <span className="text-xs text-muted-foreground">{s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card-soft p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Compass className="h-6 w-6 text-[var(--gold)]" />
            <div>
              <div className="font-semibold">Confusion costs you time.</div>
              <div className="text-sm text-muted-foreground">Clarity changes your future.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2"><Brain className="h-4 w-4 text-primary"/>Expert Guidance</span>
            <span className="flex items-center gap-2"><Cpu className="h-4 w-4 text-primary"/>Structured Execution</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary"/>Proven Process</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary"/>Measurable Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { n: "01", t: "Roadmap-First Approach", h: "We start with clarity.", d: "Personalized roadmaps designed around your goals, background & career path.", Icon: MapPin },
  { n: "02", t: "Live Mentor-Led Bootcamps", h: "Real-time learning.", d: "Interactive sessions with industry experts to ensure deep understanding.", Icon: Users },
  { n: "03", t: "AI-Integrated Learning", h: "Future-ready skills.", d: "AI tools, concepts & workflows integrated across all major domains.", Icon: Cpu },
  { n: "04", t: "Hands-On Implementation", h: "Apply. Practice. Master.", d: "Real-world projects and use cases to build practical expertise.", Icon: Target },
  { n: "05", t: "Exam Guidance & Preparation", h: "Strategic exam prep.", d: "Study plans, practice tests, mock exams & expert tips to help you clear with confidence.", Icon: ClipboardCheck },
  { n: "06", t: "Certification Strategy", h: "Right cert. Right time.", d: "We help you choose the right certifications that align with market demand & your goals.", Icon: Crown },
  { n: "07", t: "Implementation Support", h: "You're not alone.", d: "Lifetime access to mentors, doubt support and learning resources.", Icon: Headphones },
  { n: "08", t: "Career Positioning", h: "Beyond the certificate.", d: "Resume building, LinkedIn optimization, interview prep & career transition support.", Icon: TrendingUp },
];

function Why() {
  return (
    <section id="why" className="py-24 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Why Choose Us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Why choose <span className="text-blue">EduOcean?</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Eight pillars that take you from "thinking about it" to certified — and beyond.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card-soft px-5 py-3 flex items-center gap-6">
            <div className="flex items-center gap-2"><Users className="h-5 w-5 text-[var(--gold)]"/><span className="font-bold">10K+</span><span className="text-xs text-muted-foreground">Trained</span></div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-[var(--gold)]"/><span className="font-bold">95%</span><span className="text-xs text-muted-foreground">Success</span></div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map(({ n, t, h, d, Icon }) => (
            <div key={n} className="group relative rounded-2xl border border-border bg-card-soft p-6 hover:border-primary/50 transition shadow-elev overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-start justify-between">
                <div className="rounded-xl bg-[var(--gold)]/15 border border-[var(--gold)]/30 p-2.5">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <span className="font-display text-2xl font-bold text-muted-foreground/40">{n}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{t}</h3>
              <p className="mt-2 text-sm text-[var(--gold)]">{h}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SYSTEM = [
  { n: "01", t: "Live Bootcamp Training", d: "36 hours instructor-led, interactive live sessions.", chips: ["Expert Trainers","Real-Time Doubt Solving","Industry Best Practices"], Icon: Users },
  { n: "02", t: "Lifetime LMS Access", d: "Learn. Revisit. Reinforce. Anytime, anywhere.", chips: ["Lifetime Recordings","Study Materials","Question Banks"], Icon: GraduationCap },
  { n: "03", t: "1-on-1 Mentor Support", d: "Personalised guidance. Doubt solving. Strategy.", chips: ["One-on-One Sessions","Mentor Guidance","Readiness Tracking"], Icon: Headphones },
  { n: "04", t: "Hands-On Projects", d: "40 hours practical exposure. Real-world implementation.", chips: ["Industry Projects","Portfolio Building","Practical Implementation"], Icon: Briefcase },
  { n: "05", t: "Application Support", d: "We guide you step-by-step through PMI applications.", chips: ["PMP / PMI-ACP","Document Review","Application Filling"], Icon: ClipboardCheck },
  { n: "06", t: "Exam Scheduling", d: "Online or offline. Your choice. Our support.", chips: ["Voucher Assistance","Exam Booking","Mode Guidance"], Icon: Calendar },
  { n: "07", t: "Certification Completion", d: "Celebrate your achievement. Next level unlocked.", chips: ["Global Certification","Career Advancement","Higher Opportunities"], Icon: Trophy },
];

function System() {
  return (
    <section id="system" className="py-24 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">After You Enroll</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            What actually happens <span className="text-blue">after you enroll?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured execution system. From Day 1 to certification. Clarity. Support. Execution. Results.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative">
            {/* timeline line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-[var(--gold)]/40 to-transparent" />
            <ol className="space-y-4">
              {SYSTEM.map(({ n, t, d, chips, Icon }) => (
                <li key={n} className="relative flex gap-5 rounded-2xl border border-border bg-card-soft p-5 hover:border-primary/40 transition">
                  <div className="relative z-10 shrink-0 h-14 w-14 rounded-full border border-primary/40 bg-background flex items-center justify-center shadow-glow-blue">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl font-bold text-[var(--gold)]">{n}</span>
                      <h3 className="font-display text-lg font-semibold">{t}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {chips.map((c) => (
                        <span key={c} className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-[11px] text-muted-foreground">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card-soft p-6">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Choose Your Batch
              </h3>
              <div className="mt-4 rounded-xl border border-border p-4">
                <div className="text-primary font-semibold">Weekend Batch</div>
                <div className="text-sm text-muted-foreground mt-1">Saturday & Sunday — 3 hours each</div>
                <div className="mt-2 text-xs text-[var(--gold)] font-semibold">~1.5 MONTHS COMPLETION</div>
              </div>
              <div className="my-3 text-center text-xs text-muted-foreground">— OR —</div>
              <div className="rounded-xl border border-border p-4">
                <div className="text-primary font-semibold">Weekday Batch</div>
                <div className="text-sm text-muted-foreground mt-1">Mon – Fri: 2 hours / day</div>
                <div className="mt-2 text-xs text-[var(--gold)] font-semibold">~1 MONTH COMPLETION</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card-soft p-6">
              <h3 className="font-display text-lg font-semibold">Why this works for working professionals</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {["Flexible batch options","Lifetime access","Miss a class? Watch recordings","Mentor support when you need it","Projects that build real skills"].map((x) => (
                  <li key={x} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AI() {
  return (
    <section className="py-24 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.35_0.14_75/0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">The New Advantage</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Certification alone is <span className="text-blue">no longer enough.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The new advantage is simple: <span className="text-[var(--gold)] font-semibold">Certification + AI = Future-Ready Professional.</span>
            We don't just teach certifications. We prepare you for the next decade.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              ["OLD MARKET","Traditional skill set","Manual workflows","Competing in a crowded market"],
              ["NEW MARKET","AI-assisted workflows","Advanced problem-solving","Top 1% in the new economy"],
            ].map((col, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${i===1 ? "border-[var(--gold)]/40 bg-[var(--gold)]/5" : "border-border bg-card-soft"}`}>
                <div className={`text-xs uppercase tracking-wider mb-3 ${i===1 ? "text-[var(--gold)]" : "text-muted-foreground"}`}>{col[0]}</div>
                {col.slice(1).map((line) => (
                  <div key={line} className="flex items-start gap-2 text-sm py-1">
                    {i===1
                      ? <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0" />
                      : <XCircle className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                    }
                    <span className={i===1 ? "text-foreground" : "text-muted-foreground line-through/0"}>{line}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gradient-gold)] opacity-20 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elev">
            <img src={aiImg} alt="Certification plus AI" width={1280} height={896} loading="lazy" className="w-full h-auto"/>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Cloud + AI","Smarter architecture"],
              ["Cybersecurity + AI","AI detects threats"],
              ["PM + AI","Predict risks, optimize tasks"],
              ["DevOps + AI","Automate. Deploy faster."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card-soft p-4">
                <div className="text-sm font-semibold text-primary">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const COMPARE_ROWS = [
  ["Mentor Access", "Not Available", "Limited Access", "1-on-1 Mentor Support"],
  ["Execution Support", "Not Available", "Basic Guidance", "End-to-End Execution"],
  ["Application Support", "Not Available", "Limited Help", "Application Assistance"],
  ["Exam Prep System", "Generic", "Basic Material", "Exam Success System"],
  ["AI Integration", "Not Available", "Not Included", "AI-Powered Learning"],
  ["Lifetime LMS Access", "Limited", "Time-Limited", "Lifetime Access"],
  ["Hands-On Projects", "Not Included", "Sometimes", "40-Hour Projects"],
  ["Accountability", "Not Structured", "Minimal Tracking", "Accountability System"],
];

function Compare() {
  return (
    <section id="compare" className="py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Don't compare prices. Compare outcomes.</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            What you should <span className="text-blue">actually compare.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most people compare price. Smart professionals compare value, support & execution.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card-soft">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border bg-background/40">
                <th className="text-left p-5 font-semibold">Features That Matter</th>
                <th className="text-left p-5 font-medium text-muted-foreground">Self-Study</th>
                <th className="text-left p-5 font-medium text-muted-foreground">Typical Providers</th>
                <th className="text-left p-5 font-semibold text-[var(--gold)] bg-[var(--gold)]/5 border-l border-r border-[var(--gold)]/30">EduOcean</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([f, a, b, c], i) => (
                <tr key={f} className={i % 2 ? "bg-background/20" : ""}>
                  <td className="p-5 font-medium">{f}</td>
                  <td className="p-5"><span className="inline-flex items-center gap-2 text-muted-foreground"><XCircle className="h-4 w-4 text-destructive/80"/>{a}</span></td>
                  <td className="p-5"><span className="inline-flex items-center gap-2 text-muted-foreground"><XCircle className="h-4 w-4 text-[var(--gold)]/70"/>{b}</span></td>
                  <td className="p-5 bg-[var(--gold)]/5 border-l border-r border-[var(--gold)]/30">
                    <span className="inline-flex items-center gap-2 text-foreground font-medium"><CheckCircle2 className="h-4 w-4 text-[var(--gold)]"/>{c}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card-soft p-6 flex flex-wrap items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-[var(--gold)]"/>
            <div>
              <div className="font-semibold">Cheap becomes expensive when execution fails.</div>
              <div className="text-sm text-muted-foreground">Invest in the system that gets you results.</div>
            </div>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-blue)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-blue hover:scale-[1.03] transition">
            See the difference <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}

const STORIES = [
  { n: "Ankit Verma", r: "PMP® Certified · Project Manager", q: "The roadmap was crystal clear and mentors were always available to guide me. I passed PMP on my first attempt and got promoted within 4 months!", m: ["Promoted","40% Salary Hike","4 Months"] },
  { n: "Priya Shah", r: "CISM® Certified · Security Analyst", q: "The structured approach helped me understand complex security concepts with ease. EduOcean's support was key to my success.", m: ["New Role","35% Salary Hike","3 Months"] },
  { n: "Tommie Ewart", r: "CISSP® Certified · Security Engineer", q: "The content depth and real-world practice labs made all the difference. Cleared CISSP and now working on high-impact projects.", m: ["High-Impact","50% Salary Hike","5 Months"] },
  { n: "Stevie Tifft", r: "AWS Solutions Architect · Cloud Engineer", q: "The hands-on labs and mentor support helped me build real confidence. Landed my dream cloud role right after certification!", m: ["Dream Job","45% Salary Hike","2 Months"] },
  { n: "Charlie Howse", r: "CEH Certified · Ethical Hacker", q: "From zero to ethical hacking professional! The practical training and labs were insane. Highly recommend EduOcean.", m: ["Career Switch","60% Salary Hike","4 Months"] },
  { n: "Nevada Herbertson", r: "ITIL® 4 Certified · IT Service Manager", q: "ITIL training was well-structured and straight to the point. It helped me streamline processes and deliver better results.", m: ["Process Lead","Better Performance","6 Months"] },
];

function Stories() {
  return (
    <section id="stories" className="py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Success Stories</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Real learners. <span className="text-blue">Real results.</span> <span className="text-gold">Real impact.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORIES.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card-soft p-6 hover:border-[var(--gold)]/40 transition shadow-elev">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[var(--gradient-blue)] flex items-center justify-center text-primary-foreground font-bold">
                  {s.n.split(" ").map(x=>x[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{s.n}</div>
                  <div className="text-xs text-[var(--gold)]">{s.r}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]"/>)}
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <Quote className="h-5 w-5 shrink-0 text-[var(--gold)]/60"/>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.q}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/60 grid grid-cols-3 gap-2 text-center">
                {s.m.map((x) => (
                  <div key={x} className="text-[11px] text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mx-auto text-primary mb-1"/>{x}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.35_0.14_75/0.25),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-[var(--gold)]/30 bg-card-soft p-10 md:p-14 text-center shadow-glow-gold">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-wider text-muted-foreground">
            <Rocket className="h-3.5 w-3.5 text-[var(--gold)]"/> Our mission is your growth
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
            Stop searching. <span className="text-gold">Start building.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your strategic roadmap session. Take the first step towards a smarter career tomorrow.
            Limited slots available — book your call today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] text-accent-foreground px-7 py-3.5 font-semibold shadow-glow-gold hover:scale-[1.03] transition">
              Book Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/>
            </a>
            <a href="#system" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 font-semibold hover:bg-card transition">
              Explore the System
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              ["Clarity","in Every Step", Target],
              ["Excellence","in Every Session", Sparkles],
              ["Support","in Every Phase", Users],
              ["Success","in Every Outcome", Trophy],
            ].map(([t,s,Icon]: any) => (
              <div key={t} className="rounded-xl border border-border bg-background/50 p-4">
                <Icon className="h-5 w-5 text-[var(--gold)]"/>
                <div className="mt-2 font-semibold text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        <Logo />
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} EduOcean. Structured execution. Measurable results.</div>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#why" className="hover:text-foreground">Why Us</a>
          <a href="#system" className="hover:text-foreground">System</a>
          <a href="#stories" className="hover:text-foreground">Stories</a>
          <a href="#cta" className="hover:text-foreground">Book a Call</a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Why />
        <System />
        <AI />
        <Compare />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
