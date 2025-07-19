import AmazingDesign from "@/components/home/amazing-design";
import BalanceSection from "@/components/home/balance-section";
import DesignAnalytics from "@/components/home/design-analytics";
import FullStory from "@/components/home/full-story";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AmazingDesign />
      <DesignAnalytics />
      <FullStory />
      <BalanceSection />
    </>
  );
}
