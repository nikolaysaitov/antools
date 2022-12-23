import "./Awesome.css";
import search from "../../images/search.png";
import fb from "../../images/fb.png";
import inst from "../../images/inst.png";
import tw from "../../images/tw.png";
import Illustration from "../../images/Illustration.png"

import React from "react";

export default function Awesome() {
  return (
    <section className="awesome ">
      <div className="awesome__container container">
        <div className="awesome__title">
          <h1>
            Awesome tools for Designer & Developer
            <span className="orangepoint">.</span>
          </h1>
        </div>
        <div className="awesome__subtitle">
          <p>
            Antool is a web collection of information on paid or free Design and
            Development tools
          </p>
        </div>
        <div className="awesome__search">
          <form className="awesome__search__form__input">
            <div className="awesome__search__form__input_image">
              <img src={search} alt="search" />
              <input
                autocomplete="off"
                type="search"
                placeholder="find more than 430+ tools..."
                className="search__form__input"
              />
            </div>

            <button
              type="submit"
              className="search__form__button button-orange"
            >
              Search
            </button>
          </form>
        </div>
        <ul className="awesome__social">
            <li className='social__item'>
                <a href="https://www.facebook.com/" className='social__link'>
                <img src={fb} alt="fb" />
                </a>
            </li>
            <li className='social__item'>
                <a href="https://www.instagram.com/" className='social__link'>
                <img src={inst} alt="inst" />
                </a>
            </li>
            <li className='social__item'>
                <a href="https://twitter.com/" className='social__link'>
                <img src={tw} alt="tw" />
                </a>
            </li>
        </ul>
      </div>
      <div className="awesome__image"><img src={Illustration} alt="tw" /></div>
    </section>
  );
}
