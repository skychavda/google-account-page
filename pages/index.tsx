import Head from "next/head";
import Feature from "../components/feature";
import Footer from "../components/footer";
import GoToGoogle from "../components/go-to-google";
import Header from "../components/header";
import HeroContainer from "../components/hero";
import Sidebar from "../components/sidebar";
import TabsAndSliderSection from "../components/tab-and-slider-section";
import { CONTAINER_DETAILS } from "../constant";

export default function Home() {
  return (
    <>
       {/* Adding Meta tags for SEO */}
       <Head>
        <title>Google Account</title>
        <meta />
      </Head>

      <Header />
      <Sidebar />
      <HeroContainer />
      <Feature />
      {CONTAINER_DETAILS.map((detail) => (
        <TabsAndSliderSection key={detail.id} containerDetail={detail} />
      ))}
      <GoToGoogle />
      <Footer />
    </>
  );
}
