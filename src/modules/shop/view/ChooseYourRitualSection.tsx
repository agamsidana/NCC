import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";

function ChooseYourRitualSection() {
  const { ritualHeading, ritualCards } = strings.shop;

  return (
    <section id="ritual" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {ritualHeading.heading}
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">{ritualHeading.subheading}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ritualCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-5">
                <h3 className="font-serif text-lg text-white sm:text-xl">{card.title}</h3>
                <span className="inline-flex w-fit items-center gap-1 text-xs font-medium text-white/90 transition-transform duration-300 group-hover:translate-x-0.5">
                  Shop
                  <Icon icon="mdi:arrow-right" width={14} height={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseYourRitualSection;
