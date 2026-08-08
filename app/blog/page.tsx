import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Pagination from "@/components/blog/Pagination";

export default function BlogPage() {
  return (
    <>
      <TopBar />
      <Header />
      <SocialSidebar />

      <main>

        <BlogHero />
        <BlogGrid />
        <Pagination />
      
      </main>

      <Footer />
    </>
  );
}