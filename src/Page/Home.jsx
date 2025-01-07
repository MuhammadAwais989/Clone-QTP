import React from "react";
import {HeroSection} from "../Components/Hero/HeroSection";
import {SectionTwo} from "../Components/Second-Section/Section-two";
import CardSection from "../Components/Card-Section/CardSection";
import ThirdSec from "../Components/Third-Section/ThirdSec";
import PublicMessage from "../Components/Public-Message/PublixMessage";
import {Service} from "../Components/Service-Section/Service";
import AppSection from "../Components/App-Section/AppSection";
import Message from "../Components/Caretaker/CaretakerChild";
// import Footer from "../Components/Footer/Footer";



function Home() {
  return (
    <>  
      <HeroSection />
      <SectionTwo />
      <CardSection />
      <ThirdSec />
      <PublicMessage />
      <Service /> 
      <AppSection/>
      <Message/>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
