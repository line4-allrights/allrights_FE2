import React from "react";
import styled from "styled-components";

const Youtube = () => {
  const containerStyle1 = {
    width: "14vw",
    height: "30.9vw",
    border: "0.15vw solid transparent",
    borderTop: "none",
    borderRadius: "2vw",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(180deg, rgba(157, 165, 179, 0) 0%, #9DA5B3 100%)",
  };

  const containerStyle2 = {
    width: "14vw",
    height: "30.9vw",
    border: "0.15vw solid transparent",
    borderBottom: "none",
    borderRadius: "2vw",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage: "linear-gradient(180deg, #3460B3 0%, #16162A 100%)",
  };

  return (
    <div style={{ display: "flex", gap: "1vw" }}>
      <div style={containerStyle1}>
        <iframe
          width="99%"
          height="99.5%"
          src="https://www.youtube.com/embed/7k6tEYP2V_g?autoplay=0&loop=1&playlist=7k6tEYP2V_g"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          style={{ borderRadius: "2vw" }}
        />
      </div>
      <div style={containerStyle2}>
        <iframe
          width="99%"
          height="99.5%"
          src="https://www.youtube.com/embed/IYGkcZsqFKg?autoplay=0&loop=1&playlist=IYGkcZsqFKg"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          style={{ borderRadius: "2vw" }}
        />
      </div>
      <div style={containerStyle1}>
        <iframe
          width="99%"
          height="99.5%"
          src="https://www.youtube.com/embed/xpwgQfYdZBw?autoplay=0&loop=1&playlist=xpwgQfYdZBw"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          style={{ borderRadius: "2vw" }}
        />
      </div>
    </div>
  );
};

export default Youtube;
