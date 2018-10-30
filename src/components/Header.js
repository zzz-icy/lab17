import React from 'react';
import { Link } from 'react-router-dom';
// import chip from '../images/chip.jpg';
// import SimpleTabs from '../components/SimpleTabs';

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
  </header>
);

export default Header;


