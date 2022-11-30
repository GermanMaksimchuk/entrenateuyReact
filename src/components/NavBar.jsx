import React from "react";
import CartWidget from "./CartWidget";

const NavBar =() =>{
    return(
        <div className="row navimg">
            <div className="col-md-8">
            <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Entrenate UY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/new">New Arrivals!</a>
            </li>
   
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/botton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Indumentaria
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/hombre">Hombre</a></li>
                <li><a className="dropdown-item" href="/mujer">Mujer</a></li>

              </ul>
            </li>
         <li className="nav-item">
              <a className="nav-link" href="/accesorios">Accesorios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
            </div>
            <div className="col d-flex justify-content-end align-item-center">
            <CartWidget />
           
            </div>
        </div>
    
     
    )

    }

export default NavBar;
