import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

import MissionHero from "@/components/mission/MissionHero";
import MissionSection from "@/components/mission/MissionSection";
import VisionBanner from "@/components/mission/VisionBanner";
import VisionSection from "@/components/mission/VisionSection";

export default function MissionVisionPage() {
  return (
    <>
      <TopBar />
      <Header />
      <SocialSidebar />

      <main>
        <MissionHero />
        <MissionSection />
        <VisionBanner />
        <VisionSection />
      </main>

      <Footer />
    </>
  );
}