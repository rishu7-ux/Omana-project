import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import AboutHero from "@/components/about/ AboutHero";
import Journey from "@/components/about/Journey";
import CompanyHistory from "@/components/about/CompanyHistory";
import OurValue from "@/components/about/OurValue";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurService from "@/components/about/OurService";
import Categories from "@/components/Categories";
import DirectorMessage from "@/components/about/DirectorMessage";






export default function AboutPage() {
  return (
    <>

      <TopBar />
      <Header />
      <SocialSidebar />
      <main>
      <AboutHero />
      <Journey />
      <CompanyHistory />
      <OurValue />
      <WhatWeDo />
      <OurService />
      <Categories />
      <DirectorMessage />
      </main>
      <Footer/>

    </>
  );
}