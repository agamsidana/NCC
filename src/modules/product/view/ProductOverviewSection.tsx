import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../common/constants/image-source";
import type { Product } from "../../../common/constants/products";
import strings from "../../../common/constants/strings";

const galleryImages = [IMAGES.mainProduct, IMAGES.mainProduct, IMAGES.mainProduct];

type ProductOverviewSectionProps = {
  product: Product;
};

function ProductOverviewSection({ product }: ProductOverviewSectionProps) {
  const { productPage } = strings;
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
        <Link to="/" className="hover:text-primary-600">
          Home
        </Link>
        <span className="flex items-center gap-1.5">
          <Icon icon="mdi:chevron-right" width={12} height={12} />
          <Link to={product.categoryHref} className="hover:text-primary-600">
            {product.category}
          </Link>
        </span>
        <span className="flex items-center gap-1.5">
          <Icon icon="mdi:chevron-right" width={12} height={12} />
          <span className="text-neutral-700">{product.title}</span>
        </span>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-3">
          <img
            src={galleryImages[activeImage]}
            alt={product.title}
            className="aspect-square w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="flex gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors ${
                  activeImage === index ? "border-primary-500" : "border-transparent"
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {product.vendor}
            </p>
            <h1 className="mt-1 font-serif text-3xl text-neutral-900 sm:text-4xl">
              {product.title}
            </h1>
          </div>

          <div>
            <p className="text-2xl font-semibold text-neutral-900">{product.price}</p>
            <p className="text-xs text-neutral-500">{productPage.taxesNote}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {product.variant.label}
            </p>
            <span className="inline-flex w-fit items-center rounded-full border border-primary-400 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              {product.variant.value}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {productPage.quantityLabel}
            </p>
            <div className="flex items-center gap-3 rounded-full border border-neutral-300 px-2 py-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:text-primary-600"
              >
                <Icon icon="mdi:minus" width={16} height={16} />
              </button>
              <span className="w-6 text-center text-sm font-medium text-neutral-900">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((value) => value + 1)}
                className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:text-primary-600"
              >
                <Icon icon="mdi:plus" width={16} height={16} />
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 pt-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {productPage.addToCartCta}
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {productPage.buyNowCta}
            </button>
          </div>

          <p className="text-sm text-neutral-600">{product.description}</p>

          <ul className="flex flex-col gap-1.5 text-sm text-neutral-600">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <Icon
                  icon="mdi:circle-small"
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-primary-500"
                />
                {detail}
              </li>
            ))}
          </ul>

          <p className="text-sm text-neutral-600">{product.pairsWith}</p>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-primary-600"
          >
            <Icon icon="mdi:share-variant-outline" width={14} height={14} />
            {productPage.shareLabel}
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 border-y border-neutral-200 py-6 sm:justify-start">
        {productPage.trustBadges.map((badge) => (
          <span
            key={badge.label}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700"
          >
            <Icon icon={badge.icon} width={16} height={16} className="text-primary-600" />
            {badge.label}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ProductOverviewSection;
