import React from "react";
import Card from "../Card";
import "./Discover.css";

const Discover = () => {
  return (
    <>
      <div className="main">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">Discover</div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Featured Auckland Deals</li>
            <li className="list-group-item">Collections</li>
            <li className="list-group-item">Escapes</li>
            <li className="list-group-item">Picked for you</li>
            <li className="list-group-item">Activities, Events & Outdoors </li>
            <li className="list-group-item">Store</li>
            <li className="list-group-item">Restaurants, Bars, Cafes </li>
            <li className="list-group-item">Beauty, Massage & Spa</li>
            <li className="list-group-item">House & Garden </li>
            <li className="list-group-item">Automotive</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Discover;
