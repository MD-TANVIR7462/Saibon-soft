"use client"
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesCTA } from "@/components/services/services-cta";
import SubHero from "@/components/Shared/SubHero";
import { useState } from "react";
import { Service } from "@/components/types/services";
import { ServiceModal } from "@/components/services/ServiceModal";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <>
      <SubHero
        heroTittle={"Our Services"}
        subHeroTittle={
          "Comprehensive digital solutions tailored to transform your business and drive growth in the modern digital landscape."
        }
      ></SubHero>
      <ServicesGrid onServiceClick={setSelectedService} />
      <ServicesCTA />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};

export default ServicePage;
