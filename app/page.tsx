import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import ContactSection from "../components/sections/ContactSection";
import AbstractBackground from "../components/layout/AbstractBackground";
import BackToTopButton from "../components/layout/BackToTopButton";
import portfolioData from "../content/portfolio.json";

// These imports are for side-effects or are used in layout.tsx, so they don't need to be named.
import "../components/layout/Header";
import "../components/layout/BackToTopButton";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <AbstractBackground />
      {/* Header is now handled in layout.tsx, but we keep it here for structure reference */}
      {/* <Header /> */}

      <main className="relative z-10">
        <HeroSection data={portfolioData.hero} siteName={portfolioData.site.name} />
        <AboutSection />
        <ExperienceSection data={portfolioData.experience} />
        <SkillsSection data={portfolioData.skills} />
        <ProjectsSection data={portfolioData.projects} />
        <AchievementsSection />
        <ContactSection /> {/* New section */}
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
