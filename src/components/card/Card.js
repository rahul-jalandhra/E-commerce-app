import React, { Component } from "react";

import "./card.css";

import star from "../../assets/star_fill_24dp.svg";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="img-cart">
            <img src={this.props.image} alt="logo" className="product-image" />
            <div
              className="add-to-cart"
              style={{ backgroundImage: "url(" + this.props.image + ")" }}
            >
              <button>Add To Favourite </button>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="card-title">{this.props.title} </div>
          <div className="rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className="price">
            <span className="offered-price">{this.props.offeredPrice}</span>
            <span className="actual-price">{this.props.actualPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}
