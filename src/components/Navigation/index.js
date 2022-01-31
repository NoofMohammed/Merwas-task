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
          {/* <div className="dropDown region-dropdown dropdown-overlay-container">
              <form action="/action_page.php">
                <select name="car" id="car">
                  <option value="volvo">Browse Categories</option>
                  <option value="saab">Activities, Events & Outdoors</option>
                  <option value="opel">Wellington</option>
                  <option value="audi">Northland</option>
                  <option value="audi">ManaWatu</option>
                  <option value="audi">Wanganui</option>
                </select>
                <br />
              </form>
            </div> */}

          {/* <Link className="link" to="/BrowseCategories">
            Browse Categories
          </Link> */}
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
                // placeholder=" &#61442; Search GrabOne"
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
