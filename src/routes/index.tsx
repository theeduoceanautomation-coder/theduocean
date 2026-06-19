import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  Compass,
  GraduationCap,
  Target,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Send,
  Cpu,
  Cloud,
  ShieldCheck,
  Building2,
  HeartPulse,
  Factory,
  HardHat,
  Landmark,
  ShoppingBag,
  Users,
  Briefcase,
  BookOpen,
  Lightbulb,
  Rocket,
  Award,
  LineChart,
  Infinity as InfinityIcon,
  Headphones,
  FileCheck,
  Brain,
  X,
  Flag,
} from "lucide-react";
import eduoceanLogo from "@/assets/eduocean-logo.png";
import heroImg from "@/assets/hero-professional.jpg";
import stressedImg from "@/assets/stressed-professional.jpg";
import confidentImg from "@/assets/confident-professional.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduOcean — Personalized Certification & Career Roadmap" },
      { name: "description", content: "Get a personalized certification & career roadmap before you invest time, money, or effort into the wrong path. Free 20-30 min session." },
    ],
  }),
  component: LandingPage,
});

const heroBullets = [
  { icon: Compass, label: "Personalized Career Guidance" },
  { icon: GraduationCap, label: "Certification Path Recommendations" },
  { icon: Target, label: "Career Positioning Strategy" },
  { icon: Sparkles, label: "Industry-Specific Insights" },
  { icon: TrendingUp, label: "Future-Ready Growth Plan" },
];

const heroQuestions = [
  "Which certification aligns with their goals?",
  "Which path offers the strongest opportunities?",
  "Whether certification is still worth it?",
  "How AI is changing their industry?",
  "What employers actually value today?",
  "What their smartest next move should be?",
];

const advisorHelps = [
  "Understand which certifications align with your goals",
  "Explore future career opportunities",
  "Learn how AI is transforming your industry",
  "Identify the most strategic path forward",
  "Build a roadmap based on where you are today and where you want to go next",
];

const mistakeBullets = [
  "Choose the wrong certification",
  "Follow the wrong sequence",
  "Waste months researching",
  "Spend money on programs they don't need",
  "Delay career growth opportunities",
  "Stay stuck in analysis mode",
];

const industries = [
  { icon: Cpu, label: "Technology" },
  { icon: Landmark, label: "Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HardHat, label: "Construction" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Government" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Users, label: "Consulting" },
];

const marketShifts = [
  "Artificial Intelligence is transforming workflows",
  "Cloud infrastructure continues expanding",
  "Cybersecurity demand keeps growing",
  "Project management is evolving",
  "Automation is becoming standard",
];

const examStruggles = [
  "Start without a strategy",
  "Choose certifications based on trends",
  "Follow advice from random online sources",
  "Study without accountability",
  "Lack mentorship",
  "Lack clarity about outcomes",
];

const sessionPoints = [
  "Which certifications align with your goals",
  "Which sequence makes the most sense",
  "Which opportunities exist in your industry",
  "How AI affects your career trajectory",
  "Which skills employers value most",
  "What realistic timelines look like",
  "What your next steps should be",
];

const ecosystem = [
  { icon: Users, label: "Live Instructor-Led Bootcamps" },
  { icon: Lightbulb, label: "Expert Mentorship" },
  { icon: BookOpen, label: "Practical Learning Frameworks" },
  { icon: FileCheck, label: "Certification Preparation" },
  { icon: Briefcase, label: "Application Support" },
  { icon: Award, label: "Exam Guidance" },
  { icon: LineChart, label: "Career Growth Insights" },
  { icon: Brain, label: "AI Positioning Frameworks" },
  { icon: InfinityIcon, label: "Lifetime Learning Resources" },
  { icon: Headphones, label: "Ongoing Professional Development" },
];

const certPaths = [
  { group: "Project Management", items: ["PMP", "Agile", "Scrum"] },
  { group: "Technology & Cloud", items: ["AWS", "Microsoft Azure", "DevOps"] },
  { group: "Cybersecurity", items: ["CISSP", "CISM", "CEH"] },
  { group: "Data & AI", items: ["Data Analytics", "Artificial Intelligence"] },
  { group: "Service Management", items: ["ITIL"] },
];

