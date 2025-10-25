import { ReactNode } from "react";

export function CardFeature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-4 sm:p-6 hover:bg-white/10 transition-colors">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <p className="font-semibold text-sm sm:text-base lg:text-lg">{title}</p>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}
