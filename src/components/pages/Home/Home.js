import React, { useState, useEffect } from "react";
import TickerSection from "../../organisms/TickerSection/TickerSection";
import OurStory from "../../organisms/OurStory/OurStory";
import Reviews from "../../organisms/Reviews/Reviews";
import VideoSection from "../../organisms/VideoSection/VideoSection";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify({
          query: "{ourstory { id description video { id url } } }",
        }),
      });

      const myData = await response.json();

      setData(myData);
      console.log(myData.data);
      setLoading(false);
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TickerSection />
      <OurStory ourstory={data.data.ourstory.description} loading={loading} />
      <Reviews />
      <VideoSection video={data.data.ourstory.video.url} loading={loading} />
    </>
  );
};

export default Home;
