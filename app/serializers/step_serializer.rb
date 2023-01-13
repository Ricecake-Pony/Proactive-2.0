class StepSerializer < ActiveModel::Serializer
  attributes :id, :step_text, :step_number
  has_one :exercise
end
