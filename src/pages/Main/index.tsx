import React from "react";
import { PageBackground, Text, Container, Buttons } from "./styles";

import street from "../../assets/street.png";
import tracks from "../../assets/tracks.png";
import church from "../../assets/church.png";
import Contact from "../../components/Contact";

const Main: React.FC = () => {
  return (
    <Container>
      <PageBackground backgroundURL={street}>
        <Text numberOfChilds={3}>
          <span>Front.</span>
          <span>Back.</span>
          <span>Full.</span>
        </Text>
      </PageBackground>
      <PageBackground backgroundURL={tracks}>
        <Text numberOfChilds={2}>
          <span>React.</span>
          <span>Node.</span>
        </Text>
      </PageBackground>
      <PageBackground backgroundURL={church}>
        <Contact />
        <Buttons>
          <a
            href="https://github.com/danielolaviobr"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            href="https://br.linkedin.com/in/daniel-olavio"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1Uxu-eBFdtR4W43ed-MU5zMcVZjwHrao_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resumé</button>
          </a>
        </Buttons>
      </PageBackground>
    </Container>
  );
};

export default Main;
