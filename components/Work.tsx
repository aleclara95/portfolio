import { ExternalLink } from "lucide-react";
import Card from "./Card";

const projects = [
  {
    name: "ShowApp",
    url: "https://showapp.com.uy",
    role: "Freelance Full-Stack Developer",
    description:
      "Event discovery platform for Uruguay, on iOS and Android. Built the React Native app and Django backend iterating closely with the founding team.",
    metrics: "1,000+ active users",
    stack: ["React Native", "Django", "PostgreSQL"],
    period: "2024–2026",
  },
  {
    name: "Zalon",
    url: "https://zalon.app",
    role: "Co-founder & Full-Stack Engineer",
    description:
      "SaaS scheduling platform for beauty and wellness professionals. Full product: Next.js frontend, Django backend, WhatsApp notifications, MercadoPago payments, Google Calendar sync.",
    metrics: "Multiple paying customers",
    stack: ["Next.js", "Django", "WhatsApp API", "MercadoPago"],
    period: "2024–2026",
  },
  {
    name: "Renvic",
    url: null,
    role: "Co-founder & Full-Stack Engineer",
    description:
      "Peer-to-peer vehicle rental startup. Built admin dashboard and mobile app, led user research that shaped the product roadmap.",
    metrics: null,
    stack: ["Next.js", "React Native"],
    period: "2024",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10">
          Work
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-zinc-200 duration-150 group-hover:text-white">
                      {project.name}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-zinc-400 transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-zinc-600 shrink-0 pt-0.5">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 mb-3">{project.role}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.metrics && (
                  <p className="text-sm font-medium text-zinc-300 mb-4">
                    {project.metrics}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
