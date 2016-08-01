class Note < ActiveRecord::Base
	
	has_many :note_notebooks
	has_one  :notebook, through: :note_notebook


	
end