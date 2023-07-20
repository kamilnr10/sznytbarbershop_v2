import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SectionContainer = styled.div`
  width: 100vw;
  margin: 80px 0 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//{ allGalleries(filter: {id: {eq: ""}}) { id name preview { id url } gallery { id url } width height } }
const Art = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
          query: `{ allGalleries(filter: {id: {eq: ${id}}}) { id name preview { id url } gallery { id url } width height } }`,
        }),
      });

      const myData = await response.json();

      setData(myData);
      console.log(data.data.allGalleries);
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
    <SectionContainer>
      Art {id}
      <ImageContainer>
        {data.data.allGalleries[0].gallery.map((item) => (
          <img src={item.url} alt="" />
        ))}
      </ImageContainer>
    </SectionContainer>
  );
};

export default Art;
