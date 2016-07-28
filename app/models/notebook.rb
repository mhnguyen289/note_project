class Notebook < ActiveRecord::Base
<<<<<<< HEAD
	has_many :notes
	has_many :note_titles, :through => :notes
	belongs_to :user


	
	
=======
	has_many :note_notebooks
	has_many :notes, through: :note_notebooks
>>>>>>> notenote

end
