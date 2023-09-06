import axios from "axios";

const url = "https://localefoodie.netlify.app/.netlify/functions/searchYelp";

const getListings = async (term, location, sort) => {
  try {
    const response = await axios.get(url, {
      params: {
        term: term,
        location: location,
        sort: sort,
      },
    });
    if (response.data.businesses) {
      return response.data.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        url: business.url,
        address1: business.location.display_address[0],
        address2: business.location.display_address[1],
        lat: business.coordinates.latitude,
        long: business.coordinates.longitude,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    }
  } catch (error) {
    console.error({ message: "Bad request" }, error.message);
  }
};
export default getListings;
