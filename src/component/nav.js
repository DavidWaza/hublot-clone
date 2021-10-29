import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../img/hublot.png";
import "./nav.css";

function nav() {
  return (
    <Router>
      <div>
        <nav className="flex bg-white  w-full fixed z-10">
          <div className="p-6">
            <Link to="/">
              <img src={Logo} className="h-6 w-auto" />
            </Link>
          </div>

          <ul className="flex flex-end justify-center w-full mr-auto text-black">
            <li className="hover-underline-animation text-center  p-6 ">
              <Link to="/">Watches</Link>
            </li>
            <li className="hover-underline-animation text-center  p-6 ">
              <Link to="/">Our World</Link>
            </li>
            <li className="hover-underline-animation text-center  p-6 ">
              <Link to="/">Boutiques</Link>
            </li>
            <li className="hover-underline-animation text-center  p-6 ">
              <Link to="/">Watches</Link>
            </li>
            <div class="search-box mx-12">
              <button class="btn-search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                class="input-search"
                placeholder="Type to Search..."
              />
            </div>{" "}
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default nav;
