class Exercise < ApplicationRecord
    has_many :users
    has_many :trackers, through: :users
end
