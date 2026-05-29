const jobs = [
  {
    company: "Kaizen Softworks",
    role: "Team Lead",
    period: "2024 – Present",
    note: "Engineering ownership across a 22-service microservices platform for a US insurtech. Code reviews, CI/CD, frontend standards, and team growth.",
  },
  {
    company: "Kaizen Softworks",
    role: "Software Developer",
    period: "2021 – 2024",
    note: "Full-stack in NestJS, GraphQL, and Next.js. Built 3 apps, architected 1 from scratch serving Reframe Financial.",
  },
  {
    company: "Ripio",
    role: "Software Developer",
    period: "2020 – 2021",
    note: "Core team for one of LatAm's largest crypto exchanges. Rust rewrite of trading logic and platform merger across 12+ engineers.",
  },
  {
    company: "IPS",
    role: "Software Engineer",
    period: "2018 – 2020",
    note: "IoT platform for a US laundromat chain. Django + React + hardware integration via MQTT. Led legacy PHP migration.",
  },
  {
    company: "CLK",
    role: "Software Developer",
    period: "2017 – 2018",
    note: "First engineering role in a fast-paced agency. 5+ client projects simultaneously.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500">
            Experience
          </h2>
          <a
            href="/alejandro_clara_cv.pdf"
            download
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            Full CV ↓
          </a>
        </div>

        <div>
          {jobs.map((job, i) => (
            <div
              key={i}
              className="grid sm:grid-cols-[1fr_auto] gap-x-12 gap-y-1 py-5 border-b border-zinc-800/60 last:border-0"
            >
              <div>
                <p className="text-sm text-zinc-300">
                  {job.company}{" "}
                  <span className="text-zinc-600">· {job.role}</span>
                </p>
                <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                  {job.note}
                </p>
              </div>
              <span className="text-xs text-zinc-600 shrink-0 sm:pt-0.5">
                {job.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
