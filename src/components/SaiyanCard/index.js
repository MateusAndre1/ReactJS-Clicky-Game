import React from "react";
import "./style.css";

const SaiyanCard = props => (
    <div className="card col-sm-2" onClick={() => props.clickedImage(props.id)}>
            <img className="images" alt={props.name} src={props.image} />
    </div>
)


export default SaiyanCard;
