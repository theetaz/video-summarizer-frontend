"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url="/sampleVideo/sample.mp4"
      autoPlay={true}
      controls
      width={"303px"}
      height={"540px"}
    />
  );
};

export default VideoPlayer;
