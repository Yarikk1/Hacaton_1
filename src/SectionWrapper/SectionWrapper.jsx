import React from "react";
import "./SectionWrapper.css";

const SectionWrapper = ({ children }) => {
  return (
    <div className="SectionWrapper">
      <div className="SectionWrapper_content">{children}</div>
    </div>
  );
};

export default SectionWrapper;