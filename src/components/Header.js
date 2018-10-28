import React from 'react';
import { Link } from 'react-router-dom';


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
        <Link
          exact="true"
          to="/"
          className="header__link"
        >
          Home
                </Link>
      </div>

      <div className="header__subtitle">
        <Link
          to="/research"
          className="header__link"

        >
          Research
        </Link>
      </div>

      <div className="header__subtitle">
        <Link
          to="/facilities"
          className="header__link"

        >
          Facilities
        </Link>
      </div>

      <div className="header__subtitle">
        <Link
          to="/people"
          className="header__link"

        >
          People
        </Link>
      </div>
    </div>
  </header>
);

export default Header;