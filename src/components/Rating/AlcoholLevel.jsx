import React from 'react';

// Component that displays a visual representation of alcohol content level
const AlcoholLevel = ({ level }) => {

  /*
    1. 100% is full width.
    2. 16 is maximum level in scale
    3. level is value from API
  */

  // Calculate the average if the level is given as a range (e.g., "4-5")
  // Convert string to numbers and get the average
  const average = level.split('-').map(Number).reduce((a, b) => (a + b) / 2);

  // Convert the alcohol level to a percentage relative to max value (16)
  const alcoholContent = average * 100 / 16;

  return (
    <div>
      {/* Render the alcohol meter only if level prop exists */}
      {level ? (
        <div className='mb-2'>
          {/* Container for the alcohol meter */}
          <div className="flex items-center justify-center">
            {/* Minimum value label */}
            <span className="text-xs font-medium text-white text-shadow">0%</span>

            {/* Progress bar container */}
            <div className="w-full h-5 cfr-alco-percentage relative mx-1">
              {/* Display actual alcohol percentage */}
              <span className="text-xs cfr-alco-percentage__text text-shadow-2">{level}%</span>

              {/* Colored progress bar that fills based on alcohol content */}
              <div
                className="h-5 cfr-alco-percentage__layer text-center leading-none flex"
                style={{ width: `${alcoholContent}%` }}
              ></div>
            </div>

            {/* Maximum value label */}
            <span className="text-xs font-medium text-white text-shadow">16%</span>
          </div>
        </div>
      ) : false}
    </div>
  );
};

export default AlcoholLevel;
