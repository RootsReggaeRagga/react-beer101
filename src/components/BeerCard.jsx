import React, { useEffect, useState } from 'react';
import HopLevel from './Rating/HopLevel';
import FruityLevel from './Rating/FruityLevel';
import MaltLevel from './Rating/MaltLevel';
import AlcoholLevel from './Rating/AlcoholLevel'
import useFeaturedImage from './helpers/useFeaturedImage';
import useCategoryName from './helpers/useCategoryName';



const BeerCard = ({ beer, beerCategory }) => {

  const featuredImageUrl = useFeaturedImage(beer.id);
  const image = featuredImageUrl ? <img src={featuredImageUrl} alt={beer.title.rendered} title={beer.title.rendered} /> : ''
  const categoryName = useCategoryName(beerCategory)
  const beerData = beer.acf;

  const [tagNames, setTagNames] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://beergeeks.pl/wp-json/wp/v2/tags');
        const allTags = await response.json();
        const beerTagNames = allTags
          .filter(tag => beer.tags && beer.tags.includes(tag.id))
          .map(tag => tag.name);

        setTagNames(beerTagNames);
      } catch (error) {
        console.error('Error on tags fetching:', error);
      }
    };

    fetchTags();
  }, [beer.tags]);

  return (

    <div className='flex flex-col h-full p-3 cfr-card cfr-border cfr-bg' key={beer.id} >
      {image}

      <h3 className="mb-2 font-bold text-center ">{beer.title.rendered}</h3>
      <AlcoholLevel level={beerData.alcoholcontent} />
      <div className='my-2'>
        <div className='flex flex-wrap justify-center w-full mb-1'>
          <HopLevel rating={beerData.hopLevel} maxRating={5} />
        </div>

        <div className='flex flex-wrap justify-center w-full mb-1'>
          <MaltLevel rating={beerData.maltLevel} maxRating={5} />
        </div>

        <div className='flex flex-wrap justify-center w-full mb-1'>
          <FruityLevel rating={beerData.fruityLevel} maxRating={5} />
        </div>

      </div>
      {tagNames.length > 0 && (
        <div>
          <p className="font-bold text-center mb-1.5 text-xs text-shadow">Best with:</p>
          <div className="flex flex-wrap justify-center gap-1">
            {tagNames.map((tagName, index) => (
              <span key={index} className="px-2 py-1 text-xs cfr-bg--light rounded text-shadow">
                {tagName}
              </span>
            ))}
          </div>
        </div>
      )}
      <p className='my-2 font-bold text-center'>Category:
        {categoryName}
      </p>
    </div>
  );
};


export default BeerCard;
