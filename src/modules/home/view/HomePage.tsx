import Reveal from "../../../common/components/Reveal";
import SEO from "../../../common/components/SEO";
import AlbaReserveSection from "./AlbaReserveSection";
import GradeSection from "./GradeSection";
import GradeSystemSection from "./GradeSystemSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import OurStorySection from "./OurStorySection";
import ReviewsSection from "./ReviewsSection";
import RitualsSection from "./RitualsSection";
import ScienceHighlightsSection from "./ScienceHighlightsSection";
import TrustBarSection from "./TrustBarSection";
import WhyProductSection from "./WhyProductSection";

function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to My Site — a fast, SEO-friendly React application."
        path="/"
      />

      <HeroSection />
      <Reveal>
        <TrustBarSection />
      </Reveal>
      <Reveal>
        <RitualsSection />
      </Reveal>
      <Reveal>
        <WhyProductSection />
      </Reveal>
      <Reveal>
        <GradeSection />
      </Reveal>
      <Reveal>
        <GradeSystemSection />
      </Reveal>
      <Reveal>
        <AlbaReserveSection />
      </Reveal>
      <Reveal>
        <OurStorySection />
      </Reveal>
      <Reveal>
        <ScienceHighlightsSection />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <NewsletterSection />
      </Reveal>
    </>
  );
}

export default HomePage;
