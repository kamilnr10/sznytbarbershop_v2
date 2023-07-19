import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const TextConainer = styled.div`
  -webkit-box-shadow: 0px -38px 56px 36px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px -38px 56px 36px rgba(0, 0, 0, 1);
  box-shadow: 0px -38px 56px 36px rgba(0, 0, 0, 1);
  z-index: 1;
  padding: 0 5%;

  @media (min-width: 810px) {
    margin: 80px 0 0;
    padding: 0 30px;
  }
  h1 {
    /* margin: 20px 0; */
    font-size: 80px;
  }
  p {
    padding: 0 0 20px 0;
    font-family: "Lexend Zetta", sans-serif;
    font-size: 12px;
    line-height: 1.5;

    @media (min-width: 810px) {
      font-size: 10px;
    }
  }
`;

const token = process.env.REACT_APP_TOKEN;

const OurStory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query:
            "{ allOurstories { id description } _allOurstoriesMeta { count } }",
        }),
      });

      const myData = await response.json();

      setData(myData.data.allOurstories);
      setLoading(false);
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
      setLoading(false);
    }
  };

  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(urlOK, {
  //         method: "GET",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           "Access-Control-Allow-Origin": "http://localhost:3000",
  //         },
  //       });
  //       const myData = await response.json();

  //       console.log(myData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    fetchData();
    // fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TextConainer>
      <h1>OUR STORY</h1>
      <p>{data[0].description}</p>
    </TextConainer>
  );
};

export default OurStory;
