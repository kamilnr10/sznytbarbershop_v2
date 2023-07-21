import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import styled from "styled-components";

const VideoSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;

  @media (min-width: 1200px) {
    grid-area: VideoSection;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  position: relative;

  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 1200px) {
    }
  } */

  video {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: 100%;

    object-fit: cover;

    @media (min-width: 1500px) {
      height: ${({ height }) => `${height + 80}px`};
      /* transform: translateY(-20px);
      height: ${({ height }) => `${height + 80}px`}; */
    }

    /* transform: translateZ(-1px) scale(1); */
  }

  h1 {
    font-size: ${({ height }) => `${height}px`};
    font-family: "Six Caps", sans-serif;
    position: absolute;
    transform: translateY(-20px);
    inset: 0;
    height: ${({ height }) => `${height}px`};
    width: 100%;
    /* line-height: 689px; */
    mix-blend-mode: multiply;
    background-color: #000;
    color: #fff;
    /* font-size: calc((100vw - 4.5rem) / 1);
    font-size: 80vw; */
    /* vertical-align: top; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 340px) {
      font-size: ${({ height }) => `${height - 40}px`};
    }

    @media (max-width: 320px) {
      font-size: ${({ height }) => `${height - 60}px`};
    }

    @media (max-width: 300px) {
      font-size: ${({ height }) => `${height - 80}px`};
    }

    @media (min-width: 1500px) {
      font-size: ${({ height }) => `${height + 80}px`};
      transform: translateY(-20px);
      height: ${({ height }) => `${height + 80}px`};
    }
    /* transform: translateZ(0); */
  }
`;

const VideoSection = ({ video }) => {
  const ref = useRef(null);

  const [numbers, setNumbers] = useState([]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, [numbers]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <VideoSectionContainer>
      <VideoContainer ref={ref} width={width} height={height}>
        {/* <img src={team} alt="team" /> */}
        <video
          type="video/mp4"
          src={video}
          // controls
          // autobuffer
          autoPlay
          loop
          muted
          // defaultmuted
          playsInline
          // oncontextmenu="return false;"
          // preload="auto"
          // poster=""
          width={width}
          height={height}
        ></video>
        <h1
          width={width}
          height={height}
          // style={{
          //   fontSize: `${height}px`,
          // }}
        >
          SZNYT
        </h1>
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
