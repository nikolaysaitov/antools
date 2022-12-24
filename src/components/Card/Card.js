import React from 'react'


export default function Card(props) {
  return (
    <div className="popular__tools__item">
            <div class="popular__tools__effect"></div>
            <div className="item__name">
              <div className="name_image">
                <img src={props.img} alt="figma" />
              </div>
              <div className="name__to">
                <div className="name__to_title">
                  <h3>{props.name}</h3>
                </div>
                <div className="name__to_subtitle">{props.subtitle}</div>
              </div>
            </div>
            <div className="item__about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="item__buttons">
              <div className="item__buttons_icon">
                <button className="item__buttons_like"></button>
                <button className="item__buttons_folder"></button>
              </div>
              <a href="##" className="item__buttons_visit">
                Visit
              </a>
            </div>
          </div>
  )
}
