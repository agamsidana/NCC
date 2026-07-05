import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

function FeaturedCoffeeSection() {
  const { featuredCoffee } = strings.shop;
  const product = getProductBySlug("ceylon-reserve-coffee");

  return (
    <section className="bg-white pb-6 md:pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-neutral-50 md:grid-cols-2">
          <img
            src={featuredCoffee.img}
            alt={featuredCoffee.heading}
            className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full"
          />
          <div className="flex flex-col items-start justify-center gap-3 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-600">
              {featuredCoffee.category}
            </p>
            <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
              {featuredCoffee.heading}
            </h2>
            <p className="max-w-sm text-sm text-neutral-600">{featuredCoffee.description}</p>
            {product && (
              <p className="text-lg font-semibold text-neutral-900">{product.price}</p>
            )}
            <Link
              to={featuredCoffee.href}
              className="mt-2 inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {featuredCoffee.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCoffeeSection;
