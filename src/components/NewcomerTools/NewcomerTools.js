import "./NewcomerTools.css";
import Card from "../Card/Card.js"

import React from "react";

export default function NewcomerTools() {
  return (
    <div className="newcomer__container container">
      <div className="newcomer__info">
        {" "}
        <h2 className="newcomer__title" >Newcomer Tools</h2>
        <p className="newcomer__subtitle" >
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <button href="##" className="item__buttons_explore">
        Explore more
              </button>
      </div>
      <div className="newcomer__cards">
      <Card  img={require("../../images/zeplin.png")} name={'Zeplin'} subtitle={'Free & Paid'}/>
      <Card img={require("../../images/phpstorm.png")} name={'PHPStorm'} subtitle={'Free'}/>
      <Card img={require("../../images/toolbox.png")} name={'Toolbox'} subtitle={'Free'}/>
      <Card img={require("../../images/procreate.png")} name={'Procreate'} subtitle={'Paid'}/>
      </div>
    </div>
  );
}
