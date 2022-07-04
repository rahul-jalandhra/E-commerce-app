import React, { Component } from "react";
import "./store.css";

import Header from "../header/Header";
import Banner2 from "../banner2/Banner2";
import Footer from "../footer/Footer";
import Card from "../card/Card";

export default class Store extends Component {
  constructor() {
    super();
    this.state = {
      activeGrid: "#33A0FF",
      activeList: "gray",
      product: this.product,
    };
  }
  product = [
    {
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg",
      title: "Apple MacBook Air",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL320_.jpg",
      title: "Apple iPhone 13 Pro Max",
      offeredPrice: "$399",
      actualPrice: "$599",
    },
    {
      image: "https://m.media-amazon.com/images/I/71Tlukf9FTL._AC_UY218_.jpg",
      title: "Apple Watch Series 7",
      offeredPrice: "$299",
      actualPrice: "$499",
    },
    {
      image: "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg",
      title: "Apple AirPods",
      offeredPrice: "$249",
      actualPrice: "$499",
    },
    {
      image: "https://m.media-amazon.com/images/I/71umlOrdukL._AC_UY218_.jpg",
      title: "Apple MacBook Fujitsu UH-X",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61YldGHdqCL._AC_UY218_.jpg",
      title: "Apple MacBook Air",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_UY218_.jpg",
      title: "Apple MacBook 2021",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/619m8rLBQSL._AC_UY218_.jpg",
      title: "Apple iPhone 15 Pro",
      offeredPrice: "$399",
      actualPrice: "$699",
    },
  ];
  handleActiveGrid = () => {
    if (this.state.activeGrid === "gray") {
      this.setState({
        activeGrid: "#33A0FF",
        activeList: "gray",
      });
    }
  };
  handleActiveList = () => {
    if (this.state.activeList === "gray") {
      this.setState({
        activeList: "#33A0FF",
        activeGrid: "gray",
      });
    }
  };
  render() {
    return (
      <>
        <Header />
        <div className="store-path-title">Store / Accessories</div>
        <div className="store-content-container">
          <div className="store-side-nav">
            <div className="accessories">
              <h1>Accessories</h1>
              <div className="accessories-item">
                <span>Apple Car</span> <span>8</span>
              </div>
              <div className="accessories-item">
                <span>Air port & wirless</span>
                <span>66</span>
              </div>
              <div className="accessories-item">
                <span>Cable and Docks</span> <span>44</span>
              </div>
              <div className="accessories-item">
                <div>Cases and Films</div> <div>12</div>
              </div>
              <div className="accessories-item">
                <div>Charging Device</div> <div>23</div>
              </div>
              <div className="accessories-item">
                <div>Connected Home</div> <div>34</div>
              </div>
              <div className="accessories-item">
                <div>Headphone</div> <div>6</div>
              </div>
            </div>
            <div className="price-range">
              Price <br />
              <input type="range" min="0" max="100" step="10" />
            </div>
          </div>
          <div className="store-main-content">
            <Banner2
              overFlow={"hidden"}
              width={200}
              height={"250px"}
              radius={"2px"}
            />
            <section>
              <div className="filter-container">
                <div>13 items</div>
                <div className="option-select">
                  <div>Sort By</div>
                  <select>
                    <option>None</option>
                    <option>Name</option>
                    <option>Price</option>
                  </select>
                </div>
                <div className="option-select">
                  <div>Show</div>
                  <select>
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                  </select>
                </div>
                <div className="view-container">
                  <div
                    className="gridview-container"
                    onClick={this.handleActiveGrid}
                  >
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                    <div
                      className="gridview"
                      style={{ backgroundColor: this.state.activeGrid }}
                    ></div>
                  </div>
                  <div
                    className="listview-container"
                    onClick={this.handleActiveList}
                  >
                    <div
                      className="listview"
                      style={{ backgroundColor: this.state.activeList }}
                    ></div>
                    <div
                      className="listview"
                      style={{ backgroundColor: this.state.activeList }}
                    ></div>
                    <div
                      className="listview"
                      style={{ backgroundColor: this.state.activeList }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            <div className="product-container">
              {this.state.product.map((item, index) => {
                return (
                  <>
                    <Card
                      image={item.image}
                      title={item.title}
                      offeredPrice={item.offeredPrice}
                      actualPrice={item.actualPrice}
                      key={index}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
