import React from "react";
import GlobalStyle from "./assets/globalStyles";
import Navigation from "./components/organisms/Navigation/Navigation";
import MainTemplate from "./components/organisms/MainTemplate/MainTemplate";
import TickerSection from "./components/organisms/TickerSection/TickerSection";
import OurStory from "./components/organisms/OurStory/OurStory";
import Reviews from "./components/organisms/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainTemplate>
        <TickerSection />
        <OurStory />
        <Reviews />
        <div style={{ backgroundColor: "yellow" }}>SECTION 4</div>
      </MainTemplate>
    </div>
  );
}

export default App;
