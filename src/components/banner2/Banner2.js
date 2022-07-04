import React, { Component } from "react";

import Iphone from "../../assets/iPhone6.png";

import "./banner2.css";

export default class Banner2 extends Component {
  render() {
    return (
      <div>
        <div
          className="banner2"
          style={{
            overflow: this.props.overFlow,
            height: this.props.height,
            borderRadius: this.props.radius,
          }}
        >
          <div className="details">
            <div className="banner2-title">iPhone 6 Plus</div>
            <div className="banner2-des">
              Performance and design. Taken right to the edge.
            </div>

            <div className="banner2-shop-now">SHOP NOW</div>
          </div>
          <img src={Iphone} alt="iphone" width={this.props.width} />
        </div>
      </div>
    );
  }
}
