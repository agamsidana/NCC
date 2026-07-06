import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";
import { addItem } from "../../cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";

function FeaturedChaiSection() {
  const { featuredChai } = strings.shop;
  const dispatch = useAppDispatch();
  const product = getProductBySlug("ceylon-estate-black-tea");
  const averageRating = product
    ? Math.round(
        product.reviews.items.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.items.length,
      )
    : 5;

  function handleAddToCart() {
    if (!product) return;
    dispatch(
      addItem({
        slug: product.slug,
        title: featuredChai.heading,
        image: featuredChai.img,
        variant: product.variant.value,
        price: product.price,
        quantity: 1,
      }),
    );
  }

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-neutral-50 md:grid-cols-2">
          <div className="order-2 flex flex-col items-start justify-center gap-3 p-8 md:order-1 md:p-12">
            <span className="inline-flex w-fit items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {featuredChai.badge}
            </span>
            <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
              {featuredChai.heading}
            </h2>

            {product && (
              <div className="flex items-center gap-2 text-sm">
                <span className="flex text-primary-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      icon={index < averageRating ? "mdi:star" : "mdi:star-outline"}
                      width={16}
                      height={16}
                    />
                  ))}
                </span>
                <span className="text-neutral-500">{product.reviews.ratingCount}</span>
              </div>
            )}

            <p className="max-w-sm text-sm text-neutral-600">{featuredChai.description}</p>

            {product && (
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold text-neutral-900">{product.price}</p>
                <span className="text-sm text-neutral-500">{product.variant.value}</span>
              </div>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                {featuredChai.addToCartCta}
              </button>
              <Link
                to={featuredChai.href}
                className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
              >
                {featuredChai.cta}
              </Link>
            </div>
          </div>
          <img
            src={featuredChai.img}
            alt={featuredChai.heading}
            loading="lazy"
            decoding="async"
            className="order-1 aspect-[4/3] w-full object-cover md:order-2 md:aspect-auto md:h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedChaiSection;
