class Note < ActiveRecord::Base
	belongs_to :user
	has_many :note_notebooks
	has_one :notebook, through: :note_notebooks

	
end
