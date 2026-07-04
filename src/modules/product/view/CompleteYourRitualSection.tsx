import { Link } from "react-router-dom";
import type { Product } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

type CompleteYourRitualSectionProps = {
  product: Product;
};

function CompleteYourRitualSection({ product }: CompleteYourRitualSectionProps) {
  const { productPage } = strings;
  const { crossSell } = product;

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
          {crossSell.heading ?? productPage.crossSellHeading}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {crossSell.items.map((item) => (
            <Link key={item.href} to={item.href} className="flex flex-col gap-2 text-left">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="text-sm font-medium text-neutral-900">{item.title}</p>
              <p className="text-sm text-neutral-600">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompleteYourRitualSection;
