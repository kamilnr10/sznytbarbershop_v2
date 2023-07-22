import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import styled from "styled-components";

const VideoSectionContainer = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow-y: hidden;
  min-height: 300px;

  @media (min-width: 1200px) {
    grid-area: VideoSection;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  position: relative;
  /* width: ${({ width }) => `${width}px`}; */

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
    position: absolute;
    object-fit: cover;

    will-change: transform;
    overflow-clip-margin: content-box;
    overflow: clip;

    .controls {
      position: absolute;
      width: 100%;
      height: 8.0971659919028340080971659919028%; /* of figure's height */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 1500px) {
      /* height: 250px; */
      height: ${({ height }) => `${height + 80}px`};
      /* transform: translateY(-20px);
      height: ${({ height }) => `${height + 80}px`}; */
    }

    /* transform: translateZ(-1px) scale(1); */
  }

  h1 {
    font-size: ${({ height }) => `${height - 110}px`};
    font-family: "Six Caps", sans-serif;
    position: absolute;
    transform: translateY(0px);
    inset: 0;
    height: ${({ height }) => `${height}px`};
    /* width: 100%; */
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
      font-size: ${({ height }) => `${height - 130}px`};
    }

    @media (max-width: 320px) {
      font-size: ${({ height }) => `${height - 150}px`};
    }

    @media (max-width: 300px) {
      font-size: ${({ height }) => `${height - 180}px`};
    }

    @media (min-width: 1200px) {
      font-size: ${({ height }) => `${height + 30}px`};
      transform: translateY(-45px);
      height: ${({ height }) => `${height + 80}px`};
    }

    @media (min-width: 1500px) {
      font-size: ${({ height }) => `${height + 40}px`};
      /* transform: translateY(-65px); */
      height: ${({ height }) => `${height + 60}px`};
    }
    /* transform: translateZ(0); */
  }
`;
const VideoText = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const VideoSection = ({ video }) => {
  const ref = useRef(null);
  const videoRef = useRef();

  const [numbers, setNumbers] = useState([]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleVideoPlay = () => {
    videoRef.current.play();
  };

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    console.log(ref.current.clientHeight);
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
    // console.log(ref.current.clientWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <VideoSectionContainer width={width} height={height}>
      <VideoContainer width={width} height={height} onClick={handleVideoPlay}>
        {/* <img src={team} alt="team" /> */}
        <video
          ref={videoRef}
          type="video/mp4"
          src={`${video}#t=0.001`}
          controls
          // autobuffer
          autoPlay
          loop
          muted
          // defaultmuted
          playsInline
          // oncontextmenu="return false;"
          preload="auto"
          // poster=""
          width={width}
          height={height}
          onClick={(e) => e.target.play()}
        ></video>
        <VideoText ref={ref}>
          <h1
            width={width}
            height={height}
            // style={{
            //   fontSize: `${height}px`,
            // }}
          >
            SZNYT
          </h1>
        </VideoText>
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
