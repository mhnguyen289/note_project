class Note < ActiveRecord::Base
	belongs_to :user
	has_many :note_notebooks
	belongs_to :notebook


	
end