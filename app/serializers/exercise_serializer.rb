class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :steps, :image, :duration
end
