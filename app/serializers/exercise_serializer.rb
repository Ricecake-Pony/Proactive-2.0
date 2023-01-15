class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :steps, :image, :duration
  has_many :trackers
  has_many :users
  has_many :steps
end
