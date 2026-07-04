import { Icon } from "@iconify/react";
import type { Product } from "../../../common/constants/products";

type ProductReviewsSectionProps = {
  product: Product;
};

function ProductReviewsSection({ product }: ProductReviewsSectionProps) {
  const { reviews } = product;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">{reviews.heading}</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {reviews.subheading}
          </p>
          <div className="mt-3 flex items-center justify-center gap-1 text-primary-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} icon="mdi:star" width={18} height={18} />
            ))}
          </div>
          <p className="mt-1 text-sm text-neutral-500">{reviews.ratingCount}</p>
        </div>

        <div className="mt-10 flex flex-col divide-y divide-neutral-200">
          {reviews.items.map((review) => (
            <div key={review.author} className="flex flex-col gap-2 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-primary-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      icon={index < review.rating ? "mdi:star" : "mdi:star-outline"}
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900">{review.title}</h3>
              <p className="text-sm text-neutral-600">{review.body}</p>
              <p className="text-sm font-medium text-neutral-900">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductReviewsSection;
