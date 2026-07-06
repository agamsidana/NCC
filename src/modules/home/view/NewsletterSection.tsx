import { Icon } from "@iconify/react";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function NewsletterSection() {
  const { newsletter } = strings.home;

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
          {newsletter.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
          {newsletter.heading}
        </h2>
        <p className="mt-4 text-sm text-neutral-600 sm:text-base">
          {newsletter.subheading}
        </p>

        <ul className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
          {newsletter.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-neutral-700">
              <Icon
                icon="mdi:check-circle-outline"
                width={16}
                height={16}
                className="text-primary-600"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="flex -space-x-2">
            {IMAGES.reviewers.slice(0, 4).map((reviewer, index) => (
              <span
                key={index}
                className="h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-neutral-100"
              >
                <img
                  src={reviewer}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-125 object-cover"
                />
              </span>
            ))}
          </span>
          <span className="text-sm font-medium text-neutral-700">
            {newsletter.socialProof}
          </span>
        </div>

        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder={newsletter.placeholder}
            className="w-full flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {newsletter.cta}
            <Icon icon="mdi:arrow-right" width={16} height={16} />
          </button>
        </form>

        <p className="mt-4 text-xs text-neutral-400">{newsletter.disclaimer}</p>
      </div>
    </section>
  );
}

export default NewsletterSection;
