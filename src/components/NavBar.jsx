import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div className="container navimg ">
      <div className="row ">
        <div className="col ">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>Entrenate UY</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to={"/category/new"}>New Arrivals!</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Men"}>Men</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Women"}>Women</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/calzado"}>Calzado</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
       </div>
    </div>
  )

}

export default NavBar;
