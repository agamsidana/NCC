import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function AlbaReserveSection() {
  const { albaReserve } = strings.home;

  return (
    <section className="bg-neutral-800 py-16 text-neutral-50 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <img
            src={IMAGES.mainProduct}
            alt={albaReserve.heading}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            <Icon icon="mdi:share-outline" width={14} height={14} />
            {albaReserve.shareLabel}
          </span>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary-400">
            {albaReserve.eyebrow}
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            {albaReserve.heading}
          </h2>
          <p className="text-sm text-neutral-300 sm:text-base">
            {albaReserve.intro}
          </p>
          <p className="text-sm text-neutral-300 sm:text-base">
            {albaReserve.description}
          </p>
          <ul className="flex flex-col gap-3">
            {albaReserve.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-neutral-200"
              >
                <Icon
                  icon="mdi:check-circle-outline"
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-secondary-400"
                />
                {point}
              </li>
            ))}
          </ul>
          <Link
            to={albaReserve.href}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {albaReserve.cta}
            <Icon icon="mdi:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AlbaReserveSection;
