// src/components/Rating/MaltLevel.jsx

import React from 'react'; // Importing React library
import Tooltip from '../Tooltip'; // Importing Tooltip component
import malt from '../../icon-color-barley.svg'; // Importing malt icon

// MaltLevel component definition
const MaltLevel = ({ rating, maxRating }) => {
  const ratings = []; // Array to hold rating elements
  const baseStyle = { marginBottom: '5px' }; // Base style for each rating
  const imgProps = { // Properties for the malt icon image
    src: malt,
    alt: 'Malt Icon',
    title: 'Malt Icon',
    width: '30px',
    height: '30px'
  };

  // Loop to create rating elements based on maxRating
  for (let i = 1; i <= maxRating; i++) {
    const style = { // Style for the current rating element
      ...baseStyle,
      ...(i > Math.floor(rating) && { // Adjust style based on current rating
        opacity: '0.5', // Make it semi-transparent
        filter: i > Math.ceil(rating) ? 'grayscale(100%)' : 'none' // Apply grayscale if rating is lower
      })
    };

    // Push the rating element into the ratings array
    ratings.push(
      <span key={i}>
        <img {...imgProps} style={style} /> {/* Render the malt icon with the calculated style */}
      </span>
    );
  }

  // Return all icons in container div with additional tooltip
  return <div>
    <Tooltip
      content={`Maltiness: ${rating}/5`}
      position="top">
      {ratings}
    </Tooltip>
  </div>;
};

export default MaltLevel; // Exporting the MaltLevel component