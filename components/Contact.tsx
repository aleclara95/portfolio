export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-zinc-800 bg-gradient-to-tl from-zinc-900/0 via-zinc-900/50 to-zinc-900/0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10">
          Contact
        </h2>
        <div className="max-w-2xl">
          <p className="text-3xl md:text-4xl font-medium text-zinc-200 leading-snug mb-4">
            Let&apos;s build
            <br />
            something.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed mb-10">
            Open to senior engineering roles, technical co-founder partnerships,
            and interesting freelance projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:aleclara95@gmail.com"
              className="text-sm duration-500 text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-400 px-5 py-2.5 rounded-full transition-colors"
            >
              aleclara95@gmail.com →
            </a>
            <a
              href="https://www.linkedin.com/in/alejandroclara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 px-5 py-2.5 rounded-full transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
