import React from "react";
import "./FAQs.css"
import AccordionComponent from "../Components/AccordionComponent";
import mockData from "../MOCK.json";

const FAQs = ({ id }) => {
  return (
    <div className="faqContainer" id={id}>
      <div className="heading">FAQs</div>
      <div className="innerContainer">
        <img src="/faq.svg" alt="" />
        <div id="accordionContainer">
          <AccordionComponent data={mockData} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
