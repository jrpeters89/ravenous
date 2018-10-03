const apiKey = "T8VDlNWCiy7r7IYpADxbyBUPhwhwRxEIH6o8f72Ob-USHuPfTtaYNz8ImDXc3-oxT83RyzXF5jeVVTzwc6NwKyvvwYTYhqHpT4CwjXw29kamYPbYZsndYOi4y_K0W3Yx";

export const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
