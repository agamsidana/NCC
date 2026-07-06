import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import SEO from "../../../common/components/SEO";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function GrowersPage() {
  const { growers } = strings;

  return (
    <>
      <SEO title={growers.title} description={growers.intro} path="/our-growers" />

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
          {growers.eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">{growers.title}</h1>
        <p className="mt-4 text-neutral-600">{growers.intro}</p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {growers.gallery.map((photo) => (
            <div key={photo.image} className="group flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition-all duration-300 [transform:translateZ(0)] group-hover:-translate-y-1 group-hover:border-primary-200 group-hover:shadow-xl">
                <img
                  src={IMAGES.growers[photo.image as keyof typeof IMAGES.growers]}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-[filter] duration-500 group-hover:brightness-105"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-500">{photo.caption}</p>
            </div>
          ))}
        </div>

        {growers.sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-neutral-900">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3 text-neutral-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <Link
          to={growers.href}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          {growers.cta}
          <Icon icon="mdi:arrow-right" width={16} height={16} />
        </Link>
      </div>
    </>
  );
}

export default GrowersPage;
