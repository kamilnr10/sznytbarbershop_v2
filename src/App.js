import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import Navigation from "./components/organisms/Navigation/Navigation";
import MainTemplate from "./components/organisms/MainTemplate/MainTemplate";
import TickerSection from "./components/organisms/TickerSection/TickerSection";
import OurStory from "./components/organisms/OurStory/OurStory";
import Reviews from "./components/organisms/Reviews/Reviews";
import VideoSection from "./components/organisms/VideoSection/VideoSection";
import Team from "./components/pages/Team/Team";
import Works from "./components/pages/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <TickerSection />
      <OurStory />
      <Reviews />
      <VideoSection />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <MainTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Works />} />
        </Routes>
      </MainTemplate>
    </div>
  );
}

export default App;
