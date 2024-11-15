import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import BeerCard from './BeerCard';
import BeerSearch from './BeerSearch';

/**
 * Main component displaying a list of beers with search functionality
 * and dynamic loading of additional elements
 */
const BeerList = () => {
    // State storing all beers
    const [beers, setBeers] = useState([]);
    // State storing filtered beers (based on search)
    const [filteredBeers, setFilteredBeers] = useState([]);
    // Loading state
    const [loading, setLoading] = useState(true);
    // State storing search phrase
    const [searchTerm, setSearchTerm] = useState('');
    // State determining number of visible items (for infinite scroll)
    const [visibleItems, setVisibleItems] = useState(12);

    // Effect fetching beer data on first render
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetching data from WordPress API
                const response = await axios.get('https://beergeeks.pl/wp-json/wp/v2/beers/?per_page=100');
                // Sorting beers alphabetically by title (considering Polish characters)
                const sortedBeers = response.data.sort((a, b) =>
                    a.title.rendered.localeCompare(b.title.rendered, 'pl')
                );
                setBeers(sortedBeers);
                setFilteredBeers(sortedBeers);
            } catch (error) {
                console.error("Error fetching beers:", error);
            } finally {
                // Simulating loading delay (2 seconds)
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        fetchPosts();
    }, []);

    // Effect filtering beers based on search phrase
    useEffect(() => {
        const filtered = beers.filter(beer =>
            beer.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBeers(filtered);
    }, [searchTerm, beers]);

    // Effect handling infinite scroll
    useEffect(() => {
        const handleScroll = () => {
            // Checking if user reached the bottom of the page
            if (window.innerHeight + document.documentElement.scrollTop
                >= document.documentElement.scrollHeight - 20) {
                // Adding next 12 items if available
                if (visibleItems < filteredBeers.length) {
                    setVisibleItems(prev => prev + 12);
                }
            }
        };

        // Adding and removing scroll listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleItems, filteredBeers.length]);

    // Handling search phrase change
    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    // Displaying loader while data is loading
    if (loading) return <Loader />;

    return (
        <div>
            {/* Search component */}
            <BeerSearch
                onSearchChange={handleSearchChange}
                searchTerm={searchTerm}
            />
            {/* Conditional rendering of beer list or no results message */}
            {filteredBeers.length > 0 ? (
                // Responsive grid with beer cards
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4 lg:gap-4 xl:gap-4">
                    {/* Mapping filtered beers with appearance animation */}
                    {filteredBeers.slice(0, visibleItems).map((beer, index) => (
                        <div
                            key={beer.id}
                            className="transform transition-all duration-500 ease-out"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                opacity: 0,
                                animation: 'fadeIn 0.5s ease forwards'

                            }}>
                            <BeerCard
                                beer={beer}
                                beerCategory={beer.categories}
                            />
                        </div>

                    ))}
                </div>
            ) : (
                // No search results message
                <div className="text-center py-10">
                    <p className="text-xl text-red-600">Beer not found by name:<br /> "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default BeerList;
