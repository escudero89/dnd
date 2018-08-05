import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, message } from 'antd';
import gestures from '../../data/gestures';

import './header.css';

const gesture = () => {
  const random = Math.floor((Math.random() * 10e9) % gestures.length);
  message.success(gestures[random], 5);
};

const Header = () => (
  <header>
    <ul className="link-list">
      <li>
        <NavLink exact activeClassName="link--active" to="/">
          Primary
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="link--active" to="/secondary">
          Secondary
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="link--active" to="/dices">
          Dices
        </NavLink>
      </li>
    </ul>
    <div className="right">
      <Button
        type="default"
        icon="message"
        size="small"
        title="Gesture"
        onClick={gesture}
      />
      &nbsp; | taken from &nbsp;<a
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
