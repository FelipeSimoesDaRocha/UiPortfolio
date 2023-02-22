// Next
import { NextPage } from "next";

// Components
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import { Suspense } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback="loading">
        <Hero />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
