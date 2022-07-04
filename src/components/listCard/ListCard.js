import React from "react";

import star from "../../assets/star_fill_24dp.svg";
import "./listCard.css";

export default function ListCard(props) {
  return (
    <div className="featured-product" key={props.index}>
      <img src={props.image} alt="product" width={60} />
      <div className="featured-product-des">
        <div className="featured-product-title">{props.title} </div>
        <div className="featured-product-rating">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div>Price: {props.offeredPrice}</div>
      </div>
    </div>
  );
}
