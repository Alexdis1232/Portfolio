"use client";

import Link from "next/link";

const downloadButtonClass =
  "press-bounce flex items-center justify-center rounded-full bg-white text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#dcdcdc] h-12 px-6 text-[13px] sm:px-8 sm:py-4 sm:text-[16px]";

export default function CvPage() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="text-[15px] text-white/80 transition-colors hover:text-white sm:text-[18px]"
        >
          ← главная
        </Link>

        <a href="/cv.pdf" download className={downloadButtonClass}>
          Скачать PDF ↓
        </a>
      </header>

      <iframe
        src="/cv.pdf"
        title="CV — резюме"
        className="w-full max-w-[720px] rounded-[12px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
        style={{ height: "90vh" }}
      />
    </div>
  );
}
