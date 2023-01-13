class User < ApplicationRecord
    has_many :exercises
    has_many :trackers, through: :exercises

    has_secure_password
end
