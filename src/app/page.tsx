import HeroSection from "@/components/Hero/HeroSection";
import AppInfo from "@/components/HomePage/AppInfo";
import CustomPCCTA from "@/components/HomePage/CustomPCCTA";
import FlashSales from "@/components/HomePage/FlashSales/FlashSales";
import HomeCategories from "@/components/HomePage/HomeCategories";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <FlashSales />

      <HomeCategories />

      <CustomPCCTA />

      <AppInfo />
    </>
  );
};

export default HomePage;
