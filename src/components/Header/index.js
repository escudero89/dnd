import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => (
  <header>
    <ul class="link-list">
      <li>
        <NavLink exact activeClassName="link--active" to="/">
          Primary
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="link--active" to="/about">
          Secondary
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="link--active" to="/topics">
          Topics
        </NavLink>
      </li>
    </ul>
    <div className="right">
      taken from &nbsp;<a
        href="https://gist.github.com/escudero89/16bbb227af56db82f263464dde8e852b"
        target="_blank"
        rel="noopener noreferrer"
      >
        gist
      </a>
    </div>
  </header>
);

export default Header;
