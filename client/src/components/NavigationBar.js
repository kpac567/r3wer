import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  render() {
    return (
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        class="fixed-nav w-nav"
      >
        <div class="container nav-container w-container">
          <Link to="/" class="brand w-nav-brand w--current">
            <img
              src="/images/New-Project-3.png"
              width="80"
              alt=""
              class="nav-logo"
            />
          </Link>
          <nav role="navigation" class="nav-menu w-nav-menu">
            <Link to="/login" class="nav-link w-inline-block">
              <div class="nav-link-text">Login</div>
            </Link>
            <Link to="/chat" class="nav-link w-inline-block">
              <div class="nav-link-text">Chat</div>
            </Link>
            <Link to="/parks" class="nav-link w-inline-block">
              <div class="nav-link-text">Parks</div>
            </Link>
            <Link to="/swipe" class="nav-link w-inline-block">
              <div class="nav-link-text">Swipe</div>
            </Link>
            <Link to="/covid-stats" class="nav-link w-inline-block">
              Covid Stats
            </Link>
            <Link to="/chat-room" class="nav-link w-inline-block">
              ChatRoom
            </Link>
          </nav>
          <div class="menu-button w-nav-button">
            <img src="/images/menu-icon-white.svg" loading="lazy" alt="" />
          </div>
        </div>
        <div class="nav-gradient-container">
          <div class="gradient-line thin"></div>
        </div>
      </div>
    );
  };
}

function mapState(state) {
    return {};
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(NavigationBar);