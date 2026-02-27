import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoveStoryCtaSection from "@/components/LoveStoryCtaSection";
import ProfileFormSection from "@/components/ProfileFormSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import ThisIsYouSection from "@/components/ThisIsYouSection";
import StatisticsSection from "@/components/StatisticsSection";
import ChallengesSection from "@/components/ChallengesSection";
import WhyTrustUsSection from "@/components/WhyTrustUsSection";
import JourneyStepsSection from "@/components/JourneyStepsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PersonalSignificanceSection from "@/components/PersonalSignificanceSection";
import JoinIntakeSection from "@/components/JoinIntakeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LoveStoryCtaSection />
      <ProfileFormSection />
      <FeaturedInSection />
      <ThisIsYouSection />
      <StatisticsSection />
      <ChallengesSection />
      <WhyTrustUsSection />
      <JourneyStepsSection />
      <SuccessStoriesSection />
      <PersonalSignificanceSection />
      <JoinIntakeSection />
      <Footer />
    </div>
  );
};

export default Index;
