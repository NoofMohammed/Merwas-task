import React from "react";
import "./card.css";

const Card = ({ product, width, link }) => {
  console.log(product);
  return (
    <div className="card" style={{ width: `${width}%` }}>
      <div>
        <img
          className="img-heart"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9gmfLo0YiF3ngTpQD0t9BhykIUFf1T9ibA&usqp=CAU"
          alt="Card"
        />
      </div>
      <img className="card-img-top" src={product.img} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <div className="description">
          <p className="card-text">{product.description}</p>
        </div>
        <div className="city">
          <p className="card-text">{product.city}</p>
        </div>
        <div className="wordFrom">
          <p className="card-text">from</p>
        </div>
        <div className="price-bougth">
          <div className="bought">
            <p className="card-text">{product.bought}</p>
          </div>
          <div className="price">
            <div className="firstPrice">
              <p className="card-text">{product.firstPrice}</p>
            </div>
            <div className="lastPrice">
              <p className="card-text">{product.lastPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
