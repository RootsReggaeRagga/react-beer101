import React from 'react';

// BeerSearch component that provides a search input field for filtering beers
// Props:
// - onSearchChange: callback function that handles search input changes
// - searchTerm: current search value
const BeerSearch = ({ onSearchChange, searchTerm }) => {
    return (
        // Container div with margin and flexbox centering
        <div className="mb-5 mx-14 flex align-center justify-center items-center">
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search beer by name..."  // Placeholder text shown when input is empty
                value={searchTerm}                    // Controlled input value
                onChange={(e) => onSearchChange(e.target.value)}  // Handle input changes
                className="w-2/3 mb-5 cfr-search cfr-border text-shadow"  // Styling classes
            />
        </div>
    );
};

export default BeerSearch;
