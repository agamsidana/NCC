import { Icon } from "@iconify/react";
import strings from "../../../common/constants/strings";

function GradeSection() {
  const { grade } = strings.home;

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {grade.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {grade.heading}
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            {grade.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grade.cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <Icon icon={card.icon} width={20} height={20} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GradeSection;
