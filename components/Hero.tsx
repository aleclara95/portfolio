import Particles from "./Particles";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Glowing line */}
      <div style={{ opacity: 0 }} className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Name */}
      <div className="z-10 text-center px-4">
        <h1 style={{ opacity: 0 }} className="py-3.5 px-0.5 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
          Alejandro Clara
        </h1>
      </div>

      {/* Glowing line */}
      <div style={{ opacity: 0 }} className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Tagline + CTAs */}
      <div className="my-16 text-center animate-fade-in px-4" style={{ opacity: 0, animationDelay: "600ms" }}>
        <p className="text-sm text-zinc-500 max-w-md mx-auto mb-6">
          I think like a founder, build like an engineer.{" "}
          <span className="text-zinc-600">
            8 years across startups, fintechs, and agencies in Uruguay and the
            US.
          </span>
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="text-sm duration-500 text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-400 px-4 py-2 rounded-full transition-colors"
          >
            Get in touch →
          </a>
          <a
            href="/alejandro_clara_cv.pdf"
            download
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            CV ↓
          </a>
        </div>
      </div>
    </div>
  );
}
