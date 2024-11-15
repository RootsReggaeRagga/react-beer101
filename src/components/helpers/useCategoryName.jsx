import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategoryName = (categoryId) => {
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    const fetchCategoryName = async () => {
      try {
        const response = await axios.get(`https://beergeeks.pl/wp-json/wp/v2/categories/${categoryId}`);
        const categoryName = response.data.name;
        setCategoryName(categoryName);
      } catch (error) {
        console.error("Error fetching category name:", error);
      }
    };

    fetchCategoryName();
  }, [categoryId]);

  return categoryName;
};
export default useCategoryName