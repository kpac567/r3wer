import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  render() {
    return (
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        className="fixed-nav w-nav"
      >
        <div className="container nav-container w-container">
          <Link to="/" className="brand w-nav-brand w--current">
            <img
              src="/images/New-Project-3.png"
              width="80"
              alt=""
              className="nav-logo"
            />
          </Link>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <Link to="/login" className="nav-link w-inline-block">
              <div className="nav-link-text">Login</div>
            </Link>
            <Link to="/chat" className="nav-link w-inline-block">
              <div className="nav-link-text">Chat</div>
            </Link>
            <Link to="/parks" className="nav-link w-inline-block">
              <div className="nav-link-text">Parks</div>
            </Link>
            <Link to="/swipe" className="nav-link w-inline-block">
              <div className="nav-link-text">Swipe</div>
            </Link>
            <Link to="/covid-stats" className="nav-link w-inline-block">
              Covid Stats
            </Link>
            <Link to="/chat-room" className="nav-link w-inline-block">
              ChatRoom
            </Link>
          </nav>
          <div className="menu-button w-nav-button">
            <img src="/images/menu-icon-white.svg" loading="lazy" alt="" />
          </div>
        </div>
        <div className="nav-gradient-container">
          <div className="gradient-line thin"></div>
        </div>
      </div>
    );
  };
}

export default NavigationBar;