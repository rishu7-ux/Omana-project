import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

import NewsHero from "@/components/news/NewsHero";
import NewsGrid from "@/components/news/NewsGrid";

export default function NewsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <SocialSidebar />

      <NewsHero />
      <NewsGrid />

      <Footer />
    </>
  );
}