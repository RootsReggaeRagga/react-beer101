import React, { useEffect, useState } from 'react';

const Progress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    // ... existing state ...

    useEffect(() => {
        const handleScroll = () => {
            // Oblicz procent przewinięcia
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

            setScrollProgress(scrollPercentage);

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },);


    return (
        <div>
            <div
                className="fixed top-0 left-0 h-2 cfr-bg--light z-50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default Progress;