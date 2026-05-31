"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTAINER_MAX_WIDTH } from "@/config/layout";
import { useButtonClickSound } from "@/hooks/useButtonClickSound";

const buttonBase =
  "press-bounce flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out";

const navButtonClass = `${buttonBase} nav-hover h-12 px-6 text-[13px] bg-gray-pill text-black active:bg-[#E8E8E8] sm:h-auto sm:px-8 sm:py-6 sm:text-[18px]`;
const cvButtonClass = `${buttonBase} cv-hover h-12 px-6 text-[13px] text-white bg-black active:bg-[#292929] sm:h-auto sm:px-[42px] sm:py-[24px] sm:text-[18px]`;

function NavLink({
  href,
  label,
  onPress,
}: {
  href: string;
  label: string;
  onPress: () => void;
}) {
  return (
    <Link
      href={href}
      className={`${navButtonClass} shrink-0`}
      onPointerDown={onPress}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const playClick = useButtonClickSound();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const homeLink = { href: isProjectPage ? "/" : "/#projects", label: isProjectPage ? "главная" : "работы" };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: CONTAINER_MAX_WIDTH }}
      >
        <nav className="navbar-glass flex h-[72px] w-full items-center justify-between gap-2 px-3 sm:h-auto sm:gap-4 sm:p-4">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="flex items-center gap-0 sm:hidden">
              <NavLink href={homeLink.href} label={homeLink.label} onPress={playClick} />
              <NavLink href="/#contact" label="контакты" onPress={playClick} />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <NavLink href={homeLink.href} label={homeLink.label} onPress={playClick} />
              <NavLink href="/#contact" label="контакты" onPress={playClick} />
            </div>
          </div>

          <a
            href="/cv.pdf"
            className={`${cvButtonClass} shrink-0`}
            onPointerDown={playClick}
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
