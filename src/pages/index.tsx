// Next
import { NextPage } from "next";

// Components
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
