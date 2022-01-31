import React from "react";
import Discover from "./Discover";
import Card from "./Card";
import {
  products1,
  mainProducts,
  aucklandDeals,
  collections,
  escapes,
  Activities,
} from "./data";
import "./home.css";
import { InputGroup, FormControl } from "react-bootstrap";

const Home = () => {
  const getCards = (prodects, width, link) => {
    return prodects.map((prodect, i) => (
      <Card key={i} product={prodect} width={width} link={link} />
    ));
  };

  return (
    <>
      <div className="discover">
        <Discover />
        {getCards(mainProducts, 38)}
      </div>
      <div className="subscribe-email discover">
        <div className="text">
          Get the best deals delivered direct to your inbox each day
        </div>
        <div subscribe-input>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter email address"
              aria-label="Enter email address"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div>
        <div className="title-discover">
          <span className="text-title">Featured Auckland Deals</span>
          <button type="button" className="btn btn-primary">
            View More
          </button>
        </div>
        <div className="products discover">{getCards(aucklandDeals, 24)}</div>
      </div>
      <div>{getCards(collections, 24, true)}</div>
      <div>
        <div className="title-discover">
          <span className="text-title">Escapes</span>
          <button type="button" className="btn btn-primary">
            View More
          </button>
        </div>
        <div className="discover">{getCards(escapes, 24)}</div>
      </div>{" "}
      <div>
        <div className="title-discover">
          <span className="text-title">Activities, Events & Outdoors</span>
          <button type="button" className="btn btn-primary">
            View More
          </button>
        </div>
        <div className="discover">{getCards(Activities, 24)}</div>
      </div>
    </>
  );
};
export default Home;
