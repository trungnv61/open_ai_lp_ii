import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3: React.FC = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explorer the library</p>
      </div>
    </div>
  );
};

export default WhatGPT3;
