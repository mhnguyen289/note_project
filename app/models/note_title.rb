class NoteTitle < ActiveRecord::Base
	belongs_to :note
	belongs_to :notebook

	
end
