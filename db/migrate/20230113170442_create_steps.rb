class CreateSteps < ActiveRecord::Migration[7.0]
  def change
    create_table :steps do |t|
      t.string :step_text
      t.integer :step_number
      t.belongs_to :exercise, null: false, foreign_key: true
    end
  end
end
