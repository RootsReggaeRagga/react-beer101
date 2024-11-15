import React, { useState } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Calculate tooltip position classes
    const getPositionClasses = () => {
        switch (position) {
            case 'top':
                return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
            case 'bottom':
                return 'top-full left-1/2 -translate-x-1/2 mt-2';
            case 'left':
                return 'right-full top-1/2 -translate-y-1/2 mr-2';
            case 'right':
                return 'left-full top-1/2 -translate-y-1/2 ml-2';
            default:
                return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
        }
    };

    return (
        <div
            className="relative group w-full flex gap-1"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {isVisible && (
                <div className={`
                    absolute z-150 px-2 py-1 
                    text-xs text-white bg-gray-900 
                    rounded-md whitespace-nowrap
                    transition-opacity duration-200
                    ${getPositionClasses()}
                `}>
                    {content}
                    {/* Tooltip arrow */}
                    <div className={`
                        absolute w-2 h-2 
                        bg-gray-900 
                        transform rotate-45
                        ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
                        ${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
                        ${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
                        ${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
                    `} />
                </div>
            )}
            {children}
        </div>
    );
};

export default Tooltip; 