import Link from "next/link";

const stats = [
  { value: "140", suffix: "+", label: "Accredited Services", icon: "◆" },
  { value: "150", suffix: "+", label: "Team members", icon: "◈" },
  { value: "100", suffix: "%", label: "Client Satisfaction", icon: "★" },
  { value: "14", suffix: "+", label: "Branches / Site Offices", icon: "⬢" },
];

export default function CounterSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c598f] py-16 sm:py-20">
      {/* decorative bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c598f] via-[#0e6aa8] to-[#09406a]" />
        <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>
      {/* crane bg image opacity */}
      <img
        src="https://standardarabia.com/assets/img/counter/counter-crain.webp"
        alt=""
        className="absolute bottom-0 right-0 h-full w-auto object-contain opacity-10 pointer-events-none hidden lg:block"
      />
      <img
        src="https://standardarabia.com/assets/img/bg/counter-bg-left.webp"
        alt=""
        className="absolute left-0 top-0 h-full w-auto object-cover opacity-10 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Trustworthy & reliable</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Counting on Excellence,
              <br />
              Everywhere We Serve
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">
              Trusted Across Saudi Arabia and Beyond for Inspection, Training, and Certification Services!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0c598f] hover:bg-gray-50 transition-colors shadow-lg"
              >
                Contact Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7m10 0v10" />
                </svg>
              </Link>
              <a href="tel:+966133670801" className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-xs text-white/70">Talk to an expert</span>
                  <span className="block text-sm font-bold">+966-13-3670801</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            {stats.map((s, i) => (
              <div key={s.label} className={`p-6 sm:p-8 text-center border-white/10 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white text-sm">{s.icon}</div>
                <div className="mt-3 text-3xl font-bold text-white">
                  {s.value}
                  <span className="text-white/80">{s.suffix}</span>
                </div>
                <div className="mt-1 text-xs font-medium text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
