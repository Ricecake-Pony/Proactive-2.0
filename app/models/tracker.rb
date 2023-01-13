class Tracker < ApplicationRecord
  belongs_to :exercise
  belongs_to :user
end
