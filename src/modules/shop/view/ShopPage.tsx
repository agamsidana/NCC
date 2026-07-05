import SEO from "../../../common/components/SEO";
import Reveal from "../../../common/components/Reveal";
import strings from "../../../common/constants/strings";
import AccessoriesSection from "./AccessoriesSection";
import AllProductsSection from "./AllProductsSection";
import ChooseYourRitualSection from "./ChooseYourRitualSection";
import FeaturedChaiSection from "./FeaturedChaiSection";
import FeaturedCoffeeSection from "./FeaturedCoffeeSection";
import GiftSetsBannerSection from "./GiftSetsBannerSection";
import ShopHeroSection from "./ShopHeroSection";

function ShopPage() {
  const { shop } = strings;

  return (
    <>
      <SEO title={shop.title} description={shop.description} path="/shop" />

      <ShopHeroSection />
      <Reveal>
        <ChooseYourRitualSection />
      </Reveal>
      <Reveal>
        <FeaturedCoffeeSection />
      </Reveal>
      <Reveal>
        <FeaturedChaiSection />
      </Reveal>
      <Reveal>
        <AccessoriesSection />
      </Reveal>
      <Reveal>
        <AllProductsSection />
      </Reveal>
      <Reveal>
        <GiftSetsBannerSection />
      </Reveal>
    </>
  );
}

export default ShopPage;
