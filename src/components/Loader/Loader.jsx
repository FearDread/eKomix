import React from "react";
import Container from "../Common/Container";
import "./Loader.css";

const LoadingAnimation = () => (
  <Container>
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  </Container>
);

export default LoadingAnimation;
