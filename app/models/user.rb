class User < ApplicationRecord
    has_many :trackers, dependent: :destroy
    has_many :exercises, through: :trackers
    has_many :steps, through: :exercises

    has_secure_password
    validates :username, presence: true, uniqueness: true

    # add password conditions/render error messages for failed parameters being met.

end
