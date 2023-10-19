import React from "react";

function About() {
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // Creates a gap between image and text
  };

  const imageContainerStyle = {
    flex: "1", // Takes up half the space
    height: "800px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textContainerStyle = {
    flex: "1", // Takes up half the space
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const textStyle = {
    fontSize: "20pt",
  };

  return (
    <div style={mainContainerStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://i.imgur.com/v4SYHhj.jpg"
          alt="Finnegan About"
          style={imageStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <p style={textStyle}>
          Finnegan is an 11-year-old orange tabby cat. Finnegan has lived quite
          a life so far. Originally raised in a barn in Rhode Island, his job was to kill
          mice and he excelled at it. Unfortunately, Finnegan was brought to a shelter at 3 years old where he sat waiting to get adopted for months. Finnegan is very shy and reserved which made it hard for people to try and take a chance on him but luckily someone saw him and fell in love! Since his adoption, Finnegan has been on an adventure. He's moved across the country multiple times, living in California, New Jersey, and now New York City. His favorite hobbies are sleeping, napping, cuddling and demanding treats!
        </p>
        <p>Visit the adoption link to create an adventure with a pet of your own!</p>
      </div>
    </div>
  );
}

export default About;
