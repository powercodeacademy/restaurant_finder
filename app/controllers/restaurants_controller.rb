class RestaurantsController < ApplicationController
  def index
    # need to consider whether we're searching for
    # restaurants in a single city, or for all of them
    # there will be params[:city_id]
    restaurants = if params[:city_id]
                    Restaurant.where(city_id: params[:city_id])
                  else
                    Restaurant.all
                  end
    render json: restaurants, status: :ok
  end
end