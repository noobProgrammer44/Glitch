import { useState, useEffect, useRef } from "react";

// =========================================================
// EARBUD SVG — stylized original, no brand copy
// =========================================================
const colorways = {
  graphite: { a: "#2a2a2e", b: "#0e0e10", c: "#55555c", ring: "#0a0a0b" },
  pearl: { a: "#ecebe4", b: "#b8b5aa", c: "#fff", ring: "#d9d6c9" },
  cobalt: { a: "#3546a8", b: "#0b1228", c: "#6073d8", ring: "#0b1228" },
  rose: { a: "#b86a5e", b: "#3a1a18", c: "#d99285", ring: "#2a0f0d" },
} as const;

type Colorway = keyof typeof colorways;s

function Earbud({
  size = 420,
  colorway = "graphite",
  tilt = 0,
}: {
  size?: number;
  colorway?: Colorway;
  tilt?: number;
}) {
  const p = colorways[colorway];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      style={{ transform: `rotate(${tilt}deg)`, overflow: "visible" }}
    >
      <defs>
        <radialGradient id={`body-${colorway}`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="55%" stopColor={p.a} />
          <stop offset="100%" stopColor={p.b} />
        </radialGradient>
        <radialGradient id={`stem-${colorway}`} cx="30%" cy="20%" r="120%">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="70%" stopColor={p.a} />
          <stop offset="100%" stopColor={p.b} />
        </radialGradient>
        <linearGradient id={`hl-${colorway}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter
          id="softshadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="0" dy="20" result="off" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.45" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse
        cx="200"
        cy="370"
        rx="110"
        ry="12"
        fill="rgba(0,0,0,0.55)"
        opacity="0.8"
      />
      <g filter="url(#softshadow)">
        <path
          d="M 260 120 C 320 130, 330 210, 290 250 C 270 270, 240 260, 225 240 C 215 228, 210 215, 212 200 C 214 175, 180 170, 175 145 C 170 115, 215 110, 260 120 Z"
          fill={`url(#body-${colorway})`}
          stroke={p.ring}
          strokeWidth="1"
        />
        <path
          d="M 172 150 L 156 340 Q 155 355, 170 356 L 195 356 Q 210 355, 209 340 L 215 175 Z"
          fill={`url(#stem-${colorway})`}
          stroke={p.ring}
          strokeWidth="1"
        />
        <ellipse
          cx="252"
          cy="200"
          rx="26"
          ry="22"
          fill={p.b}
          opacity="0.9"
        />
        <g opacity="0.35">
          {Array.from({ length: 9 }).map((_, i) => (
            <circle
              key={i}
              cx={252 + ((i % 3) - 1) * 10}
              cy={200 + (Math.floor(i / 3) - 1) * 8}
              r="1.2"
              fill="#fff"
            />
          ))}
        </g>
        <rect x="155" y="250" width="60" height="1.5" fill={p.c} opacity="0.5" />
        <circle cx="185" cy="270" r="3" fill={p.c} opacity="0.7" />
        <path
          d="M 195 135 C 240 120, 275 140, 280 170 C 260 155, 220 150, 200 160 Z"
          fill={`url(#hl-${colorway})`}
        />
        <path
          d="M 160 180 L 164 330 Q 165 338, 172 338 L 176 338 L 171 180 Z"
          fill={`url(#hl-${colorway})`}
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

// =========================================================
// SCROLL REVEAL HOOK
// =========================================================
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// =========================================================
// NAV
// =========================================================
function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 lg:px-10 py-5 flex items-center justify-between backdrop-blur-[14px] transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(10,10,11,0.82)] border-b border-[--landing-line]"
          : "bg-gradient-to-b from-[rgba(10,10,11,0.7)] to-transparent"
      }`}
    >
      <div className="font-bold text-lg tracking-tight flex items-center gap-2">
        <span className="w-[7px] h-[7px] rounded-full bg-[--landing-accent] shadow-[0_0_12px_var(--landing-accent)]" />
        GLITCH
      </div>
      <div className="hidden lg:flex gap-9 text-[13px] text-[--landing-fg-dim]">
        <a href="#products" className="hover:text-[--landing-fg] transition-colors">Products</a>
        <a href="#features" className="hover:text-[--landing-fg] transition-colors">Features</a>
        <a href="#sound" className="hover:text-[--landing-fg] transition-colors">Sound</a>
        <a href="#compare" className="hover:text-[--landing-fg] transition-colors">Compare</a>
        <a href="#support" className="hover:text-[--landing-fg] transition-colors">Support</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-[--landing-fg-dim] text-[13px] hidden sm:block hover:text-[--landing-fg] transition-colors">
          Sign in
        </a>
        <button className="border border-[--landing-line] bg-transparent text-[--landing-fg] px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 hover:border-[rgba(245,243,238,0.3)] hover:bg-[rgba(245,243,238,0.04)] transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.5a2 2 0 0 0 2-1.6L21 8H6" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="17" cy="20" r="1.5" />
          </svg>
          Cart
        </button>
      </div>
    </nav>
  );
}

// =========================================================
// HERO
// =========================================================
function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX / window.innerWidth;
      mouseRef.current.ty = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);
    let raf: number;
    const tick = () => {
      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.08;
      m.y += (m.ty - m.y) * 0.08;
      if (glowRef.current) {
        const dx = (m.x - 0.5) * 200;
        const dy = (m.y - 0.5) * 200;
        glowRef.current.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      }
      if (stageRef.current) {
        const rx = (m.y - 0.5) * -10;
        const ry = (m.x - 0.5) * 14;
        stageRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen px-6 lg:px-10 pt-[140px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(var(--landing-line) 1px, transparent 1px), linear-gradient(90deg, var(--landing-line) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.18] blur-[80px]"
          style={{
            background: "radial-gradient(circle, var(--landing-accent) 0%, transparent 60%)",
            transition: "transform 600ms cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        />
      </div>

      {/* Copy */}
      <div className="relative z-[2] max-w-[560px]">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-[7px] border border-[--landing-line] rounded-full mb-7 reveal in">
          <span className="w-1.5 h-1.5 rounded-full bg-[--landing-accent] animate-[landing-pulse_2s_infinite]" />
          <span className="font-mono-jb text-[10px] tracking-[0.22em] uppercase text-[--landing-fg-dim]">
            New · Glitch Pro · Gen 3
          </span>
        </div>
        <h1
          className="font-semibold leading-[0.9] tracking-[-0.04em] mb-7 reveal in"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", transitionDelay: "120ms" }}
        >
          Hear Every{" "}
          <em
            className="not-italic bg-clip-text text-transparent animate-[landing-sheen_6s_ease-in-out_infinite]"
            style={{
              backgroundImage: "linear-gradient(110deg, var(--landing-fg) 40%, var(--landing-accent) 60%, var(--landing-fg) 80%)",
              backgroundSize: "200% 100%",
            }}
          >
            Detail
          </em>
        </h1>
        <p
          className="text-[19px] leading-[1.55] text-[--landing-fg-dim] font-light mb-10 max-w-[460px] reveal in"
          style={{ transitionDelay: "240ms" }}
        >
          Adaptive spatial audio, 30 hours of silence, and a fit that disappears.
          Engineered for people who listen closely.
        </p>
        <div className="flex gap-4 items-center mb-14 reveal in" style={{ transitionDelay: "360ms" }}>
          <button className="group bg-[--landing-fg] text-[#0a0a0b] border-none px-8 py-4 rounded-full text-sm font-semibold tracking-tight cursor-pointer font-display inline-flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(245,243,238,0.3),0_0_60px_-10px_var(--landing-accent)] transition-all duration-400">
            Shop Glitch Pro — $249
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <button className="bg-transparent text-[--landing-fg] border border-[--landing-line] px-7 py-4 rounded-full text-sm font-medium cursor-pointer font-display hover:border-[rgba(245,243,238,0.25)] hover:bg-[rgba(245,243,238,0.03)] transition-all">
            Explore features
          </button>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-[--landing-line] pt-7 max-w-[520px] reveal in"
          style={{ transitionDelay: "480ms" }}
        >
          {[
            { num: "30", unit: "h", label: "Playtime" },
            { num: "−42", unit: "dB", label: "ANC Depth" },
            { num: "24", unit: "bit", label: "Lossless" },
            { num: "3.9", unit: "g", label: "Per bud" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[28px] font-medium tracking-tight mb-1">
                {s.num}
                <small className="text-[13px] text-[--landing-fg-mute] font-normal">{s.unit}</small>
              </div>
              <div className="font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product */}
      <div className="relative z-[2] w-full aspect-square flex items-center justify-center order-first lg:order-last" style={{ perspective: "1200px" }}>
        <div
          ref={stageRef}
          className="relative w-full max-w-[560px] aspect-square"
          style={{ transformStyle: "preserve-3d", animation: "landing-float 7s ease-in-out infinite" }}
        >
          <div className="absolute inset-[-2%] rounded-full border border-dashed border-[rgba(245,243,238,0.08)] animate-[landing-spin_80s_linear_infinite]" />
          <div className="absolute inset-[5%] rounded-full border border-[--landing-line]" />
          <div className="absolute inset-[14%] rounded-full border border-[rgba(245,243,238,0.05)]" />
          <div className="absolute inset-[23%] rounded-full border border-[rgba(245,243,238,0.03)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Earbud size={460} colorway="graphite" />
          </div>
          {/* Orbit tags */}
          <div className="absolute top-[10%] right-[8%] font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] bg-[rgba(10,10,11,0.8)] px-2.5 py-1.5 border border-[--landing-line] rounded hidden lg:block">
            Titanium driver · 11mm
          </div>
          <div className="absolute bottom-[18%] left-[4%] font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] bg-[rgba(10,10,11,0.8)] px-2.5 py-1.5 border border-[--landing-line] rounded hidden lg:block">
            H-Class chipset
          </div>
          <div className="absolute top-[48%] right-[-2%] font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] bg-[rgba(10,10,11,0.8)] px-2.5 py-1.5 border border-[--landing-line] rounded hidden lg:block">
            6-mic array
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SHOWCASE — scroll-driven rotate + captions
// =========================================================
function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!trackRef.current) return;
      const r = trackRef.current.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProg(p);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rotate = prog * 380 - 20;
  const scale = 1 + prog * 0.15;

  const captions = [
    { range: [0.05, 0.45], pos: "c1", num: "01 — Shell", title: "Hand-finished alumide.", desc: "A single seamless shell, machined from one piece, then matte-etched for grip in any condition." },
    { range: [0.4, 0.75], pos: "c2", num: "02 — Sensors", title: "Six microphones.\nZero guesswork.", desc: "A dedicated bone-conduction mic isolates your voice from wind, traffic, and noise." },
    { range: [0.7, 1], pos: "c3", num: "03 — Fit", title: "3.9 grams per bud.", desc: "Four sizes of memory-foam tips and an ergonomic stem balanced so you forget they're there." },
  ];

  return (
    <section
      id="products"
      className="px-6 lg:px-10 py-60"
      style={{ background: "linear-gradient(180deg, var(--landing-bg) 0%, var(--landing-bg-2) 50%, var(--landing-bg) 100%)" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[720px] mb-24 reveal">
          <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-current" />
            02 / Product
          </div>
          <h2
            className="font-medium leading-[0.95] tracking-[-0.035em] mb-5"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
          >
            Machined.<br />Measured.<br />Intentional.
          </h2>
          <p className="text-xl text-[--landing-fg-dim] font-light leading-relaxed max-w-[560px]">
            Every surface is a sensor. Every edge is intentional. Scroll to orbit.
          </p>
        </div>
      </div>
      <div ref={trackRef} className="relative" style={{ minHeight: "260vh" }}>
        <div className="sticky top-20 h-[70vh] flex items-center justify-center">
          <div className="relative" style={{ width: "min(640px, 80vw)", aspectRatio: "1" }}>
            <div className="absolute inset-[5%] rounded-full border border-dashed border-[rgba(245,243,238,0.06)]" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)`, transition: "transform 60ms linear" }}
            >
              <Earbud size={520} colorway="graphite" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {captions.map((c) => {
            const active = prog > c.range[0] && prog < c.range[1];
            return (
              <div
                key={c.num}
                className={`absolute w-[280px] transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"} ${
                  c.pos === "c1" ? "top-[20%] left-6 lg:left-10" : c.pos === "c2" ? "top-[55%] right-6 lg:right-10 text-right" : "top-[90%] left-6 lg:left-10"
                }`}
              >
                <div className="font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] mb-2.5">
                  {c.num}
                </div>
                <h3 className="text-4xl font-medium tracking-tight leading-none mb-3 whitespace-pre-line">
                  {c.title}
                </h3>
                <p className="text-[15px] text-[--landing-fg-dim] leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// FEATURE MINI VISUALS
// =========================================================
function ANCVis() {
  return (
    <svg width="100%" height="180" viewBox="0 0 400 180">
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M 0 ${90 + Math.sin(i) * 8} Q 100 ${60 - i * 3}, 200 ${90 + Math.sin(i) * 10} T 400 ${90 + Math.cos(i) * 6}`}
          fill="none"
          stroke="var(--landing-fg)"
          strokeWidth="1"
          opacity={0.08 + i * 0.04}
        />
      ))}
      <g opacity="0.9">
        <path d="M 0 90 Q 100 40, 200 90 T 400 90" fill="none" stroke="var(--landing-accent)" strokeWidth="1.5" />
        <path d="M 0 90 Q 100 140, 200 90 T 400 90" fill="none" stroke="var(--landing-accent)" strokeWidth="1.5" opacity="0.5" />
      </g>
      <text x="20" y="30" fill="var(--landing-fg-mute)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">INCOMING</text>
      <text x="320" y="30" fill="var(--landing-accent)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">CANCELLED</text>
    </svg>
  );
}

function WaveformMini() {
  const bars = 36;
  return (
    <svg width="100%" height="140" viewBox="0 0 360 140" preserveAspectRatio="none">
      {Array.from({ length: bars }).map((_, i) => {
        const x = (i / bars) * 360 + 3;
        const h = 12 + Math.abs(Math.sin(i * 0.7)) * 60 + Math.random() * 20;
        return (
          <rect key={i} x={x} y={70 - h / 2} width="4" height={h} rx="2" fill="var(--landing-fg)" opacity={0.15 + Math.random() * 0.6}>
            <animate attributeName="height" values={`${h};${h * 0.4};${h}`} dur={`${1.5 + Math.random() * 1.5}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${70 - h / 2};${70 - h * 0.2};${70 - h / 2}`} dur={`${1.5 + Math.random() * 1.5}s`} repeatCount="indefinite" />
          </rect>
        );
      })}
    </svg>
  );
}

function BatteryVis() {
  const rows = [
    { label: "EARBUDS", pct: 92, h: "30h" },
    { label: "CASE", pct: 68, h: "8 charges" },
    { label: "FAST CHARGE", pct: 100, h: "5 min = 2h" },
  ];
  return (
    <div className="w-full flex flex-col gap-2.5">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex justify-between font-mono-jb text-[11px] tracking-[0.15em] text-[--landing-fg-mute] mb-1.5">
            <span>{r.label}</span>
            <span className="text-[--landing-fg]">{r.h}</span>
          </div>
          <div className="h-[3px] bg-[--landing-line] rounded-sm overflow-hidden">
            <div className="h-full bg-[--landing-fg] rounded-sm" style={{ width: `${r.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TouchVis() {
  return (
    <svg width="200" height="140" viewBox="0 0 200 140">
      <circle cx="100" cy="70" r="48" fill="none" stroke="var(--landing-line)" />
      <circle cx="100" cy="70" r="30" fill="none" stroke="var(--landing-line)" />
      <circle cx="100" cy="70" r="8" fill="var(--landing-fg)">
        <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="70" r="48" fill="none" stroke="var(--landing-accent)" strokeWidth="1">
        <animate attributeName="r" values="20;64;20" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="125" textAnchor="middle" fill="var(--landing-fg-mute)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">DOUBLE TAP · HOLD</text>
    </svg>
  );
}

// =========================================================
// FEATURES GRID
// =========================================================
function FeatureCard({
  children,
  className = "",
  num,
}: {
  children: React.ReactNode;
  className?: string;
  num: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", e.clientX - r.left + "px");
    ref.current.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`bg-[--landing-bg-2] p-10 relative min-h-[320px] flex flex-col justify-between overflow-hidden cursor-default group hover:bg-[#131317] transition-colors duration-400 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(168,118,255,0.12), transparent 40%)",
        }}
      />
      <div className="font-mono-jb text-[11px] text-[--landing-fg-mute] tracking-[0.15em]">{num}</div>
      {children}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-44 px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[720px] mb-24 reveal">
          <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-current" />
            03 / Engineering
          </div>
          <h2 className="font-medium leading-[0.95] tracking-[-0.035em] mb-5" style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}>
            Quietly extraordinary.
          </h2>
          <p className="text-xl text-[--landing-fg-dim] font-light leading-relaxed max-w-[560px]">
            The hardware sits inside your ear. The magic runs on silicon you'll never see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-[--landing-line] border border-[--landing-line] rounded-[20px] overflow-hidden">
          {/* ANC - big */}
          <FeatureCard className="md:col-span-3 md:row-span-2 md:min-h-[660px]" num="01 — ANC">
            <div className="flex-1 flex items-center justify-center my-6">
              <ANCVis />
            </div>
            <div>
              <h3 className="text-3xl md:text-[54px] font-medium tracking-tight leading-[0.95] mb-2.5">
                Noise cancellation, tuned to your ear canal.
              </h3>
              <p className="text-sm text-[--landing-fg-dim] leading-relaxed max-w-[340px]">
                20,000 samples per second. A feedforward mic listens for outside noise; a feedback mic listens inside the ear. The gap is cancelled in under 3ms.
              </p>
            </div>
          </FeatureCard>

          {/* Spatial - wide */}
          <FeatureCard className="md:col-span-3" num="02 — Spatial">
            <div className="flex-1 flex items-center justify-center my-6 px-5">
              <WaveformMini />
            </div>
            <div>
              <h3 className="text-[28px] font-medium tracking-tight leading-[1.05] mb-2.5">
                Dolby Atmos · head tracked.
              </h3>
              <p className="text-sm text-[--landing-fg-dim] leading-relaxed max-w-[340px]">
                Your music widens around you. Turn your head; the soundstage stays put.
              </p>
            </div>
          </FeatureCard>

          {/* Battery - std */}
          <FeatureCard className="md:col-span-2" num="03 — Battery">
            <div className="flex-1 flex items-center justify-center my-6">
              <BatteryVis />
            </div>
            <div>
              <h3 className="text-[28px] font-medium tracking-tight leading-[1.05] mb-2.5">30 hours.</h3>
              <p className="text-sm text-[--landing-fg-dim] leading-relaxed max-w-[340px]">
                8 in the buds. 22 more in the pocketable case.
              </p>
            </div>
          </FeatureCard>

          {/* Fast charge - std */}
          <FeatureCard className="md:col-span-2" num="04 — Charge">
            <div className="flex-1 flex items-center justify-center my-6">
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="50" fill="none" stroke="var(--landing-line)" strokeWidth="2" />
                <circle cx="70" cy="70" r="50" fill="none" stroke="var(--landing-accent)" strokeWidth="2" strokeDasharray="314" strokeDashoffset="70" strokeLinecap="round" transform="rotate(-90 70 70)" />
                <text x="70" y="68" textAnchor="middle" fill="var(--landing-fg)" fontSize="24" fontWeight="500" letterSpacing="-1">5</text>
                <text x="70" y="86" textAnchor="middle" fill="var(--landing-fg-mute)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">MIN = 2H</text>
              </svg>
            </div>
            <div>
              <h3 className="text-[28px] font-medium tracking-tight leading-[1.05] mb-2.5">Fast charge.</h3>
              <p className="text-sm text-[--landing-fg-dim] leading-relaxed max-w-[340px]">
                Five minutes in the case unlocks two hours of playback.
              </p>
            </div>
          </FeatureCard>

          {/* Touch - std */}
          <FeatureCard className="md:col-span-2" num="05 — Touch">
            <div className="flex-1 flex items-center justify-center my-6">
              <TouchVis />
            </div>
            <div>
              <h3 className="text-[28px] font-medium tracking-tight leading-[1.05] mb-2.5">Capacitive stem.</h3>
              <p className="text-sm text-[--landing-fg-dim] leading-relaxed max-w-[340px]">
                Pinch, hold, swipe. Customize every gesture in the app.
              </p>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SOUND VIZ — Canvas waveform
// =========================================================
function Sound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [track, setTrack] = useState("Atmos");
  const trackRef = useRef("Atmos");
  useEffect(() => { trackRef.current = track; }, [track]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const DPR = window.devicePixelRatio || 1;
    const resize = () => {
      const r = c.getBoundingClientRect();
      c.width = r.width * DPR;
      c.height = r.height * DPR;
      ctx.scale(DPR, DPR);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let raf: number;
    const barCount = 96;
    const draw = () => {
      const w = c.clientWidth;
      const h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.02;
      const mode = trackRef.current;
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "rgba(168,118,255,0.9)");
      grad.addColorStop(0.5, "rgba(245,243,238,0.95)");
      grad.addColorStop(1, "rgba(120,180,255,0.9)");
      const gap = w / barCount;
      for (let i = 0; i < barCount; i++) {
        const amp =
          mode === "Bass"
            ? (Math.sin(t + i * 0.18) * 0.5 + 0.5) * (1 - (i / barCount) * 0.7)
            : mode === "Vocal"
            ? (Math.sin(t * 1.6 + i * 0.35) * 0.5 + 0.5) * Math.sin((Math.PI * i) / barCount)
            : (Math.sin(t + i * 0.22) * 0.5 + 0.5) * 0.7 + Math.sin(t * 0.7 + i * 0.1) * 0.15 + 0.15;
        const a = Math.max(0.05, amp);
        const barH = a * (h * 0.78);
        const x = i * gap + 2;
        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.65;
        ctx.fillRect(x, h / 2 - barH / 2, gap - 4, barH);
        ctx.globalAlpha = 0.18;
        ctx.fillRect(x, h / 2 + barH / 2 + 2, gap - 4, barH * 0.3);
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(245,243,238,0.06)";
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="sound" className="py-60 px-6 lg:px-10 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(168,118,255,0.08), transparent 60%)" }}
      />
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[720px] mb-24 reveal">
          <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-current" />
            04 / Sound
          </div>
          <h2 className="font-medium leading-[0.95] tracking-[-0.035em] mb-5" style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}>
            You don't hear it.<br />You're inside it.
          </h2>
          <p className="text-xl text-[--landing-fg-dim] font-light leading-relaxed max-w-[560px]">
            A tunable 11mm titanium driver and Glitch-designed H-Class amp. Tested against 600 hours of reference material.
          </p>
        </div>

        <div className="relative border border-[--landing-line] rounded-3xl overflow-hidden p-8 lg:p-14 reveal" style={{ background: "linear-gradient(180deg, #0c0c0f, #09090b)" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--landing-accent), transparent)", opacity: 0.6 }} />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-5">
            <h3 className="text-3xl lg:text-[44px] font-medium tracking-tight leading-none max-w-[500px]">
              Live response — Glitch Pro, preset "Studio Flat"
            </h3>
            <div className="flex gap-2">
              {["Atmos", "Bass", "Vocal"].map((m) => (
                <button
                  key={m}
                  onClick={() => setTrack(m)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono-jb border transition-all duration-300 ${
                    track === m
                      ? "bg-[--landing-fg] text-[#0a0a0b] border-[--landing-fg]"
                      : "bg-[rgba(245,243,238,0.04)] border-[--landing-line] text-[--landing-fg-dim] hover:text-[--landing-fg] hover:border-[rgba(245,243,238,0.2)]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <canvas
            ref={canvasRef}
            className="w-full h-[260px] block rounded-xl"
            style={{ background: "rgba(0,0,0,0.3)" }}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 mt-10 pt-8 border-t border-[--landing-line]">
            {[
              { label: "Driver", val: "11 mm Ti" },
              { label: "Response", val: "20 Hz – 40 kHz" },
              { label: "Codec", val: "LDAC · aptX Lossless" },
              { label: "THD", val: "< 0.08%" },
            ].map((r) => (
              <div key={r.label}>
                <div className="font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] mb-2">{r.label}</div>
                <div className="text-2xl font-medium tracking-tight">{r.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// TESTIMONIALS
// =========================================================
function Testimonials() {
  const data = [
    { quote: "The soundstage is absurd. I keep turning around because I think something is behind me.", name: "Sarah Chen", role: "Audio Engineer", initial: "SC" },
    { quote: "I spent years chasing clarity in a studio. Glitch gives it to me on the subway.", name: "Marcus Rodriguez", role: "Music Producer", initial: "MR" },
    { quote: "The ANC is so complete it feels rude. In the best way.", name: "Emily Watson", role: "Film Editor", initial: "EW" },
    { quote: "I'm a runner. I've had six pairs of 'sport' earbuds fail. These just work.", name: "Daniel Park", role: "Ultramarathoner", initial: "DP" },
    { quote: "Calls finally sound like I'm in the room. Six mics is not a gimmick.", name: "Ayesha Malik", role: "Remote Lead", initial: "AM" },
  ];
  const [i, setI] = useState(0);
  const perView = 3;
  const maxI = Math.max(0, data.length - perView);
  const go = (d: number) => setI((v) => Math.max(0, Math.min(maxI, v + d)));

  return (
    <section className="py-44 px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[720px] mb-24 reveal">
          <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-current" />
            05 / Listeners
          </div>
          <h2 className="font-medium leading-[0.95] tracking-[-0.035em]" style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}>
            Heard by the people who hear everything.
          </h2>
        </div>

        <div className="overflow-hidden reveal">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(calc(${-i} * (33.333% + 16px)))`,
              transition: "transform 800ms cubic-bezier(0.19, 1, 0.22, 1)",
            }}
          >
            {data.map((t, k) => (
              <div
                key={k}
                className="flex-shrink-0 bg-[--landing-bg-2] border border-[--landing-line] rounded-[20px] p-10 flex flex-col gap-7 hover:border-[rgba(245,243,238,0.15)] hover:-translate-y-1 transition-all duration-500"
                style={{ flexBasis: "calc(33.333% - 16px)", minWidth: "360px" }}
              >
                <div className="flex gap-0.5 text-[--landing-accent]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.6 7.3H22l-6.2 4.5 2.4 7.3L12 16.8 5.8 21.1l2.4-7.3L2 9.3h7.4z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl leading-[1.45] font-normal tracking-tight flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3.5 pt-6 border-t border-[--landing-line]">
                  <div className="w-10 h-10 rounded-full border border-[--landing-line] flex items-center justify-center text-sm font-medium" style={{ background: "linear-gradient(135deg, #2a2a30, #0a0a0b)" }}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-[--landing-fg-mute] font-mono-jb tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-2">
            {Array.from({ length: maxI + 1 }).map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`w-6 h-0.5 border-none p-0 cursor-pointer transition-colors duration-400 ${
                  i === k ? "bg-[--landing-fg]" : "bg-[--landing-line]"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-[--landing-line] bg-transparent text-[--landing-fg] flex items-center justify-center hover:border-[rgba(245,243,238,0.25)] hover:bg-[rgba(245,243,238,0.04)] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-[--landing-line] bg-transparent text-[--landing-fg] flex items-center justify-center hover:border-[rgba(245,243,238,0.25)] hover:bg-[rgba(245,243,238,0.04)] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// COMPARE / VARIANTS
// =========================================================
const variants = [
  {
    id: "pro" as const,
    name: "Glitch Pro",
    price: "249",
    blurb: "Our flagship. 30h battery, full ANC, spatial audio. The one we give our engineers.",
    specs: [["BATTERY", "8h + 22h case"], ["ANC", "Adaptive, −42dB"], ["DRIVER", "11mm Titanium"], ["CODEC", "LDAC / aptX Lossless"], ["WEIGHT", "3.9g / bud"], ["WATER", "IPX5"]],
  },
  {
    id: "air" as const,
    name: "Glitch Air",
    price: "179",
    blurb: "Lightweight open-fit for all-day wear. No isolation, no fatigue.",
    specs: [["BATTERY", "7h + 21h case"], ["ANC", "—"], ["DRIVER", "10mm Bio"], ["CODEC", "AAC / SBC"], ["WEIGHT", "3.1g / bud"], ["WATER", "IPX4"]],
  },
  {
    id: "max" as const,
    name: "Glitch Max",
    price: "299",
    blurb: "Studio-grade reference tuning. Lossless over 2.4GHz wireless.",
    specs: [["BATTERY", "9h + 27h case"], ["ANC", "Reference, −46dB"], ["DRIVER", "12mm Be/Ti"], ["CODEC", "Glitch Lossless 2.4"], ["WEIGHT", "4.4g / bud"], ["WATER", "IPX5"]],
  },
  {
    id: "sport" as const,
    name: "Glitch Sport",
    price: "149",
    blurb: "Earhook stability, sweat-rated for serious training.",
    specs: [["BATTERY", "10h + 20h case"], ["ANC", "Transparency only"], ["DRIVER", "9mm Neo"], ["CODEC", "aptX Adaptive"], ["WEIGHT", "5.0g / bud"], ["WATER", "IP67"]],
  },
];

const swatches: { id: Colorway; hex: string }[] = [
  { id: "graphite", hex: "#2a2a2e" },
  { id: "pearl", hex: "#d9d6c9" },
  { id: "cobalt", hex: "#3546a8" },
  { id: "rose", hex: "#b86a5e" },
];

function Compare() {
  const [id, setId] = useState<string>("pro");
  const [color, setColor] = useState<Colorway>("graphite");
  const v = variants.find((x) => x.id === id)!;
  const tabsRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!tabsRef.current) return;
    const activeEl = tabsRef.current.querySelector(".variant-tab-active") as HTMLElement | null;
    if (activeEl) {
      setPill({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    }
  }, [id]);

  return (
    <section id="compare" className="py-44 px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[720px] mb-24 reveal">
          <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-current" />
            06 / The Lineup
          </div>
          <h2 className="font-medium leading-[0.95] tracking-[-0.035em] mb-5" style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}>
            Four shapes. One philosophy.
          </h2>
          <p className="text-xl text-[--landing-fg-dim] font-light leading-relaxed max-w-[560px]">
            Every Glitch shares the same H-Class silicon, tuned for its job.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mb-14 reveal">
          <div
            ref={tabsRef}
            className="relative inline-flex gap-1 p-1 border border-[--landing-line] rounded-full bg-[--landing-bg-2]"
          >
            <div
              className="absolute top-1 bottom-1 bg-[--landing-fg] rounded-full transition-all duration-500"
              style={{
                left: pill.left + 4,
                width: pill.width - 8,
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            />
            {variants.map((x) => (
              <button
                key={x.id}
                onClick={() => setId(x.id)}
                className={`relative z-[1] bg-transparent border-none px-5 py-2.5 rounded-full text-[13px] font-display cursor-pointer transition-colors duration-400 ${
                  id === x.id ? "text-[#0a0a0b] variant-tab-active" : "text-[--landing-fg-dim]"
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[560px] reveal">
          {/* Visual */}
          <div className="relative aspect-square flex items-center justify-center">
            <div
              key={id + color}
              className="relative w-full max-w-[460px] aspect-square"
              style={{ animation: "landing-float-simple 8s ease-in-out infinite" }}
            >
              <div className="absolute inset-[5%] rounded-full border border-[--landing-line]" />
              <div className="absolute inset-[14%] rounded-full border border-[rgba(245,243,238,0.05)]" />
              <div className="absolute inset-[23%] rounded-full border border-[rgba(245,243,238,0.03)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Earbud size={460} colorway={color} />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] mb-3.5">
              Model · {v.name.toUpperCase()}
            </div>
            <h3 className="text-6xl lg:text-[72px] font-medium tracking-[-0.04em] leading-[0.9] mb-2">{v.name}</h3>
            <div className="text-[32px] font-medium tracking-tight mb-8 flex items-baseline gap-3">
              ${v.price}
              <small className="text-[13px] text-[--landing-fg-mute] font-normal font-mono-jb">
                or ${Math.round(+v.price / 12)}/mo · 12 months
              </small>
            </div>
            <p className="text-base text-[--landing-fg-dim] leading-relaxed mb-9 max-w-[440px]">{v.blurb}</p>

            <div className="font-mono-jb text-[10px] tracking-[0.2em] uppercase text-[--landing-fg-mute] mb-3">Colorway</div>
            <div className="flex gap-3 mb-8">
              {swatches.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`w-9 h-9 rounded-full border border-[--landing-line] cursor-pointer relative hover:scale-[1.08] transition-transform ${
                    color === c.id ? "ring-1 ring-[--landing-fg] ring-offset-2 ring-offset-[--landing-bg]" : ""
                  }`}
                  style={{ background: c.hex }}
                  aria-label={c.id}
                />
              ))}
            </div>

            <div className="border-t border-[--landing-line] mb-9">
              {v.specs.map(([k, val]) => (
                <div key={k} className="flex justify-between items-center py-4 border-b border-[--landing-line]">
                  <span className="font-mono-jb text-[11px] tracking-[0.15em] uppercase text-[--landing-fg-mute]">{k}</span>
                  <span className="text-sm text-[--landing-fg]">{val}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="bg-[--landing-fg] text-[#0a0a0b] border-none px-8 py-4 rounded-full text-sm font-semibold cursor-pointer font-display hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(245,243,238,0.3)] transition-all duration-400">
                Add to cart
              </button>
              <button className="bg-transparent text-[--landing-fg] border border-[--landing-line] px-7 py-4 rounded-full text-sm font-medium cursor-pointer font-display hover:border-[rgba(245,243,238,0.25)] hover:bg-[rgba(245,243,238,0.03)] transition-all">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// FINAL CTA
// =========================================================
function FinalCTA() {
  return (
    <section className="py-52 px-6 lg:px-10 relative overflow-hidden text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 70%, rgba(168,118,255,0.2), transparent 60%)" }}
      />
      <div className="relative z-[1] max-w-[1320px] mx-auto">
        <div className="font-mono-jb text-[11px] tracking-[0.28em] uppercase text-[--landing-fg-mute] mb-5 flex items-center justify-center gap-3 reveal">
          <span className="w-6 h-px bg-current" />
          07 / Upgrade
        </div>
        <h2
          className="font-medium tracking-[-0.04em] leading-[0.92] mx-auto max-w-[1100px] mb-8 reveal"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", transitionDelay: "120ms" }}
        >
          Upgrade your<br />
          <em className="italic font-light text-[--landing-accent]">sound experience.</em>
        </h2>
        <p className="text-xl text-[--landing-fg-dim] max-w-[500px] mx-auto mb-12 font-light reveal" style={{ transitionDelay: "240ms" }}>
          Free 2-day shipping. 45-day trial. Two-year warranty.
        </p>
        <div className="flex gap-4 justify-center items-center reveal" style={{ transitionDelay: "360ms" }}>
          <button className="group bg-[--landing-fg] text-[#0a0a0b] border-none px-8 py-4 rounded-full text-sm font-semibold cursor-pointer font-display inline-flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(245,243,238,0.3),0_0_60px_-10px_var(--landing-accent)] transition-all duration-400">
            Shop Glitch Pro — $249
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <button className="bg-transparent text-[--landing-fg] border border-[--landing-line] px-7 py-4 rounded-full text-sm font-medium cursor-pointer font-display hover:border-[rgba(245,243,238,0.25)] hover:bg-[rgba(245,243,238,0.03)] transition-all">
            Compare all models
          </button>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// FOOTER
// =========================================================
function LandingFooter() {
  return (
    <footer id="support" className="border-t border-[--landing-line] px-6 lg:px-10 pt-14 pb-10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[--landing-line]">
        <div className="lg:col-span-2">
          <div className="font-bold text-lg tracking-tight flex items-center gap-2 mb-4">
            <span className="w-[7px] h-[7px] rounded-full bg-[--landing-accent] shadow-[0_0_12px_var(--landing-accent)]" />
            GLITCH
          </div>
          <p className="text-[--landing-fg-dim] text-[13px] leading-relaxed max-w-[280px]">
            Audio equipment, designed and engineered for the people who listen closely.
          </p>
        </div>
        {[
          { title: "Shop", links: ["Glitch Pro", "Glitch Air", "Glitch Max", "Glitch Sport", "Accessories"] },
          { title: "Company", links: ["About", "Engineering", "Press", "Careers"] },
          { title: "Support", links: ["Help center", "Warranty", "Returns", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="font-mono-jb text-xs tracking-[0.2em] uppercase text-[--landing-fg-mute] mb-4 font-medium">
              {col.title}
            </h5>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[--landing-fg-dim] text-[13px] no-underline hover:text-[--landing-fg] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1320px] mx-auto pt-8 flex flex-col sm:flex-row justify-between text-[--landing-fg-mute] font-mono-jb text-xs tracking-wide gap-2">
        <span>&copy; 2026 GLITCH AUDIO INC.</span>
        <span>MADE FOR LISTENING · PORTLAND · TAIPEI · BERLIN</span>
      </div>
    </footer>
  );
}

// =========================================================
// HOME PAGE
// =========================================================
const Home = () => {
  useReveal();

  // Loader
  useEffect(() => {
    const tid = setTimeout(() => {
      const loader = document.getElementById("landing-loader");
      if (loader) loader.classList.add("opacity-0", "invisible", "pointer-events-none");
    }, 700);
    return () => clearTimeout(tid);
  }, []);

  return (
    <div className="landing-dark bg-[--landing-bg] text-[--landing-fg] overflow-x-hidden">
      {/* Loader */}
      <div
        id="landing-loader"
        className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-all duration-700 delay-200"
      >
        <div className="w-16 h-16 rounded-full border border-[rgba(255,255,255,0.08)] relative">
          <div
            className="absolute inset-[-1px] rounded-full border border-transparent animate-[landing-spin_1.2s_linear_infinite]"
            style={{ borderTopColor: "var(--landing-accent)" }}
          />
        </div>
      </div>

      <LandingNav />
      <Hero />
      <Showcase />
      <Features />
      <Sound />
      <Testimonials />
      <Compare />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Home;
