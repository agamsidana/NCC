import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import SEO from "../../../common/components/SEO";
import { getAllProducts } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

function ReviewsPage() {
  const { reviewsPage } = strings;
  const products = getAllProducts();

  const allReviews = products.flatMap((product) =>
    product.reviews.items.map((review) => ({
      ...review,
      productTitle: product.title,
      productHref: `/products/${product.slug}`,
    })),
  );

  const averageRating = allReviews.length
    ? allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length
    : 0;

  return (
    <>
      <SEO title={reviewsPage.title} description={reviewsPage.subtitle} path="/reviews" />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">{reviewsPage.title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">{reviewsPage.subtitle}</p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="flex text-primary-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                  key={index}
                  icon={index < Math.round(averageRating) ? "mdi:star" : "mdi:star-outline"}
                  width={18}
                  height={18}
                />
              ))}
            </span>
            <span className="font-semibold text-neutral-900">{averageRating.toFixed(1)}</span>
            <span className="text-neutral-500">
              from {allReviews.length} reviews across {products.length} products
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {allReviews.map((review, index) => (
            <div
              key={`${review.productHref}-${review.author}-${index}`}
              className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex text-primary-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Icon
                      key={starIndex}
                      icon={starIndex < review.rating ? "mdi:star" : "mdi:star-outline"}
                      width={14}
                      height={14}
                    />
                  ))}
                </span>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900">{review.title}</h3>
              <p className="text-sm text-neutral-600">{review.body}</p>
              <div className="mt-1 flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-900">{review.author}</span>
                <Link to={review.productHref} className="text-primary-600 hover:underline">
                  {review.productTitle}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewsPage;
