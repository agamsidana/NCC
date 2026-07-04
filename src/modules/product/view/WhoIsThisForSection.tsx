import { Icon } from "@iconify/react";
import type { Product } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

type WhoIsThisForSectionProps = {
  product: Product;
};

function WhoIsThisForSection({ product }: WhoIsThisForSectionProps) {
  const { productPage } = strings;

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-3xl text-neutral-900 sm:text-4xl">
          {productPage.whoIsThisForHeading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {product.audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-6"
            >
              <Icon icon={audience.icon} width={24} height={24} className="text-primary-600" />
              <h3 className="text-sm font-semibold text-neutral-900">{audience.title}</h3>
              <p className="text-sm text-neutral-600">{audience.description}</p>
              <ul className="mt-1 flex flex-col gap-2">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-neutral-600">
                    <Icon
                      icon="mdi:check"
                      width={14}
                      height={14}
                      className="mt-0.5 shrink-0 text-primary-500"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoIsThisForSection;
