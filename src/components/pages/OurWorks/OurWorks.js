import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Carousel, { Modal, ModalGateway } from "react-images";

const SectionContainer = styled.div`
  width: 80vw;
  margin: 80px 0 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  img {
    border-radius: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    /* width: 100%;
    height: 100%;
    object-fit: cover; */
  }
`;

//{ allGalleries(filter: {id: {eq: ""}}) { id name preview { id url } gallery { id url } width height } }
const OurWorks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    // console.log(event);
    console.log(index);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          query: `{ allGalleries(filter: {id: {eq: ${id}}}) { id name preview { id url } gallery { id url } } }`,
        }),
      });

      const myData = await response.json();

      setData(myData);
      // console.log(data.data.allGalleries);
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
      <h1>{data.data.allGalleries[0].name}</h1>

      {/* <ImageContainer> */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ width: "100%" }}
      >
        <Masonry gutter="5px">
          {data.data.allGalleries[0].gallery.map((image, i) => (
            <img
              key={image.id}
              src={image.url}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* {data.data.allGalleries[0].gallery.map((item) => (
          <img src={item.url} alt="" />
        ))} */}
      {/* </ImageContainer> */}
    </SectionContainer>
  );
};

export default OurWorks;
