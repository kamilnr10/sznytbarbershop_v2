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

  @media (min-width: 1200px) {
    /* width: 300px; */

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  h1 {
    /* margin: 20px 0; */
    /* font-size: 80px; */
  }
  p {
    padding: 0 0 20px 0;
    font-family: "Lexend Zetta", sans-serif;
    font-size: 12px;
    line-height: 1.5;

    @media (min-width: 810px) {
      font-size: 10px;
    }

    @media (min-width: 1200px) {
      font-size: 9px;
      line-height: 1.3;
      padding: 0 0 5px 0;
    }

    @media (min-width: 1500px) {
      padding: 0 0 0 0;
      font-size: 11px;
      line-height: 1.4;
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
          query: "{ ourstory { id description } }",
        }),
      });

      const myData = await response.json();

      setData(myData);
      // console.log(myData.data);
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
      <p>{data.data.ourstory.description}</p>
    </TextConainer>
  );
};

export default OurStory;
