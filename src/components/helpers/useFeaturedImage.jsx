import { useState, useEffect } from 'react';
import axios from 'axios';

const useFeaturedImage = (postId) => {
  const [featuredImageUrl, setFeaturedImageUrl] = useState(null);

  useEffect(() => {
    const fetchFeaturedImage = async () => {
      try {
        const response = await axios.get(`https://beergeeks.pl/wp-json/wp/v2/beers/${postId}?_embed`);
        const post = response.data;
        const featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        setFeaturedImageUrl(featuredImageUrl);
      } catch (error) {
        console.error("Error fetching featured image:", error);
      }
    };

    fetchFeaturedImage();
  }, [postId]);

  return featuredImageUrl;
};

export default useFeaturedImage