import { useState, useEffect } from "react"
import CityCard from "./CityCard"

const Cities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch("/cities")
      .then(response => response.json())
      .then(data => setCities(data))
  }, [])

  return (
    <>
      <h1>Cities and Restaurants</h1>
      {
        cities.map(city => (
          <CityCard
              city={city}
              key={city.id}
          />
        ))
      }
    </>
  )
}

export default Cities