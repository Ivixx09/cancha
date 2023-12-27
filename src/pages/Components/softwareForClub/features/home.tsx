import React from "react";

import Section from "./section";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Header2 from "./header2";
import Section2A from "./section2a";
import Section2B from "./section2b";
import Section2C from "./section2c";
import Section2D from "./section2d";
import Section3B from "./section3b";



function Home(){
 return (
    <div>
      <Header2/>
      
      <Section/>
      <Section2/>
      <Section2A/>
      <Section2B/>
      <Section2C/>
      <Section2D/>
      <Section3/>
      <Section3B/>
      <Section4/>                  
    </div>
  );
}

export default Home;