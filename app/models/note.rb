class Note < ActiveRecord::Base
	belongs_to :user
	belongs_to :notebook
	has_many :note_notebooks
	
	# has_one  :notebook, through: :note_notebooks

def notebook_attributes=(notebook_attributes)
    self.notebook = Notebook.find_or_create_by(title:notebook_attributes[:title]) unless self.notebook_id
  end

	
end