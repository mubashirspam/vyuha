import React from 'react'
import "./header.css";
import HERO from "../../assets/hero.svg";
import CTA from "./CTA";

const data = "Amet";
const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
        <div className="hero__content">
          <div className="header-main-text">
            <h1>
              Torem Ipsum <br /> Dolorit {data}
            </h1>
            {/* <h1 className="header-main-text-h1">Amet</h1> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            sapien lacus, eget quam Lorem ipsum dolor sit amet, consectetur
           
          </p>
          <CTA />
        </div>
        <div className="me">
          <img className="img" src={HERO} alt="me" />
        </div>
      </div>
    </header>
  );
}
export default Header