import Image from "next/image";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-zinc-800/50 bg-black/60">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </a>
        <ul className="flex items-center gap-8">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm duration-300 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