const audience = [
  "Want career growth",
  "Want higher-paying opportunities",
  "Want promotions",
  "Want to transition into new roles",
  "Want clarity before investing in certification",
  "Want to future-proof their careers",
  "Want to understand AI's impact on their industry",
  "Want a structured growth plan",
];

const faqs = [
  {
    q: "Is the roadmap session really free?",
    a: "Yes. The session is designed to help you gain clarity before making major career decisions.",
  },
  {
    q: "Will I be pressured into buying something?",
    a: "No. The purpose of the session is to help you understand your options and make informed decisions.",
  },
  { q: "How long does the session take?", a: "Typically between 20 and 30 minutes." },
  {
    q: "Can beginners attend?",
    a: "Yes. Whether you're starting your career or have years of experience, the roadmap is personalized to your situation.",
  },
  {
    q: "What certifications do you cover?",
    a: "We discuss a wide range of globally recognized certifications across project management, cloud, cybersecurity, AI, data, service management, and more.",
  },
  {
    q: "How does AI fit into the roadmap?",
    a: "We help you understand how AI may impact your industry and where opportunities may emerge in the future.",
  },
];

const aiTracks = [
  { icon: Briefcase, title: "AI + PMP", desc: "Project managers using AI to automate planning, reporting and risk analysis." },
  { icon: Cloud, title: "AI + Cloud", desc: "Cloud architects leveraging AI to optimize infrastructure and cost." },
  { icon: ShieldCheck, title: "AI + Cybersecurity", desc: "Security pros deploying AI for threat detection and response." },
  { icon: Rocket, title: "AI + DevOps", desc: "DevOps engineers using AI to accelerate delivery and observability." },
];

