import Layout from "../components/Home/LayoutTwo/Layout";
import Tutors from "../components/Home/Tutors/Tutors";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <Tutors />
      </Layout>
    </>
  );
}
