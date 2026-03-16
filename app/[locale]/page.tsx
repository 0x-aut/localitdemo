import {useTranslations} from 'next-intl';

export default function HomePage() {
  
  const t = useTranslations('nav');
  const h = useTranslations('hero');
  const s = useTranslations('stats');
  const f = useTranslations('features');
  const p = useTranslations('pricing');
  const c = useTranslations('cta');
  const fo = useTranslations('footer');
  
  
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans overflow-x-hidden">

      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          opacity: 0.4,
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#107A4D]" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#EDEDED]">
            demostore
          </span>
        </div>
        <div className="flex items-center gap-x-8">
          <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] hover:text-[#EDEDED] transition-colors cursor-pointer">
            {t('products')}
          </span>
          <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] hover:text-[#EDEDED] transition-colors cursor-pointer">
            {t('pricing')}
          </span>
          <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] hover:text-[#EDEDED] transition-colors cursor-pointer">
            {t('about')}
          </span>
          <button className="flex items-center gap-x-1.5 px-3 py-1.5 bg-[#107A4D] hover:bg-[#0D6B42] rounded-sm font-sans text-xs tracking-[-0.03em] transition-colors cursor-pointer">
            {t('getStarted')}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-8 pt-24 pb-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-x-2 mb-8">
          <div className="h-px w-8 bg-[#107A4D]" />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#107A4D]">
            {h('eyebrow')}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-sans font-normal tracking-[-0.05em] leading-[0.95] mb-8"
          style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          {h('headline1')}<br />
          <span className="text-[#555555]">{h('headline2')}</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-sm font-light tracking-[-0.03em] text-[#A1A1A1] max-w-md mb-12 leading-relaxed">
          {h('subtext')}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-x-4">
          <button className="flex items-center gap-x-2 px-5 py-2.5 bg-[#107A4D] hover:bg-[#0D6B42] rounded-sm font-sans text-sm tracking-[-0.03em] transition-all duration-150 cursor-pointer">
            {h('cta1')}
            <span className="text-[#22C55E]">→</span>
          </button>
          <button className="flex items-center gap-x-2 px-5 py-2.5 border border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#111111] rounded-sm font-sans text-sm tracking-[-0.03em] text-[#A1A1A1] hover:text-[#EDEDED] transition-all duration-150 cursor-pointer">
            {h('cta2')}
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-x-12 mt-20 pt-8 border-t border-[#1A1A1A]">
          {[
            { value: "10,000+", label: `${s('teams')}` },
            { value: "99.9%", label: `${s('uptime')}` },
            { value: "180ms", label: `${s('response')}` },
            { value: "50+", label: `${s('integrations')}` },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-y-1">
              <span className="font-mono text-xl font-normal tracking-[-0.05em] text-[#EDEDED]">
                {value}
              </span>
              <span className="font-sans text-xs tracking-[-0.03em] text-[#555555]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 py-24 border-t border-[#1A1A1A]">
        <div className="flex items-center gap-x-2 mb-16">
          <div className="h-px w-8 bg-[#2A2A2A]" />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#555555]">
            {f('eyebrow')}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-px bg-[#1A1A1A]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-y-4 p-8 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-colors duration-200 cursor-default"
            >
              <span className="font-mono text-xs text-[#2A2A2A] tracking-[0.1em]">
                {f(`items.${i}.number`)}
              </span>
          
              <h3 className="font-sans text-sm font-normal tracking-[-0.04em] text-[#EDEDED]">
                {f(`items.${i}.title`)}
              </h3>
          
              <p className="font-sans text-xs font-light tracking-[-0.02em] text-[#555555] leading-relaxed">
                {f(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-8 py-24 border-t border-[#1A1A1A]">
        <div className="flex items-center gap-x-2 mb-16">
          <div className="h-px w-8 bg-[#2A2A2A]" />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#555555]">
            {p('eyebrow')}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-4xl">
          {[
            {
              name: "Hobby",
              price: "Free",
              description: "For personal projects and experiments",
              features: [
                "Up to 3 projects",
                "100GB bandwidth",
                "Community support",
                "Basic analytics",
              ],
              cta: "Get started",
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$20",
              description: "For professional developers and small teams",
              features: [
                "Unlimited projects",
                "1TB bandwidth",
                "Priority support",
                "Advanced analytics",
              ],
              cta: "Start free trial",
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large teams with advanced needs",
              features: [
                "Everything in Pro",
                "Custom bandwidth",
                "Dedicated support",
                "SLA guarantee",
              ],
              cta: "Contact sales",
              highlighted: false,
            },
          ].map(({ name, price, description, features, cta, highlighted }) => (
            <div
              key={name}
              className={`flex flex-col gap-y-6 p-6 rounded-sm border ${
                highlighted
                  ? "border-[#107A4D] bg-[#107A4D]/5"
                  : "border-[#2A2A2A] bg-[#111111]"
              }`}
            >
              <div className="flex flex-col gap-y-1">
                <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#555555]">
                  {name}
                </span>
                <span className="font-sans text-2xl font-normal tracking-[-0.05em] text-[#EDEDED]">
                  {price}
                  {price !== "Free" && price !== "Custom" && (
                    <span className="text-sm text-[#555555] font-light"> /month</span>
                  )}
                </span>
                <span className="font-sans text-xs font-light tracking-[-0.02em] text-[#555555]">
                  {description}
                </span>
              </div>

              <div className="flex flex-col gap-y-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-x-2">
                    <div className={`w-1 h-1 rounded-full ${highlighted ? "bg-[#22C55E]" : "bg-[#2A2A2A]"}`} />
                    <span className="font-sans text-xs tracking-[-0.02em] text-[#A1A1A1]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-auto w-full py-2 rounded-sm font-sans text-xs tracking-[-0.02em] transition-all duration-150 cursor-pointer ${
                  highlighted
                    ? "bg-[#107A4D] hover:bg-[#0D6B42] text-white"
                    : "border border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A] text-[#A1A1A1] hover:text-[#EDEDED]"
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 px-8 py-24 border-t border-[#1A1A1A]">
        <div className="flex items-center justify-between max-w-4xl">
          <div className="flex flex-col gap-y-3">
            <h2 className="font-sans text-3xl font-normal tracking-[-0.05em] text-[#EDEDED]">
              Ready to ship faster?
            </h2>
            <p className="font-sans text-sm font-light tracking-[-0.03em] text-[#555555]">
              Join thousands of teams already building with us.
            </p>
          </div>
          <button className="flex items-center gap-x-2 px-6 py-3 bg-[#107A4D] hover:bg-[#0D6B42] rounded-sm font-sans text-sm tracking-[-0.03em] transition-all duration-150 cursor-pointer shrink-0">
            Get started for free
            <span className="text-[#22C55E]">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 border-t border-[#1A1A1A]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#107A4D]" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#555555]">
              DemoStore
            </span>
          </div>
          <div className="flex items-center gap-x-6">
            <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] cursor-pointer hover:text-[#A1A1A1] transition-colors">
              Privacy Policy
            </span>
            <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] cursor-pointer hover:text-[#A1A1A1] transition-colors">
              Terms of Service
            </span>
            <span className="font-sans text-xs tracking-[-0.03em] text-[#555555] cursor-pointer hover:text-[#A1A1A1] transition-colors">
              Contact us
            </span>
          </div>
          <span className="font-mono text-xs text-[#2A2A2A] tracking-[-0.02em]">
            All rights reserved
          </span>
        </div>
      </footer>

    </main>
  )
}