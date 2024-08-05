import Layout from "../components/Home/LayoutTwo/Layout";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <Testimonials />
      </Layout>
    </>
  );
}
