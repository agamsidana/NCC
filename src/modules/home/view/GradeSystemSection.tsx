import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";

function GradeSystemSection() {
  const { gradeSystem } = strings.home;

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600">
            {gradeSystem.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
            {gradeSystem.heading}
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            {gradeSystem.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {gradeSystem.products.map((product) => (
            <div
              key={product.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <img
                src={product.img}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-[filter] duration-500 hover:brightness-105"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {product.title}
                </h3>
                <p className="flex-1 text-xs text-neutral-600">
                  {product.description}
                </p>
                <p className="text-sm font-semibold text-primary-600">
                  {product.price}
                </p>
                <Link
                  to={product.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  {gradeSystem.exploreCta}
                  <Icon icon="mdi:arrow-right" width={16} height={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-primary-400 hover:text-primary-600"
          >
            {gradeSystem.viewAllCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GradeSystemSection;
