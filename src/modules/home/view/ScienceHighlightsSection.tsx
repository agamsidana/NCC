import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";

function ScienceHighlightsSection() {
  const { science } = strings.home;

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {science.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {science.heading}
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            {science.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {science.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white p-6 text-center"
            >
              <Icon icon={stat.icon} width={22} height={22} className="text-primary-600" />
              <p className="font-serif text-3xl text-neutral-900">{stat.value}</p>
              <p className="text-sm text-neutral-600">{stat.label}</p>
              <p className="mt-1 text-xs text-neutral-400">{stat.source}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">{science.disclaimer}</p>

        <div className="mt-8 text-center">
          <Link
            to={science.href}
            className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
          >
            {science.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ScienceHighlightsSection;
