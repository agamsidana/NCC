import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function OurStorySection() {
  const { ourStory } = strings.home;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16">
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <img
            src={IMAGES.ourStory}
            alt={ourStory.heading}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {ourStory.eyebrow}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {ourStory.heading}
          </h2>
          <blockquote className="border-l-2 border-primary-300 pl-4 font-serif text-lg italic text-neutral-700 sm:text-xl">
            “{ourStory.quote}”
          </blockquote>
          <div className="text-sm">
            <p className="font-semibold text-neutral-900">{ourStory.authorName}</p>
            <p className="text-neutral-500">{ourStory.authorTitle}</p>
          </div>
          <Link
            to={ourStory.href}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {ourStory.cta}
            <Icon icon="mdi:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
