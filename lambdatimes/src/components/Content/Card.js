import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardData.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardData.img} alt="" />
        </div>
        <span>By {props.cardData.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  cardData: PropTypes.shape({
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
