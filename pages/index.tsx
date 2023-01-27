import { NextPage } from "next";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Separator from "../Components/Separator";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Separator />
    </div>
  );
};

export default Home;
