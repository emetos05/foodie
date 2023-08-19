import axios from "axios";

const getListings = async (term, location, sort) => {
  try {
    const response = await axios.get(
      "http://localhost:9999/.netlify/functions/searchYelp",
      {
        params: {
          term: term,
          location: location,
          sort: sort,
        },
      }
    );
    if (response.data.businesses) {
      return response.data.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address1: business.location.display_address[0],
        address2: business.location.display_address[1],
        latitude: business.coordinates.latitude,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    }
  } catch (error) {
    console.error(error.message);
  }
};
export default getListings;
