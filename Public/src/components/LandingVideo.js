import React from "react";

const LandingVideo = () => {
  return (
    <div className="h-96 bg-neutral-950">
      <iframe
        className="mx-auto rounded-lg"
        width="45%"
        height="100%"
        src="https://www.youtube.com/embed/UDtrusZwMeM?si=qLZpSVRiHROL-3bM&autoplay=1&mute=1&modestbranding=1&loop=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LandingVideo;
