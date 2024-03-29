import React from "react";
import styled from "styled-components";
import Navigation from "../../organisms/Navigation/Navigation";

const Wrapper = styled.div`
  position: relative;
  /* padding: 0 5%; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    "."
    "."
    "."
    "."
    ".";

  @media (min-width: 810px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto, auto, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
      "TickerSection OurStory "
      "TickerSection Reviews "
      "TickerSection VideoSection";

    .div1 {
      grid-area: 1 / 1 / 4 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div3 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .div4 {
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  @media (min-width: 1510px) {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 1fr 1fr;
    grid-template-rows: 60% 40%;
    gap: 0px 0px;
    grid-template-areas:
      "TickerSection OurStory Reviews"
      "TickerSection VideoSection VideoSection";
    overflow-x: hidden;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
