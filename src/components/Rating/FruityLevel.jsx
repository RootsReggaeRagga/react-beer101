import React from 'react';
import Tooltip from '../Tooltip';
import food from '../../icon-color-fruit.svg'

const FruityLevel = ({ rating, maxRating }) => {
  const ratings = [];

  for (let i = 1; i <= maxRating; i++) {
    ratings.push(
      <span key={i}>
        {
          i <= Math.floor(rating) ? (
            <img src={food} alt='Hop Icon' title='Hop Icon' width='30px' height='30px' style={{ marginBottom: '5px' }} />
          ) : i === Math.ceil(rating) && rating % 1 !== 0 ? (
            <img src={food} alt='Hop Icon' title='Hop Icon' width='30px' height='30px' style={{ marginBottom: '5px', opacity: '0.5' }} />
          ) : (
            <img src={food} alt='Hop Icon' title='Hop Icon' width='30px' height='30px' style={{ marginBottom: '5px', filter: 'grayscale(100%)', opacity: '0.5' }} />
          )
        }
      </span>
    );
  }

  return <div>
    <Tooltip
      content={`Fruity Ester Amount: ${rating}/5`}
      position="top">
      {ratings}
    </Tooltip>
  </div>;
};

export default FruityLevel;