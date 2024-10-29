import HeroSection from "../components/Sections/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import ProjectSection from "../components/Sections/ProjectSection/ProjectSection";
import ExperienceSection from "../components/Sections/ExperienceSection/ExperienceSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";

export default function IndexPage() {
   return (
      <>
         <HeroSection />
         <Navbar />
         <AboutSection />
         <ExperienceSection />
         <ProjectSection />
         <ContactSection />
      </>
   );
}
