import styled from "styled-components";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const TeamContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    /* border-radius: 10%; */
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    border-radius: 10% 10% 10% 10%;

    @media (min-width: 1200px) {
      width: 350px;
    }

    @media (min-width: 1600px) {
      width: 400px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    /* height: 100%; */
    border-radius: 10%;

    @media (min-width: 100%) {
      height: 100%;
    }
  }
`;

const MemberContainer = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 350px;
    height: 100%;
  }

  @media (min-width: 1600px) {
    width: 400px;
    height: 650px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Team = () => {
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
          query: "{ allTeams { id name job description image {id url} } }",
        }),
      });

      const myData = await response.json();

      setData(myData.data.allTeams.reverse());
      console.log(myData.data.allTeams);
      setLoading(false);
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TeamContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((member) => (
          <SwiperSlide key={member.id}>
            <MemberContainer>
              <img src={member.image.url} />
              <InfoContainer>
                <p>{member.name}</p>
                <p>{member.job}</p>
                <div>
                  <a href={member?.instagram} target="_blank">
                    IG
                  </a>
                </div>
              </InfoContainer>
            </MemberContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </TeamContainer>
  );
};

export default Team;
