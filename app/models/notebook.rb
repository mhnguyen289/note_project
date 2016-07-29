class Notebook < ActiveRecord::Base
	has_many :note_notebooks
	has_many :notes


end