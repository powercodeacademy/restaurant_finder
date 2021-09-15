import { useState, useEffect } from "react"

const Cities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch("/cities")
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <h1>Greetings from the Cities component</h1>
  )
}

export default Cities