class CitiesController < ApplicationController
  def index
    cities = City.all
    render json: cities, include: :restaurants
  end
end