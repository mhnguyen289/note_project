class Notebook < ActiveRecord::Base
	has_many :notes
	has_many :note_titles, :through => :notes
	belongs_to :user


	
	

end
