import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeFilter = searchParams.get("category");

  const visibleProducts = activeFilter
    ? products.filter((product) => product.category === activeFilter)
    : products;

  const activeFilterLabel = filters.find((filter) => filter.value === activeFilter)?.label;

  function handleFilterChange(value: string | null) {
    // setSearchParams drops the URL hash on navigation, which sends ScrollToTop
    // to the top of the page — navigate with the full path so #all-products stays.
    navigate(value ? `/shop?category=${value}#all-products` : "/shop#all-products", {
      replace: true,
    });
  }

  return (
    <section id="all-products" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
          {activeFilter ? activeFilterLabel : allProductsHeading.heading}
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
