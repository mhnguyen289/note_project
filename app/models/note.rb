class Note < ActiveRecord::Base
	belongs_to :user
	# has_one :notebook, through: :note_notebook
	# has_one :note_notebook
	 belongs_to :notebook
	 # has_many :comments, dependent: :destroy
	# validates_presence_of :title, :notebook_id
	# validates_uniqueness_of :title


	  # accepts_nested_attributes_for :notebook

	
	

def notebook_titles=(notebook_titles)
	binding.pry
	

	self.notebook = Notebook.find_or_create_by(notebook_title: notebook_title)

  end

	
	def self.all_notebook_titles
  @titles = Notebook.all.collect do |notebook|
    notebook.title
  end
  @titles
end    

# def next
    
#     if next_post = self.class.where("id > ?", id).first
#       next_post
#     else
#       Note.first
#     end
#   end

#   def previous
   
#     if previous_post = self.class.where("id < ?", id).last
#       previous_post
#     else
#       Note.last
#     end
#   end

end