import React from 'react';
import squareLogoImg from '../images/northcoders-news-logo-square.png';

function TopicPageHeader({ match }) {
  const topic = match.params.topic;
  const titleCasedTopic = topic[0].toUpperCase() + topic.slice(1);
  return (
    <div className="header bg-dark container-fluid row">
      <h1 className="text-center text-warning align-self-center col-md-9">
        {titleCasedTopic}
      </h1>
      <img
        className="top-banner mx-auto d-block"
        id="nc-news-logo-square"
        src={squareLogoImg}
        alt="northcoders news logo"
      />
    </div>
  );
}

export default TopicPageHeader;
