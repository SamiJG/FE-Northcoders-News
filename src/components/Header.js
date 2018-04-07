import React, { Component } from 'react';
import logoImg from '../images/northcoders-news-logo-whitetext.png';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          id="nc-news-logo-banner"
          src={logoImg}
          alt="northcoders news logo"
        />
      </div>
    );
  }
}

export default Header;
