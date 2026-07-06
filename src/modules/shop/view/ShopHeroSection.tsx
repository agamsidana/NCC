import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function ShopHeroSection() {
  const { hero } = strings.shop;

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
        <div className="motion-safe:animate-fade-in-up flex flex-col items-start gap-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary-600">
            {hero.eyebrow}
          </p>

          <h1 className="font-serif text-5xl leading-tight text-neutral-900 sm:text-6xl">
            {hero.heading}
          </h1>

          <p className="max-w-md text-base text-neutral-600">{hero.description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/shop#ritual"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {hero.cta}
              <Icon icon="mdi:arrow-right" width={16} height={16} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-xl [transform:translateZ(0)] md:max-w-none">
          <img
            src={IMAGES.shopHero}
            alt={hero.heading}
            className="aspect-[4/5] w-full origin-center object-cover motion-safe:animate-fade-zoom-out"
          />
        </div>
      </div>
    </section>
  );
}

export default ShopHeroSection;
