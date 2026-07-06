import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";
import { addItem } from "../../cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";

function AccessoriesSection() {
  const { accessoriesHeading, products } = strings.shop;
  const dispatch = useAppDispatch();
  const accessories = products.filter((product) => product.category === "accessory");

  function handleAddToCart(slug: string, name: string, price: string, img: string) {
    const detail = getProductBySlug(slug);
    dispatch(
      addItem({
        slug,
        title: name,
        image: img,
        variant: detail?.variant.value ?? "Standard",
        price,
        quantity: 1,
      }),
    );
  }

  return (
    <section id="accessories" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
          {accessoriesHeading.heading}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {accessories.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <Link to={`/products/${product.slug}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-1 p-4">
                <Link to={`/products/${product.slug}`}>
                  <h3 className="text-sm font-semibold text-neutral-900">{product.name}</h3>
                </Link>
                {product.description && (
                  <p className="line-clamp-2 text-xs text-neutral-500">{product.description}</p>
                )}
                <p className="mt-1 text-sm font-semibold text-neutral-900">{product.price}</p>
                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(product.slug, product.name, product.price, product.img)
                  }
                  className="mt-3 inline-flex items-center justify-center rounded-full border border-neutral-900 px-4 py-2 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccessoriesSection;
