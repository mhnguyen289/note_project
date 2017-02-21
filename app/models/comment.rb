class Comment < ApplicationRecord
	belongs_to :user
	belongs_to :note
	# validates :note_content, presence: true
end
