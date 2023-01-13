class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :title
      t.string :description
      t.string :image
      t.string :duration
    end
  end
end
