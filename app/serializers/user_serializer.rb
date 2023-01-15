class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name

  has_many :trackers
  has_many :exercises
  has_many :steps
end
