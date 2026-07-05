import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

function HarvestPeopleSection() {
  const { harvestPeople } = strings.home;

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {harvestPeople.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {harvestPeople.heading}
          </h2>
          <p className="mt-4 text-neutral-600">{harvestPeople.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {harvestPeople.photos.map((photo) => (
            <div key={photo.image} className="group flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition-all duration-300 [transform:translateZ(0)] group-hover:-translate-y-1 group-hover:border-primary-200 group-hover:shadow-xl">
                <img
                  src={IMAGES.growers[photo.image as keyof typeof IMAGES.growers]}
                  alt={photo.caption}
                  className="aspect-[3/4] w-full object-cover transition-[filter] duration-500 group-hover:brightness-105"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-500">{photo.caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={harvestPeople.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {harvestPeople.cta}
            <Icon icon="mdi:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HarvestPeopleSection;
