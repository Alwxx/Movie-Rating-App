import React from 'react';

const RatingStars = ({ rating }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={index < rating ? 'filled-star' : 'empty-star'}>
      ★
    </span>
  ));

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
