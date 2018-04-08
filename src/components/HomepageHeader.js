import React from 'react';
import logoImg from '../images/northcoders-news-logo-whitetext.png';

function HomepageHeader() {
  return (
    <div className="header bg-dark text-center">
      <img
        className="top-banner"
        id="nc-news-logo-banner"
        src={logoImg}
        alt="northcoders news logo"
      />
    </div>
  );
}

export default HomepageHeader;
