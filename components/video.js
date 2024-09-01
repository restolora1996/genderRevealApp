import React from "react";

const videoStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100vh",
  objectFit: "fill",
  zIndex: "-1 !important",
};

const Video = ({ src, muted = true, loop = true, autoPlay = true }) => {
  return (
    <video
      style={videoStyle}
      playsInline
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
export default Video;
