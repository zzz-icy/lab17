import React from 'react';
import { NavLink, Link } from 'react-router-dom';


// https://reacttraining.com/react-router/web/api/NavLink

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1> Advanced Center for Electronics</h1>
        </Link>
      </div>
    </div>
    <div className="header__content">
      <div className="header__subtitle">
        <NavLink
          exact to="/"
          activeClassName="is-active"
          className="header__link"
        >
          Home
                </NavLink>
      </div>

      <div className="header__subtitle">
        <NavLink
          to="/research"
          activeClassName="is-active"
          className="header__link"

        >
          Research
        </NavLink>
      </div>

      <div className="header__subtitle">
        <NavLink
          to="/facilities"
          activeClassName="is-active"
          className="header__link"

        >
          Facilities
        </NavLink>
      </div>

      <div className="header__subtitle">
        <NavLink
          to="/people"
          activeClassName="is-active"
          className="header__link"

        >
          People
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;