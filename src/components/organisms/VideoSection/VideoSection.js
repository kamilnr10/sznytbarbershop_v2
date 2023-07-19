import React from "react";
import styled from "styled-components";
import team from "../../../assets/sznyt-94.jpg";

const VideoSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoSection = () => {
  return (
    <VideoSectionContainer>
      <VideoContainer>
        <img src={team} alt="team" />
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
