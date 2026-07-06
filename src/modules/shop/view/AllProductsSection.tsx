import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import strings from "../../../common/constants/strings";
import ProductGrid from "../components/ProductGrid";

const filters: { label: string; value: string | null }[] = [
  { label: "All", value: null },
  { label: "Coffee", value: "coffee" },
  { label: "Tea & Chai", value: "tea" },
  { label: "Cinnamon", value: "cinnamon" },
  { label: "Accessories", value: "accessory" },
  { label: "Gift Sets", value: "gift-set" },
];

function AllProductsSection() {
  const { allProductsHeading, products } = strings.shop;
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeFilter, setActiveFilter] = useState<string | null>(categoryParam);

  const visibleProducts = activeFilter
    ? products.filter((product) => product.category === activeFilter)
    : products;

  function handleFilterChange(value: string | null) {
    setActiveFilter(value);
    setSearchParams(value ? { category: value } : {}, { replace: true });
  }

  return (
    <section id="all-products" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
          {allProductsHeading.heading}
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 border-b border-neutral-200 pb-4">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => handleFilterChange(filter.value)}
              className={`text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "text-secondary-600 underline underline-offset-4"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <ProductGrid products={visibleProducts} />
        </div>
      </div>
    </section>
  );
}

export default AllProductsSection;
