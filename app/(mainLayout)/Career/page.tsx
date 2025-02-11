import { GallerySection } from "@/components/Career/Gallery/GallerySection";

import { WhyJoinUs } from "@/components/Career/WhyJoinUs";
import FAQ from "@/components/Shared/Faq/FAQ";
import SubHero from "@/components/Shared/SubHero";

import React from "react";

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <SubHero heroTittle={"Career with us"} />
      <WhyJoinUs />
      <GallerySection />
      <FAQ />
    </div>
  );
};

export default CareerPage;
