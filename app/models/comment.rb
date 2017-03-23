class Comment < ApplicationRecord
	# belongs_to :user
	has_one :note
	# validates :note_content, presence: true

	def format_time
    created_at.strftime("%Y-%m-%d")
  end

  def date
    created_at.strftime('%A, %d %b %Y %l:%M %p')
  end

  def updated
    updated_at.strftime('%A, %d %b %Y %l:%M %p')
  end

  def note_by_id
  	binding.pry
    note.id
  end

  

  def self.all_comments(user_id)
    comments = []
    find_each do |comment|
      comments << comment if comment.user_id == user_id
    end
    comments
  end

end
