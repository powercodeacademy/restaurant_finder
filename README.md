User Story

    As someone deciding on which city to visit, I want to be able to see a list of restaurants from each city so that I can decide based on which has the best food.

How does it work now?

    This doesn't exist


How should it work?

    [DONE] - I should be able to see JSON data for all cities
    [DONE] - I should be able to see JSON data for all restaurants
    [DONE] - I should be able to see JSON data for restaurants in a single city

    [FOR THE JSON API]
    [x] need controllers for cities and restaurants
        [x] index actions (maybe show) for both controllers
    [x] need routes
    [x] need some seed data

    - I should be able to see an index page of all cities, with lists of restaurants for every city


Permissions Changes Required?

    None


Launch Plan

    Ship this page when it has passed testing


Acceptance Criteria

    - Create a few cities and a few restaurants per city.
    - Visiting localhost:3000/cities should return all cities in JSON format.
    - Visiting localhost:3000/restaurants should return all restaurants in JSON format.
    - Visiting localhost:3000/cities/:city_id/:restaurants should return a given city and its restaurants in JSON format.
    - Visiting localhost:4000/ should show a web page that has an index of all cities, and information about the city.
      - There should be an overview saying how many restaurants the city has, along with the average star rating of all restaurants in the city.


Technical Details

    - Use a Rails back-end with a React front-end
    - A `City` should have a `name` and many restaurants
      - The city overview should be serialized
    - A `Restaurant` should have a `name`, `star_rating`, and belong to a city
