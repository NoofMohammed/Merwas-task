import React from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <div className="pages">
          <div className="dropdownBut">
            <DropdownButton
              id="dropdown-basic-button"
              title="Browse Categories"
              variant="light"
            >
              <Dropdown.Item href="#/action-1">
                Activities, Events & Outdoors
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Wellington</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>

          <Link className="link" to="/What'sNow">
            What's Now
          </Link>
          <Link className="link" to="/Trending">
            Trending
          </Link>
          <Link className="link" to="/ForYou">
            For You
          </Link>
          <Link className="link" to="/ShopProducts">
            Shop Products
          </Link>
        </div>

        <div className="search">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search GrabOne"
                aria-label="Search"
              />
            </form>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
