class CitySerializer < ActiveModel::Serializer
  has_many :restaurants
  attributes :id, :name, :overview

  def overview
    restaurant_count = object.restaurants.count
    star_rating_average = object.restaurants.average(:star_rating).to_f
    "This city has #{restaurant_count} restaurants, with an average star rating of #{star_rating_average}!"
  end
end
