
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Neighborhood from "@/components/Neighborhood";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import PopupForm from "@/components/PopupForm";
import FeatureSlider from "@/components/FeatureSlider";




export default function Home() {
  return (
    <div>

    <TopBar/>
    <SocialSidebar />
    <Header/>
    <PopupForm />
    <Hero />
    <FeatureSlider />
    <Categories/>
    <News />
    <Features/>
    <Stats />
    <WhyChooseUs />
    <Neighborhood />
    <Footer />
    
    </div>
    
  );
}
