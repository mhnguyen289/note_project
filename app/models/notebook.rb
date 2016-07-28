class Notebook < ActiveRecord::Base
	has_many :note_notebooks
	has_many :notes, through: :note_notebooks


end
