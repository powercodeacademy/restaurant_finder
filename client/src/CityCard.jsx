const CityCard = ({ city }) => (
  <>
    <h3>{city.name}</h3>
    <p>This is where our city overview will go</p>
    <ul>
      {
        city.restaurants.map(restaurant => (
          <li key={restaurant.name}>{`${restaurant.name}: ${restaurant.star_rating} stars`}</li>
        ))
      }
    </ul>
  </>
)

export default CityCard