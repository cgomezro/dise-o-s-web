import React from "react";
import About from "./Landing/components/About";
import ProblemSolution from "./Landing/components/ProblemSolution";
import Hero from "./Landing/components/Hero";
import Numbers from "./Landing/components/Numbers";
import Team from "./Landing/components/Team";
import News from "./Landing/components/News";
import Footer from "./Landing/components/Footer";
import Assets from "./Landing/components/Assets";



const Landing = (props) => {
  return (
    <>
      <Hero />
      <Assets {...props}/>
      <About />
      <ProblemSolution />
      <Numbers />
      <Team/>
         <News/>
      <Footer/>
         </>
  );
};

export default Landing;
