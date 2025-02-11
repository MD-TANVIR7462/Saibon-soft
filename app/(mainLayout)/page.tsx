import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import Banner2 from "@/components/Banner/Banner2";
import ProjectsSection from "@/components/Porfolio/ProjectsSection";




export default function Home() {
  return (
    <>
      <main>
        <Banner2 />
        <Services />
        <ProjectsSection />
        <Features />
        <TeamSection />
        <Testimonials />
      </main>
    </>
  );
}
