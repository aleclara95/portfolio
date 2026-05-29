import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-zinc-800 bg-gradient-to-tl from-zinc-900/0 via-zinc-900/50 to-zinc-900/0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10">
          About
        </h2>
        <div className="grid md:grid-cols-[1fr_320px] gap-16 items-start">
          <div className="space-y-5">
            <p className="text-2xl md:text-3xl text-zinc-200 leading-snug font-medium">
              Most engineers stop at the PR.
              <br />I start at the problem.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              8 years building production software across crypto exchanges, IoT
              platforms, insurtech, and SaaS. I&apos;ve always owned decisions
              end-to-end, from architecture to code to team.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              I&apos;ve also co-founded two startups. Done user interviews.
              Killed features I built myself. Learned that shipping the right
              thing matters more than shipping perfect code. That changes how
              you approach every technical decision.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Currently leading engineering at Kaizen Softworks, owning a
              22-service microservices platform for a US insurtech, while
              staying hands-on in the codebase.
            </p>
          </div>

          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/photo.jpg"
              alt="Alejandro Clara"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 640px"
              quality={95}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
