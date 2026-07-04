import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function RitualsSection() {
  const { rituals } = strings.home;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {rituals.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {rituals.heading}
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            {rituals.subheading}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 md:grid-cols-2">
            <img
              src={IMAGES.mainProduct}
              alt={rituals.morning.heading}
              className="aspect-[4/3] w-full object-cover transition-[filter] duration-500 hover:brightness-105 md:h-full md:aspect-auto"
            />
            <div className="flex flex-col justify-center gap-4 p-8">
              <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600">
                <Icon icon={rituals.morning.tagIcon} width={14} height={14} />
                {rituals.morning.tag}
              </span>
              <h3 className="font-serif text-2xl text-neutral-900">
                {rituals.morning.heading}
              </h3>
              <p className="text-sm text-neutral-600">
                {rituals.morning.description}
              </p>
              <ol className="flex flex-col gap-2">
                {rituals.morning.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                to={rituals.morning.href}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
              >
                {rituals.morning.cta}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center gap-4 p-8 md:order-1">
              <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600">
                <Icon icon={rituals.afternoon.tagIcon} width={14} height={14} />
                {rituals.afternoon.tag}
              </span>
              <h3 className="font-serif text-2xl text-neutral-900">
                {rituals.afternoon.heading}
              </h3>
              <p className="text-sm text-neutral-600">
                {rituals.afternoon.description}
              </p>
              <ol className="flex flex-col gap-2">
                {rituals.afternoon.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                to={rituals.afternoon.href}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
              >
                {rituals.afternoon.cta}
              </Link>
            </div>
            <img
              src={IMAGES.mainProduct1}
              alt={rituals.afternoon.heading}
              className="order-1 aspect-[4/3] w-full object-cover transition-[filter] duration-500 hover:brightness-105 md:order-2 md:h-full md:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RitualsSection;
