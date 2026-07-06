import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function WhyProductSection() {
  const { whyProduct } = strings.home;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
        <div className="flex flex-col items-start gap-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {whyProduct.eyebrow}
          </p>

          <h2 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {whyProduct.heading}
          </h2>

          {whyProduct.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm text-neutral-600 sm:text-base">
              {paragraph}
            </p>
          ))}

          <div className="grid w-full grid-cols-1 gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:grid-cols-3">
            {whyProduct.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 sm:border-l sm:border-neutral-200 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="font-serif text-2xl text-primary-600">
                  {stat.value}
                </span>
                <span className="text-xs text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/the-science"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {whyProduct.cta}
            <Icon icon="mdi:arrow-right" width={16} height={16} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <img
            src={IMAGES.whyProduct}
            alt={whyProduct.heading}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg transition-shadow duration-500 hover:shadow-2xl"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow">
            <Icon
              icon="mdi:check-decagram-outline"
              width={14}
              height={14}
              className="text-primary-600"
            />
            {whyProduct.badge}
          </span>
        </div>
      </div>
    </section>
  );
}

export default WhyProductSection;
