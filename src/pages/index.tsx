// Next
import { NextPage } from "next";

// Components
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Separator from "../Components/Separator";
import Footer from "../Components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <Footer />
    </>
  );
};

export default Home;
