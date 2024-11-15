/**
 * @fileoverview Component displaying hop level using hop icons
 */

// Import required dependencies
import React from 'react';
import hop from '../../icon-color-hop.svg'
import Tooltip from '../Tooltip';

/**
 * HopLevel Component - displays visual representation of rating using hop icons
 * @param {number} rating - Current rating value (can be a decimal number)
 * @param {number} maxRating - Maximum possible rating (determines number of displayed icons)
 * @returns {JSX.Element} Container with hop icons
 */
const HopLevel = ({ rating, maxRating }) => {

  // Array storing generated rating elements
  const ratings = [];
  // Base style common for all icons
  const baseStyle = { marginBottom: '5px' };
  // Configuration of common image properties
  const imgProps = {
    src: hop,
    alt: 'Hop Icon',
    title: 'Hop Icon',
    width: '30px',
    height: '30px'
  };

  // Generate appropriate number of icons based on maxRating
  for (let i = 1; i <= maxRating; i++) {
    // Calculate style for each icon based on its position relative to rating
    const style = {
      ...baseStyle,
      // Modify appearance of icons above current rating
      ...(i > Math.floor(rating) && {
        opacity: '0.5',  // Transparency for icons above full rating
        // Add grayscale for icons completely above rating
        filter: i > Math.ceil(rating) ? 'grayscale(100%)' : 'none'
      })
    };

    // Add single icon to array
    ratings.push(
      // Each icon is wrapped in span with unique key
      <span key={i}>
        {/* Render image with appropriate properties */}
        <img {...imgProps} style={style} />
      </span>
    );
  }

  // Return all icons in container div with additional tooltip
  return <div>
    <Tooltip
      content={`Hop Characteristic: ${rating}/5`}
      position="top">
      {ratings}
    </Tooltip>
  </div>;
};

// Export component
export default HopLevel;