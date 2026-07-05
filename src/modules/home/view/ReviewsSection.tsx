import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";

function ReviewsSection() {
  const { reviews } = strings.home;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {reviews.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {reviews.heading}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="flex text-primary-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon key={index} icon="mdi:star" width={16} height={16} />
              ))}
            </span>
            <span className="font-semibold text-neutral-900">
              {reviews.ratingScore}
            </span>
            <span className="text-neutral-500">from {reviews.ratingCount}</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.items.map((review) => (
            <div
              key={review.author}
              className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-lg"
            >
              <span className="flex text-primary-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon key={index} icon="mdi:star" width={14} height={14} />
                ))}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900">
                {review.title}
              </h3>
              <p className="flex-1 text-sm text-neutral-600">{review.body}</p>
              <div className="flex items-center gap-2 pt-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                  {review.author.charAt(0)}
                </span>
                <span className="text-sm font-medium text-neutral-900">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={reviews.href}
            className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
          >
            {reviews.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
