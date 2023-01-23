class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :render_steps, :image, :duration
  has_many :trackers
  has_many :users
  has_many :steps

  def render_steps
    self.object.steps.all
  end

end
