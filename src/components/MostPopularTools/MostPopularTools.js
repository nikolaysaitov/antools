import "./MostPopularTools.css";
import figma from '../../images/figma.png'
import sketch from '../../images/sketch.png'
import vsc from '../../images/vsc.png'

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
          <div className="popular__tools__item">

          <div class="popular__tools__effect"></div>

              <div className='item__name' >
                  <div className='name_image' >
                  <img src={figma} alt="figma" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Figma</h3></div>
                      <div className='name__to_subtitle' >Free</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          <div className="popular__tools__item">
          <div class="popular__tools__effect"></div>
              <div className='item__name' >
                  <div className='name_image' >
                  <img src={sketch} alt="sketch" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Sketch</h3></div>
                      <div className='name__to_subtitle' >Trial & Paid</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          <div className="popular__tools__item">
          <div class="popular__tools__effect"></div>
              <div className='item__name' >
                  <div className='name_image' >
                  <img src={vsc} alt="vsc" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Visual Studio Code</h3></div>
                      <div className='name__to_subtitle' >Free</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          <div className="popular__tools__item">
          <div class="popular__tools__effect"></div>
              <div className='item__name' >
                  <div className='name_image' >
                  <img src={figma} alt="figma" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Figma</h3></div>
                      <div className='name__to_subtitle' >Free</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          <div className="popular__tools__item">
          <div class="popular__tools__effect"></div>
              <div className='item__name' >
                  <div className='name_image' >
                  <img src={figma} alt="figma" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Figma</h3></div>
                      <div className='name__to_subtitle' >Free</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          <div className="popular__tools__item">
          <div class="popular__tools__effect"></div>
              <div className='item__name' >
                  <div className='name_image' >
                  <img src={figma} alt="figma" />
                  </div>
                  <div className='name__to' >
                      <div className='name__to_title' ><h3>Figma</h3></div>
                      <div className='name__to_subtitle' >Free</div>
                  </div>
              </div>
              <div className='item__about' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='item__buttons' ></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
