import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center">
      <h1
        className="font-sexsmith text-[32px] font-normal text-[#0F0F0F] sm:text-[48px]"
        style={{ fontFamily: "'Sexsmith', serif" }}
      >
        Страница не найдена
      </h1>
      <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#6D6868]">
        Такой страницы нет. Посмотрите главную — там кейсы, проекты и
        контакты Саши, продуктового дизайнера mobile-first.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-black px-6 py-3 text-[15px] text-white no-underline"
      >
        На главную
      </Link>
    </main>
  );
}
