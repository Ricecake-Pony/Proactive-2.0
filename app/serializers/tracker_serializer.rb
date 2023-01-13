class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :exercise_name, :exercise_reps, :comment, :date
  has_one :exercise
  has_one :user
end