function openVoiceflowChat() {
  if (typeof window !== "undefined" && (window as any).voiceflow?.chat) {
    (window as any).voiceflow.chat.open();
  }
}

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <button
      type="button"
      onClick={openVoiceflowChat}
      className={`inline-flex items-center justify-center rounded-md bg-orange-grad font-semibold text-orange-foreground shadow-glow-orange transition-transform hover:scale-[1.02] ${
        large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      }`}
    >
      {children}
    </button>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{children}</p>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <img src={eduoceanLogo} alt="EduOcean Logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold">
              The Edu<span className="text-primary">Ocean</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 md:flex">
            <a href="#certifications" className="hover:text-foreground">Certifications</a>
            <a href="#about" className="hover:text-foreground">About Us</a>
            <a href="#why" className="hover:text-foreground">Why EduOcean</a>
            <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <button
            type="button"
            onClick={openVoiceflowChat}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book Free Session
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:py-20">
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              Still Not Sure Which Certification Is Actually Worth Doing In 2026?
            </h1>
            <p className="mt-5 text-lg text-foreground/80">
              Get a Personalized Certification & Career Roadmap Before You Invest Time, Money, or Effort Into the Wrong Path.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every day, professionals spend hours researching certifications like PMP, AWS, Azure, CISSP, CISM, CEH, Agile, DevOps, AI, Data Analytics, ITIL, and more.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {heroBullets.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-[11px] font-medium leading-tight text-foreground/80">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton large>BOOK YOUR FREE CAREER ROADMAP SESSION</CTAButton>
              <p className="mt-3 text-sm text-muted-foreground">No pressure. No obligation. Just clarity.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImg}
                alt="Professional considering certification options"
                width={1280}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 bottom-6 hidden w-72 rounded-xl bg-card p-5 shadow-card lg:block">
              <p className="text-xs font-semibold text-navy">Most professionals don't know:</p>
              <ul className="mt-3 space-y-2.5">
                {heroQuestions.map((q) => (
                  <li key={q} className="flex gap-2 text-xs text-foreground/80">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-[10px] font-bold">?</span>
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP / CHATBOT */}
      <section className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Get Your Personalized Certification & Career Roadmap
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Before committing to any certification, training program, or career transition, you deserve complete clarity.
              </p>
              <p className="mt-6 text-sm font-semibold text-navy">Tell us:</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {["Your current role", "Your experience level", "Your industry", "Your career goals", "Certifications you're considering"].map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card shadow-card">
              <div className="flex items-center gap-3 rounded-t-2xl bg-primary p-4 text-primary-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <img src={eduoceanLogo} alt="EduOcean Logo" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold">EduOcean Career Advisor</p>
                  <p className="flex items-center gap-1.5 text-[11px] opacity-90">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online
                  </p>
                </div>
              </div>
              <div className="space-y-3 p-4">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted p-3 text-sm text-foreground/85">
                  Hi! I'm your Career Advisor 👋
                  <br />I'll help you find the right certification path and build your personalized roadmap.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted p-3 text-sm text-foreground/85">
                  Let's get started. What is your current role?
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-navy">Our Career Advisor will help you:</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {advisorHelps.map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { t: "100% FREE", s: "No commitment" },
              { t: "20-30 MINUTES", s: "Personalized Session" },
              { t: "EXPERT GUIDANCE", s: "Career Specialists" },
            ].map((b) => (
              <div key={b.t} className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-center">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs font-bold tracking-wider text-navy">{b.t}</p>
                  <p className="text-[11px] text-muted-foreground">{b.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISTAKE / CLARITY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionTag>The biggest career mistake professionals make</SectionTag>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Most People Think They Have A Certification Problem. They Don't.
                </h2>
                <p className="mt-4 text-sm font-semibold text-navy">They have a clarity problem.</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  The internet gives endless information. But information alone doesn't create confidence.
                </p>
                <p className="mt-6 text-sm font-semibold text-navy">Without a roadmap, professionals often:</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {mistakeBullets.map((m) => (
                    <li key={m} className="flex gap-2 text-sm text-foreground/80">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" /> {m}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <button type="button" onClick={openVoiceflowChat} className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    BOOK YOUR FREE ROADMAP SESSION
                  </button>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl bg-soft p-6 text-center">
                  <p className="text-sm font-semibold text-navy">Without A Roadmap</p>
                  <p className="mt-1 text-xs text-muted-foreground">Confusion. Delays. Missed Opportunities.</p>
                  <div className="mt-6 flex h-44 items-center justify-center">
                    <div className="relative">
                      <svg viewBox="0 0 160 120" className="h-32 w-44">
                        <path
                          d="M20 60 C 30 30, 60 90, 80 50 C 100 10, 60 100, 100 60 C 130 30, 70 80, 110 60 C 130 50, 100 30, 130 60"
                          fill="none"
                          stroke="oklch(0.5 0.2 258)"
                          strokeWidth="2"
                          opacity="0.7"
                        />
                      </svg>
                      <div className="absolute -right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-orange-foreground">
                        <X className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-primary/5 p-6 text-center">
                  <p className="text-sm font-semibold text-navy">With A Roadmap</p>
                  <p className="mt-1 text-xs text-muted-foreground">Clarity. Direction. Career Growth.</p>
                  <div className="mt-6 flex h-44 items-end justify-center">
                    <svg viewBox="0 0 160 120" className="h-32 w-44">
                      <path
                        d="M10 100 Q 60 95 80 70 T 140 20"
                        fill="none"
                        stroke="oklch(0.5 0.2 258)"
                        strokeWidth="2.5"
                      />
                      <circle cx="10" cy="100" r="3" fill="oklch(0.5 0.2 258)" />
                      <circle cx="80" cy="70" r="3" fill="oklch(0.5 0.2 258)" />
                    </svg>
                    <Flag className="-ml-3 h-6 w-6 text-orange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionTag>The market is changing</SectionTag>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                The Market Is Changing Faster Than Most People Realize
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Across every industry, employers are looking for professionals who can adapt to change.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {marketShifts.map((m) => (
                  <div key={m} className="rounded-lg bg-card p-3 text-center shadow-soft">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-[11px] leading-tight text-foreground/75">{m}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border-l-4 border-primary bg-card p-5 shadow-soft">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">The question is no longer:</p>
                <p className="mt-1 text-base font-semibold text-foreground/90">"Should I learn new skills?"</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">The question is:</p>
                <p className="mt-1 text-base font-semibold text-navy">
                  "Which skills will matter most over the next 3–5 years?"
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-navy p-8 text-white">
              <h3 className="text-xl font-bold text-white">Industries Are Rapidly Evolving</h3>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {industries.map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-lg bg-white/5 p-3 text-center backdrop-blur">
                    <Icon className="mx-auto h-6 w-6 text-orange" />
                    <p className="mt-2 text-[11px] text-white/85">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-white/70">
                The professionals who position themselves early create opportunities. The professionals who wait usually spend years catching up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAM + ROADMAP SESSION */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="grid sm:grid-cols-2">
              <div className="p-7">
                <SectionTag>Why most certification journeys fail</SectionTag>
                <h3 className="mt-3 text-2xl font-bold">The Exam Is Rarely The Hardest Part.</h3>
                <p className="mt-2 text-sm text-muted-foreground">Everything before the exam is.</p>
                <p className="mt-5 text-sm font-semibold text-navy">Most professionals struggle because they:</p>
                <ul className="mt-3 space-y-2">
                  {examStruggles.map((e) => (
                    <li key={e} className="flex gap-2 text-sm text-foreground/80">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[260px] bg-soft">
                <img src={stressedImg} alt="Frustrated professional" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover grayscale" />
              </div>
            </div>
          </div>

          <div id="book" className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="grid sm:grid-cols-2">
              <div className="p-7">
                <SectionTag>Introducing the EduOcean</SectionTag>
                <h3 className="mt-1 text-2xl font-bold">Career Roadmap Session</h3>
                <p className="mt-3 text-sm font-semibold text-navy">
                  One Conversation Can Save You Months Of Confusion
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  During your roadmap session, we'll help you understand:
                </p>
                <ul className="mt-4 space-y-2">
                  {sessionPoints.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {s}
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={openVoiceflowChat} className="mt-5 inline-flex rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
                  BOOK YOUR FREE ROADMAP SESSION
                </button>
              </div>
              <div className="relative min-h-[260px] bg-orange/10">
                <img src={confidentImg} alt="Confident professional" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EDUOCEAN COMPARISON */}
      <section id="why" className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <SectionTag>Why thousands of professionals choose EduOcean</SectionTag>
              <h3 className="mt-2 text-2xl font-bold">We Focus On Outcomes, Not Just Content</h3>
              <p className="mt-3 text-sm text-muted-foreground">EduOcean provides a structured path:</p>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {["Clarity", "Strategy", "Action", "Certification", "Career Growth", "Future Positioning"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {i === 0 ? <Compass className="h-4 w-4" /> :
                         i === 1 ? <Target className="h-4 w-4" /> :
                         i === 2 ? <Rocket className="h-4 w-4" /> :
                         i === 3 ? <Award className="h-4 w-4" /> :
                         i === 4 ? <LineChart className="h-4 w-4" /> :
                         <Flag className="h-4 w-4" />}
                      </div>
                      <span className="mt-1 text-[10px] font-medium text-foreground/70">{s}</span>
                    </div>
                    {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                We help professionals move from uncertainty to execution. Because certification alone is not the goal. Career growth is.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-soft p-4">
                  <p className="text-xs font-bold uppercase text-navy">Others Provide</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                    {["Recorded videos", "Generic study material", "Minimal guidance", "Limited support"].map((o) => (
                      <li key={o} className="flex gap-2"><X className="h-3.5 w-3.5 text-orange" /> {o}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs italic text-muted-foreground">Then leave the rest to you.</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <p className="text-xs font-bold uppercase text-primary">EduOcean Provides</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-foreground/80">
                    {["Strategic Guidance", "Structured Execution", "Expert Mentorship", "End-to-End Support"].map((o) => (
                      <li key={o} className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {o}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs italic text-primary/80">We stay with you throughout.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <SectionTag>What makes EduOcean different</SectionTag>
              <h3 className="mt-2 text-2xl font-bold">A Complete Ecosystem Designed For Your Success</h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {ecosystem.map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-lg border border-border bg-soft p-4 text-center transition hover:border-primary hover:shadow-soft">
                    <Icon className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-[11px] font-medium text-foreground/80">{label}</p>
                  </div>
                ))}
              </div>
              <button type="button" onClick={openVoiceflowChat} className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                BOOK YOUR FREE ROADMAP SESSION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI + CERTIFICATION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionTag>The future of work</SectionTag>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Certification Alone Is No Longer Enough</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              The future belongs to professionals who combine domain expertise with AI literacy. That's why every roadmap session includes guidance on how AI may impact your career path.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiTracks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-grad text-orange-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <Brain className="h-3 w-3" /> AI-Integrated
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION PATHS */}
      <section id="certifications" className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <SectionTag>Paths we cover</SectionTag>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Certification Paths We Help Professionals Explore</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              The right path depends on your goals. That's why we start with strategy first.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certPaths.map((p) => (
              <div key={p.group} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <p className="text-sm font-bold text-navy">{p.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.items.map((i) => (
                    <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl bg-navy p-10 text-white sm:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionTag>Who this is for</SectionTag>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Built For Professionals Who Want More</h2>
                <p className="mt-4 text-sm text-white/75">
                  If that sounds like you, this session was built for you.
                </p>
                <button type="button" onClick={openVoiceflowChat} className="mt-6 inline-flex rounded-md bg-orange-grad px-6 py-3 text-sm font-semibold text-orange-foreground shadow-glow-orange">
                  BOOK MY FREE ROADMAP SESSION
                </button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {audience.map((a) => (
                  <li key={a} className="flex gap-2 rounded-lg bg-white/5 p-3 text-sm text-white/90 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <SectionTag>Success Stories</SectionTag>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Real Results From Professionals Like You</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { n: "Rohan M.", r: "Cloud Engineer → Solutions Architect", q: "EduOcean gave me a sequence to follow. I stopped guessing and started progressing. Got my AWS Solutions Architect and a 40% raise within 8 months." },
              { n: "Priya S.", r: "Project Coordinator → PMP Lead", q: "The roadmap session alone gave me more clarity than weeks of YouTube videos. PMP-certified, promoted, and now mentoring my own team." },
              { n: "Ahmed K.", r: "IT Support → Cybersecurity Analyst", q: "I didn't know whether to pick CISSP or CEH. The advisor walked me through the realistic path. Now I'm certified and working in a SOC team." },
            ].map((t) => (
              <div key={t.n} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{t.q}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-navy">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <SectionTag>FAQ</SectionTag>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 shadow-soft transition open:shadow-card">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-navy">
                  {f.q}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Your Career Will Change Over The Next Few Years.
          </h2>
          <p className="mt-4 text-lg text-orange">The only question is whether you'll be ready for it.</p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/80">Every week we speak to professionals who tell us:</p>
            <p className="mt-2 text-lg font-semibold italic text-white">"I wish I had started earlier."</p>
            <ul className="mt-5 grid gap-2 text-left sm:grid-cols-2">
              {["Certified", "Interviewing", "Getting promoted", "Transitioning careers"].map((i) => (
                <li key={i} className="flex gap-2 text-sm text-white/85">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-orange" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Clarity creates action. Action creates opportunities. Your next opportunity may start with one conversation.
          </p>

          <div className="mt-8">
            <CTAButton large>BOOK MY FREE ROADMAP SESSION</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-grad">
              <Sparkles className="h-4 w-4 text-orange-foreground" />
            </div>
            <span className="font-display text-lg font-bold">
              The Edu<span className="text-primary">Ocean</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Not Just Certification. <span className="font-semibold text-navy">Structured Execution.</span> Future-Ready Positioning.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">© 2026 EduOcean. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
