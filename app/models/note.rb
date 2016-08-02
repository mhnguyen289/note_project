class Note < ActiveRecord::Base
	belongs_to :user
	has_one :notebook, through: :note_notebook
	has_one :note_notebook
	
	

def notebook_attributes=(notebook_attributes)
    self.notebook = Notebook.find_or_create_by(title:notebook_attributes[:title]) unless self.notebook_id
  end

	
	def self.all_notebook_titles
  @titles = Notebook.all.collect do |notebook|
    notebook.title
  end
  @titles
end    

end