"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

const VideoPlayer = ({ url, width, height , style }) => {
  return (
    <ReactPlayer
      url={url}
      autoPlay={true}
      controls
      width={width}
      height={height}
      style={style}
    />
  );
};

export default VideoPlayer;
