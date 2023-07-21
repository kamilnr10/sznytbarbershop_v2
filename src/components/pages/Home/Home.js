import React from "react";
import TickerSection from "../../organisms/TickerSection/TickerSection";
import OurStory from "../../organisms/OurStory/OurStory";
import Reviews from "../../organisms/Reviews/Reviews";
import VideoSection from "../../organisms/VideoSection/VideoSection";

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

export default Home;
