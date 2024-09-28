import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateKeySkillComponent.css";

const TemplateObjective = (props) => {
 
  return (
    <Container>
      
      <span className="skill">{props.objective}</span>
    </Container>
  );
};

export default TemplateObjective;