import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import strings from "../../../common/constants/strings";

type Product = {
  slug: string;
  name: string;
  price: string;
  description?: string | null;
  img: string;
};

function ProductGrid({ products }: { products: readonly Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.slug}
          to={`/products/${product.slug}`}
          className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-md"
        >
          <img
            src={product.img}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="text-sm font-medium text-neutral-900">
              {product.name}
            </h3>
            {product.description && (
              <p className="line-clamp-2 text-xs text-neutral-500">
                {product.description}
              </p>
            )}
            <p className="mt-auto text-sm font-semibold text-primary-600">
              {product.price}
            </p>
            <span className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-xs font-medium text-white transition-colors group-hover:bg-primary-700">
              {strings.shop.exploreCta}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
