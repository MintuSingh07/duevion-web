// In AccordionComponent.js
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const AccordionComponent = ({ data }) => {
  return (
    <Accordion preExpanded={[0]} style={{ border: "none" }}>
      {data.map((item, index) => (
        <AccordionItem key={index} uuid={index} className="acc-item">
          <AccordionItemHeading>
            <AccordionItemButton>{item.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="item-panel">
            <p className="item-panel">{item.answer}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
