// Next
import { NextPage } from "next";

// Components
import { Suspense } from "react";

import Header from "../Components/Header";
import Hero from "Components/Hero";
import Work from "Components/Work";
import Footer from "../Components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback="loading">
        <Hero />
        <Work />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
