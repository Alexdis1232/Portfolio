"use client";

import Link from "next/link";

const downloadButtonClass =
  "press-bounce flex items-center justify-center rounded-full bg-white text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#dcdcdc] h-12 px-6 text-[13px] sm:h-auto sm:px-8 sm:py-6 sm:text-[18px]";

export default function CvPage() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          aria-label="На главную"
          className="flex h-14 w-14 items-center justify-center rounded-full text-[40px] font-light leading-none text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:h-16 sm:w-16 sm:text-[48px]"
        >
          ×
        </Link>

        <a href="/resume.pdf" download className={downloadButtonClass}>
          Скачать PDF ↓
        </a>
      </header>

      <div className="max-h-[90vh] w-full max-w-[720px] overflow-y-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/resume.png"
          alt="Резюме — Александра Антонюк"
          className="block w-full"
        />
      </div>
    </div>
  );
}
