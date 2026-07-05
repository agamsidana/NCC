import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";
import type { ShopProduct } from "../types";

const categoryLabels: Record<string, string> = {
  cinnamon: "Cinnamon",
  ritual: "Ritual",
  "gift-set": "Gift Set",
};

function ProductGrid({ products }: { products: readonly ShopProduct[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.slug}
          to={`/products/${product.slug}`}
          className="group block max-w-xs rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 [transform:translateZ(0)] group-hover:border-primary-200">
            <div className="relative overflow-hidden rounded-t-2xl [transform:translateZ(0)]">
              <img
                src={product.img}
                alt={product.name}
                className="aspect-square w-full rounded-t-2xl object-cover transition-[filter] duration-500 group-hover:brightness-105"
              />
              {product.category && categoryLabels[product.category] && (
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-600 backdrop-blur">
                  {categoryLabels[product.category]}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1 p-4">
              <h3 className="text-sm font-medium text-neutral-900">
                {product.name}
              </h3>
              {product.description && (
                <p className="line-clamp-2 text-xs text-neutral-500">
                  {product.description}
                </p>
              )}
              <div className="mt-auto flex items-center justify-between pt-2.5">
                <p className="text-sm font-semibold text-neutral-900">
                  {product.price}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-transform duration-300 group-hover:translate-x-0.5">
                  {strings.shop.exploreCta}
                  <Icon icon="mdi:arrow-right" width={14} height={14} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
