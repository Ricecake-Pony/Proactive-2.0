class User < ApplicationRecord
    has_many :trackers
    has_many :exercises, through: :trackers
    has_many :steps, through: :exercises

    has_secure_password
end
