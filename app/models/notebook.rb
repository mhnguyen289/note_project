class Notebook < ActiveRecord::Base
	has_many :note_notebooks
	has_many :notes, through: :note_notebooks
	#belongs_to :user

# def note_attributes=(note_attributes)
#     self.notebook = Note.find_or_create_by(title:notebook_attributes[:title]) unless self.note_id
#   end
# def self.all_notebook_titles
#   @titles = Notebook.all.collect do |notebook|
#     notebook.title
#   end
#   @titles
# end    

 end