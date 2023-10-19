import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>IPL-Match Win Prediction</h3>
        <p>
        Done with random forest algorithm which achieved an accuracy of 99.85% and created a website using streamlit.
        </p>
      </div>
      <div className="project">
        <h3>Potato Leaf Disease Detection</h3>
        <p>
        A disease detection model (convolutional neural network) with accuracy of 98.84%.
        </p>
      </div>
      <div className="project">
        <h3>Agriculture Production Detection in Andhra Pradesh</h3>
        <p>
        A crop detection model (Catboost) used for farmers
        </p>
      </div>
      <div className="project">
        <h3>Smart Helmet for underground Miners (working prototype)</h3>
        <p>
        Helpful for underground miners to improve safety. Built using arduino and multiple sensors.
        </p>
      </div>
    </section>
  );
}

export default Projects;