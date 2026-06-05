import {
  CheckCircle,
  FileText,
  Zap,
  Download,
  Users,
  Shield,
  ClipboardList,
  Wrench,
  HardHat,
  ChevronDown,
} from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

const TRADES = ["HVAC", "Plumbing", "Electrical", "Roofing", "Landscaping", "General Contracting"];

const DOC_TYPES = [
  { icon: Shield, label: "Safety SOPs", desc: "OSHA-ready lockout/tagout, PPE, and hazard procedures" },
  { icon: ClipboardList, label: "Onboarding Checklists", desc: "Day-1 to day-30 onboarding plans for new hires" },
  { icon: Wrench, label: "Service Procedures", desc: "Step-by-step procedures for every service your team runs" },
  { icon: FileText, label: "Employee Handbooks", desc: "Policies, expectations, and conduct guidelines" },
  { icon: HardHat, label: "Equipment Procedures", desc: "Safe operation and maintenance guides for your tools" },
  { icon: Users, label: "Training Materials", desc: "Apprentice guides and skill certification checklists" },
];

const STEPS = [
  {
    number: "01",
    title: "Pick your trade and document",
    desc: "Select from HVAC, plumbing, electrical, roofing, and more. Then choose the document type you need.",
  },
  {
    number: "02",
    title: "Add your business details",
    desc: "Enter your company name, state, team size, and any specifics. FieldDocs tailors everything to your business.",
  },
  {
    number: "03",
    title: "Download your document",
    desc: "Get a professionally formatted, ready-to-use PDF in under 60 seconds. Edit it, print it, or share it with your crew.",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "$12",
    credits: "5 documents",
    description: "Perfect for testing it out or a one-time project.",
    features: ["5 document credits", "All document types", "PDF export", "Edit before exporting"],
    highlight: false,
  },
  {
    name: "Builder",
    price: "$29",
    credits: "15 documents",
    description: "Best for businesses building out their SOP library.",
    features: ["15 document credits", "All document types", "PDF + Word export", "Edit before exporting", "Priority generation"],
    highlight: true,
  },
  {
    name: "Operator",
    price: "$59",
    credits: "35 documents",
    description: "For growing teams that need complete documentation.",
    features: ["35 document credits", "All document types", "PDF + Word export", "Edit before exporting", "Priority generation", "Team sharing"],
    highlight: false,
  },
];

const FAQS = [
  {
    q: "What trades does FieldDocs support?",
    a: "HVAC, plumbing, electrical, roofing, landscaping, and general contracting. We're adding more trades based on waitlist demand.",
  },
  {
    q: "Are the documents OSHA-compliant?",
    a: "FieldDocs generates documents aligned with OSHA standards for your trade and state. We recommend having your safety officer review any safety-critical procedures before use.",
  },
  {
    q: "Can I edit the documents after generating them?",
    a: "Yes. Every document has an inline editor before export. You can tweak wording, add company-specific steps, or adjust any details.",
  },
  {
    q: "What format do documents come in?",
    a: "PDF is available on all plans. Word (.docx) export is available on Builder and Operator plans.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Credits never expire. Buy a pack and use them whenever you need them — no monthly billing pressure.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If a generated document doesn't meet your needs and you haven't exported it, we'll refund that credit.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">FieldDocs</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hidden sm:block text-sm text-slate-600 hover:text-slate-900 transition">
              Pricing
            </a>
            <a href="#faq" className="hidden sm:block text-sm text-slate-600 hover:text-slate-900 transition">
              FAQ
            </a>
            <a
              href="/generate"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Try Generator
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 transition"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-24 px-4 sm:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top, #fff7ed 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-sm font-medium text-orange-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Now accepting waitlist signups
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Build SOPs & Training Docs for Your{" "}
            <span className="text-orange-600">Trades Business</span>
            {" "}— In Minutes
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            FieldDocs generates OSHA-ready procedures, onboarding checklists, and service SOPs
            tailored to your trade. No consultants. No blank pages. Just documents your crew can use today.
          </p>

          <div id="waitlist" className="max-w-md mx-auto mb-6">
            <WaitlistForm size="large" />
            <p className="mt-3 text-sm text-slate-500">
              Free to join. No credit card required.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-sm"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              Try the generator free →
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {TRADES.map((trade) => (
              <span
                key={trade}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "< 60s", label: "Avg. generation time" },
            { value: "12+", label: "Document types" },
            { value: "6", label: "Trades supported" },
            { value: "100%", label: "Editable before export" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-orange-500 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Growing your crew shouldn&apos;t mean drowning in paperwork
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every trades business owner knows the moment: you hire your third technician and suddenly
              you need documented procedures, safety policies, and onboarding materials — yesterday.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: "💸",
                title: "Consultants cost $2k–$5k",
                desc: "Hiring a compliance consultant to write your SOPs is expensive and slow. Most charge per document and take weeks.",
              },
              {
                icon: "⏱️",
                title: "Starting from scratch takes days",
                desc: "Generic Word templates don't know your trade. You spend more time editing than you saved by using a template.",
              },
              {
                icon: "⚠️",
                title: "Skipping them creates liability",
                desc: "Without documented procedures, OSHA fines and workplace incidents fall directly on you. The paperwork isn't optional.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-7"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-orange-50 py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Three steps to a finished document
            </h2>
            <p className="text-lg text-slate-600">
              No learning curve. No setup. Just pick what you need and download it.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-extrabold text-orange-200 leading-none mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document types */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Every document your business needs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built specifically for trades — not copy-pasted from corporate HR templates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOC_TYPES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-100 bg-white p-6 hover:border-orange-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FieldDocs */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built for the trades. Not adapted from them.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generic AI tools give you generic output. FieldDocs knows the difference between
              an HVAC lockout procedure and an electrical one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Zap, title: "Trade-specific language", desc: "Documents use the correct terminology for your trade — no generic corporate-speak that confuses your techs." },
              { icon: Shield, title: "OSHA-aligned by default", desc: "Safety documents are generated with current OSHA standards for your industry and state baked in." },
              { icon: Download, title: "Ready to use, not ready to edit", desc: "You get a finished document, not a starting point. Minor tweaks are all that's needed." },
              { icon: CheckCircle, title: "Credits never expire", desc: "Buy when you need documents. No subscription pressure. Credits roll over indefinitely." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-slate-800 p-6">
                <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Pay for what you use
            </h2>
            <p className="text-lg text-slate-600">
              No monthly fees. No contracts. Credits never expire. Buy more when you need them.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="inline-block rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white mb-4 self-start">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-slate-900 text-lg">{plan.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                </div>
                <p className="text-sm font-medium text-orange-600 mb-2">{plan.credits}</p>
                <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`w-full rounded-xl py-3 text-sm font-semibold text-center transition ${
                    plan.highlight
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-slate-900 text-white hover:bg-slate-700"
                  }`}
                >
                  Join Waitlist
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Early access members get <strong>2 free credits</strong> when FieldDocs launches.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 list-none select-none">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-600 py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Stop putting off the paperwork
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-lg mx-auto">
            Join the waitlist. Get 2 free documents when we launch. Be the owner your crew knows
            has everything documented.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm size="large" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center">
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white">FieldDocs</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} FieldDocs. Built for the trades.
          </p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms</a>
            <a href="mailto:hello@fielddocs.co" className="hover:text-slate-300 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
