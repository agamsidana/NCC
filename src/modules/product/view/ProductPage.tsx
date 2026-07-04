import { useParams } from "react-router-dom";
import SEO from "../../../common/components/SEO";
import { getProductBySlug } from "../../../common/constants/products";
import NotFoundPage from "../../not-found/NotFoundPage";
import CompleteYourRitualSection from "./CompleteYourRitualSection";
import ProductOverviewSection from "./ProductOverviewSection";
import ProductReviewsSection from "./ProductReviewsSection";
import WhoIsThisForSection from "./WhoIsThisForSection";

function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={product.title}
        description={product.description}
        path={`/products/${product.slug}`}
      />

      <ProductOverviewSection product={product} />
      <WhoIsThisForSection product={product} />
      <ProductReviewsSection product={product} />
      <CompleteYourRitualSection product={product} />
    </>
  );
}

export default ProductPage;
