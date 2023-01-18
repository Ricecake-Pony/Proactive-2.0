class Exercise < ApplicationRecord
    has_many :trackers
    has_many :users, through: :trackers
    has_many :steps, dependent: :destroy
end
