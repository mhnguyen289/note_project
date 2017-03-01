class Comment < ApplicationRecord
	# belongs_to :user
	belongs_to :note
	# validates :note_content, presence: true

	def format_time
    created_at.strftime("%Y-%m-%d")
  end
end
