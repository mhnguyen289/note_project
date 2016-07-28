class Note < ActiveRecord::Base
	belongs_to :user
<<<<<<< HEAD
	belongs_to :notebook
	has_many :note_titles
=======
	has_many :note_notebooks
	has_one :notebook, through: :note_notebooks
>>>>>>> notenote

	
end
