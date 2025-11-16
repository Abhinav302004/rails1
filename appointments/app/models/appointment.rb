class Appointment < ApplicationRecord
  validates :name, :poc, :date, :time, presence: true
end
