import "./MostPopularTools.css";
import Card from "../Card/Card";

import React from "react";

export default function MostPopularTools() {

   
  return (
    <div className="popular container">
      <div className="popular__title">
        <h2>Most Popular Tools</h2>
      </div>
      <div className="popular__subtitle">
        Tools for the best Designers and Developers most popularly used in the
        world
      </div>
      <div className="popular__tools">
        <div className="popular__tools__items">
         <Card img={require("../../images/figma.png")} name={'Figma'} subtitle={'Free'}/>
         <Card img={require("../../images/sketch.png")} name={'Sketch'} subtitle={'Trial & Paid'}/>
         <Card img={require("../../images/vsc.png")} name={'Visual Studio Code'} subtitle={'Free'}/>
         <Card img={require("../../images/notion.png")} name={'Sketch'} subtitle={'Free & Paid'}/>
         <Card img={require("../../images/slack.png")} name={'Sketch'} subtitle={'Free & Paid'}/>
         <Card img={require("../../images/invision.png")} name={'Sketch'} subtitle={'Free & Paid'}/>
          
            </div>
          </div>
          <div className="button__center" >
              <button className='button_load' >Load more</button>
          </div>
        </div>

  );
}
