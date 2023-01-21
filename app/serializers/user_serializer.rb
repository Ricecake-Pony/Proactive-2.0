class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :trackers
  has_many :exercises
  has_many :steps
end
