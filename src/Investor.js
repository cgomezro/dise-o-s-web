import React from "react";
import Emerging from "./LandingInvest/components/Emerging";
import Greenwashing from "./LandingInvest/components/Greenwashing";
import HeroI from "./LandingInvest/components/Heroi";
import Advantaje from "./LandingInvest/components/Advantaje";
import TeamI from "./LandingInvest/components/Teami";
import Aboutbc from "./LandingInvest/components/Aboutbc";
import Voluntary from "./LandingInvest/components/Voluntary";
import Footer from "./Landing/components/Footer";
import HeaderInvest from "./HeaderInvest/index";



const Investor = (props) => {
   return (
    <>
     <HeaderInvest />
      <HeroI />
      <Greenwashing />
      <Aboutbc/>
      <Advantaje />
      <Voluntary />
      <TeamI/>
      <Emerging/>
      <Footer/>
    </>
    
  );
};

export default Investor;
