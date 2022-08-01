import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio..
      </SectionTitle>
      <SectionText>
        This is my brief intro about my Skills, Knowledge, Interests, and
        Achivements...
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://google.com";
        }}
      >
        {" "}
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
