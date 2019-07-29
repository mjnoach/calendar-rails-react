class Appointment < ApplicationRecord
	belongs_to :user
	
	validates :title, presence: :true, length: {minimum: 3}
	validates :appt_time, presence: :true

	validate :appt_time_cannot_be_in_the_past

	private
	def appt_time_cannot_be_in_the_past
		if appt_time.present? && appt_time < Time.now
			errors.add(:appt_time, "can't be in the past")
		end
	end
end
