import React from 'react';

function Card({ image, title, description, linkText, linkUrl }) {
  return (
    <div className="first-card">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <div className="hover-div">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={linkUrl}>{linkText}</a>
      </div>
    </div>
  );
}

export default Card;
