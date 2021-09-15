import RestaurantCard from "./RestaurantCard"

const CityCard = ({ city }) => (
  <>
    <h3>{city.name}</h3>
    <p>{city.overview}</p>
    <ul>
      {
        city.restaurants.map(restaurant => (
          <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              starRating={restaurant.star_rating}
          />
        ))
      }
    </ul>
  </>
)

export default CityCard