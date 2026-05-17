type CareerEntry = {
  company: string;
  years: string;
  role: string;
  platform: string;
  logo: string;
};

const careerData: CareerEntry[] = [
  {
    company: "Faberlic",
    years: "2025-Сейчас",
    role: "Продуктовый дизайнер",
    platform: "mobile",
    logo: "/faberlic.png",
  },
  {
    company: "AGIMA",
    years: "2024-2025",
    role: "Продуктовый дизайнер",
    platform: "desktop",
    logo: "/agima.png",
  },
  {
    company: "CAPS",
    years: "2023-2024",
    role: "Графический дизайнер",
    platform: "social media",
    logo: "/caps.png",
  },
];

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={45}
      height={45}
      className="h-[45px] w-[45px] shrink-0 rounded-xl object-cover"
    />
  );
}

export function Career() {
  return (
    <section id="info" className="bg-white pb-0 pt-0">
      <p className="mb-[10px] text-sm text-[#C7C7C7]">Карьера</p>
      <div className="mb-10 h-px w-full bg-[#C7C7C7]" />

      <div className="flex flex-col gap-3">
        {careerData.map((entry) => (
          <div
            key={entry.company}
            className="grid h-[76px] grid-cols-1 items-center gap-6 text-[16px] sm:grid-cols-2"
          >
            <div className="flex items-center gap-4">
              <CompanyLogo src={entry.logo} alt={entry.company} />
              <div>
                <p className="font-medium text-black">{entry.company}</p>
                <p className="mt-0.5 text-[#C7C7C7]">{entry.years}</p>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="font-medium text-black">{entry.role}</p>
              <p className="mt-0.5 text-[#C7C7C7]">{entry.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
