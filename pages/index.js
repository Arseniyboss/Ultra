import Head from "next/head";
import { homeObjectOne, homeObjectTwo, homeObjectThree } from "../data/data";
import { Navbar, InfoSection, Pricing, Footer } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ultra</title>
      </Head>
      <Navbar />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <Pricing />
      <InfoSection {...homeObjectThree} />
      <Footer />
    </>
  );
};
export default Home;
