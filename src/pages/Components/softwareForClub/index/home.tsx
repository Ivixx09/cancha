import React from "react";
import BackgroundImage2 from "./backgroundimage2";
import OdometerRow from './numbers';
import Section from "./section";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Faq from './faq'
import Footer from "../../landingPage/footer";
function Home(){
  const maxValues = [1500, 45, 20000, 220000]; // Example maximum values for each Odometer

return (
    <div>
      <BackgroundImage2/>
      <OdometerRow titles={['Courts', 'Cities', 'Bookings', 'Active Players']} maxValues={maxValues} />
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Home;