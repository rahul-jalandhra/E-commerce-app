import React, { Component } from "react";
import "./header.css";

import Profile from "../../assets/profile_icon.svg";
import Bag from "../../assets/bag_icon.svg";
import Search from "../../assets/search_icon.svg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="upper-header-container">
          <div className="upper-left">
            <select>
              <option>EN</option>
            </select>
            <select>
              <option>$</option>
            </select>
          </div>
          <div className="upper-right">
            <div>
              <img src={Profile} alt="logo" />
              My Profile
            </div>
            <div>
              <img src={Bag} alt="logo" />
              Items <span className="total-price"> $ 90 </span>
            </div>
            <div>
              <label htmlFor="search">
                <img src={Search} alt="logo" />
              </label>
              <input type="search" id="search" onChange={this.props.search} />
            </div>
          </div>
        </div>
        <div className="title-menu-container">
          <div className="title">iSHOP</div>
          <nav>
            <ul className="menu">
              <li className="menu-item">HOME</li>
              <Link to="/store">
                <li className="menu-item">
                  STORE
                  <div className="dropdown-menu">
                    <ul>
                      <li> Iphones </li>
                      <li> MacBook </li>
                      <li> Earphone </li>
                      <li> Watch </li>
                    </ul>
                  </div>
                </li>
              </Link>
              <li className="menu-item">
                IPHONE
                <div className="dropdown-menu">
                  <ul>
                    <li> IPhone Pro 13</li>
                    <li> IPhone 13 </li>
                    <li> iphone 12 </li>
                    <li> iphone 11</li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                IPAD
                <div className="dropdown-menu">
                  <ul>
                    <li> IPAD </li>
                    <li> IPAD 12 </li>
                    <li> IPAD 10 Pro </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                MACBOOK
                <div className="dropdown-menu">
                  <ul>
                    <li> MacBook Air Pro 13 </li>
                    <li> MacBook Air 13 </li>
                    <li> MacBook Air 12 </li>
                    <li> MacBook Air 13 </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">ACCESSORIES</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
