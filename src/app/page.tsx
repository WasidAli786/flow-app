import AmazingDesign from "@/components/home/amazing-design";
import BalanceSection from "@/components/home/balance-section";
import CashManage from "@/components/home/cash-manage";
import DesignAnalytics from "@/components/home/design-analytics";
import FinanceCarousal from "@/components/home/finance-carousal";
import FullStory from "@/components/home/full-story";
import HeroSection from "@/components/home/hero-section";
import SmartTrack from "@/components/home/smart-track";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AmazingDesign />
      <DesignAnalytics />
      <FullStory />
      <BalanceSection />
      <SmartTrack />
      <FinanceCarousal />
      <CashManage />
    </>
  );
}
