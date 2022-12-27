import './Subscription.css'


import React from 'react'

export default function Subscription() {
  return (
    <div className="subscription container">
        <div className="subscription__title"><h2>Become a contributor?</h2></div>
        <div className="subscription__subtitle"><p>Join us and get tips & tricks to become a great Designer and Developer</p></div>
        <div className="subscription__form awesome__search">
        <form className="awesome__search__form__input">
            <div className="awesome__search__form__input_image">
             
              <input
                autocomplete="off"
                type="search"
                placeholder="Enter your email..."
                className="search__form__input"
              />
            </div>

            <button
              type="submit"
              className="search__form__button button-orange"
            >
              Join Us
            </button>
          </form>
        </div>
    </div>
  )
}
