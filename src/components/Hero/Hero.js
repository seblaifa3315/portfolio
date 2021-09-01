import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    
    <LeftSection>

      <div style={{display:"flex"}}>

      <div>
      <SectionTitle main center>
        Hi there... <br/>
        I am Sebastien Laifa <br/>
        Full Stack Web Developer
      </SectionTitle>
      <SectionText>
      Dedicated and solution-oriented MERN Full Stack Web Developer I design, develop, and implement applications using a range of technologies.
      </SectionText>
      </div>
      
      <Img src="/images/chosen1.JPG" />
      
      </div>
     
      <Button target="_blank" onClick={() => window.location = "https://www.google.com" }>Learn More</Button>
    </LeftSection>
    
  </Section>
);

export default Hero;