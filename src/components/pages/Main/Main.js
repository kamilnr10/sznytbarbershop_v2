import React from "react";
import sznytvideo from "../../../assets/sznytvideo.mp4";

const Main = () => {
  return (
    <div>
      <video
        type="video/mp4"
        src={`${sznytvideo}#t=0.001`}
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
        // width={width}
        // height={height}
      ></video>
    </div>
  );
};

export default Main;
