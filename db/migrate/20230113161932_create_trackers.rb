class CreateTrackers < ActiveRecord::Migration[7.0]
  def change
    create_table :trackers do |t|
      t.belongs_to :exercise, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :exercise_name
      t.string :exercise_reps
      t.string :comment
      t.date :date
      t.timestamps
    end
  end
end
