import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

function FeaturedChaiSection() {
  const { featuredChai } = strings.shop;
  const product = getProductBySlug("golden-chai-latte");

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-neutral-50 md:grid-cols-2">
          <div className="order-2 flex flex-col items-start justify-center gap-3 p-8 md:order-1 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-600">
              {featuredChai.category}
            </p>
            <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
              {featuredChai.heading}
            </h2>
            <p className="max-w-sm text-sm text-neutral-600">{featuredChai.description}</p>
            {product && <p className="text-lg font-semibold text-neutral-900">{product.price}</p>}
            <Link
              to={featuredChai.href}
              className="mt-2 inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {featuredChai.cta}
            </Link>
          </div>
          <img
            src={featuredChai.img}
            alt={featuredChai.heading}
            className="order-1 aspect-[4/3] w-full object-cover md:order-2 md:aspect-auto md:h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedChaiSection;
