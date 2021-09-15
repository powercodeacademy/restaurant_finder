class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :star_rating
      t.integer :city_id
      t.timestamps
    end
  end
end
