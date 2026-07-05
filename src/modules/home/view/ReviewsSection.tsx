import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
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

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reviews.items.map((review, index) => (
            <div
              key={review.author}
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition-all duration-300 [transform:translateZ(0)] group-hover:border-primary-200 group-hover:shadow-xl">
                <img
                  src={IMAGES.reviewShowcase[index % IMAGES.reviewShowcase.length]}
                  alt={`${review.author} sharing their NCC ritual`}
                  className="aspect-[4/5] w-full object-cover transition-[filter] duration-500 group-hover:brightness-105"
                />
              </div>

              <span className="mt-5 flex text-primary-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Icon key={starIndex} icon="mdi:star" width={14} height={14} />
                ))}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-neutral-900">
                {review.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{review.body}</p>
              <span className="mt-3 text-sm font-medium text-neutral-900">
                {review.author}
              </span>
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
