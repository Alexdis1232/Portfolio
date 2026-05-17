import Link from "next/link";

const navItems = [
  { href: "#projects", label: "работы" },
  { href: "#info", label: "инфо" },
  { href: "#contact", label: "контакты" },
];

const buttonBase =
  "rounded-full text-[18px] transition-[transform,background-color] duration-200 ease-in-out hover:scale-105 hover:bg-[#E8E8E8]";

const navButtonClass = `${buttonBase} px-8 py-6`;
const cvButtonClass =
  "rounded-full px-[42px] py-[24px] text-[18px] text-white transition-[transform,background-color] duration-200 ease-in-out hover:scale-105 hover:bg-[#292929]";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-6">
      <nav className="navbar-glass flex w-full items-center justify-between p-4">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navButtonClass} bg-gray-pill text-black`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="/cv.pdf"
          className={`${cvButtonClass} bg-black`}
        >
          CV
        </a>
      </nav>
    </header>
  );
}
