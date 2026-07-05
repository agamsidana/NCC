import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";

function GiftSetsBannerSection() {
  const { giftSetsBanner } = strings.shop;

  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={giftSetsBanner.img}
            alt={giftSetsBanner.heading}
            className="h-[420px] w-full object-cover sm:h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 px-8 sm:px-14">
            <h2 className="max-w-sm font-serif text-3xl leading-tight text-white sm:text-4xl">
              {giftSetsBanner.heading}
            </h2>
            <p className="max-w-xs text-sm text-neutral-200">{giftSetsBanner.subheading}</p>
            <Link
              to="/shop/gift-sets"
              className="mt-3 inline-flex items-center rounded-full bg-secondary-500 px-7 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-secondary-400"
            >
              {giftSetsBanner.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftSetsBannerSection;
