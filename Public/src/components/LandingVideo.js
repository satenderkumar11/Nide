import React from "react";

export const LandingVideo = () => {
  return (
    <div className="h-screen">
      {" "}
      <iframe
        width="100%"
        height="90%"
        src="https://www.youtube.com/embed/UDtrusZwMeM?si=qLZpSVRiHROL-3bM&autoplay=1&mute=1&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
