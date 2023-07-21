import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const GalleriesSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
  }

  h2 {
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

// { allGalleries { id name preview { id url } gallery { id url } width height } }
const Galleries = () => {
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
          query:
            "{ allGalleries { id name preview { id url } gallery { id url } width height } }",
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
    <GalleriesSection>
      <h1>Gallery</h1>
      {data.data.allGalleries.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <Link to={`/gallery/${item.id}`}>
            <ImgContainer>
              <img src={item.preview.url} alt="gallery_image" />
            </ImgContainer>
          </Link>
        </div>
      ))}
    </GalleriesSection>
  );
};

export default Galleries;
