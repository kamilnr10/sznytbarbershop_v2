import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
    margin: 20px 0;
    font-size: 40px;
  }
  p {
    padding: 0 0 20px 0;
    font-family: "Ubuntu Mono", monospace;
  }
`;

// const token = process.env.REACT_APP_TOKEN;

const OurStory = ({ ourstory, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TextConainer>
      <h1>O NAS</h1>
      <p>{ourstory}</p>
    </TextConainer>
  );
};

export default OurStory;
