import Layout from "../components/Bps/Layout/Layout";
import Banners from "../components/BPS/Banners/Banner";
import PartE from "../components/BPS/PartE/PartE";
import PartF from "../components/BPS/PartF/PartF";
import Course from "../components/BPS/Course/Course";
import SeoHead from "../components/SeoHead";
import FeedbackSection from "../components/BPS/FeedbackSection/FeedbackSection";
import FAQSection from "../components/BPS/FAQ/FAQSection";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <Banners />
        <PartE />
        <PartF />
        <Course />
       <FeedbackSection />
       <FAQSection />
      </Layout>
    </>
  );
}
