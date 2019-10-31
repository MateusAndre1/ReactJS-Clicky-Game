import React from "react";
import "./style.css";

function Title(props) {
  
    return <div className="title"> <h1> ReactJS Clicky Game: Dragon Ball Z Sayains!</h1>
    <h3>Begin by clicking on a Sayain but only click on each once or be defeated, you weakling!</h3>
    <h4>Current Score: {props.score} | Top Score: {props.topScore}</h4>
    </div>
}

export default Title;
