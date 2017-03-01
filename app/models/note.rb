class Note < ActiveRecord::Base
	belongs_to :user
	# has_one :notebook, through: :note_notebook
	# has_one :note_notebook
	belongs_to :notebook
	has_many :comments
	# validates_presence_of :title, :notebook_id
	# validates_uniqueness_of :title


	  # accepts_nested_attributes_for :notebook




	  def notebook_titles=(notebook_titles)
	  	self.notebook = Notebook.find_or_create_by(notebook_title: notebook_title)
	  end


	  def self.all_notebook_titles
	  	@titles = Notebook.all.collect do |notebook|
	  		notebook.title
	  	end
	  	@titles
	  end    

	  # def next
   #  	self.where("id > ?", id).first
  	#   end

	  def next
	  	if next_note = self.class.where("id > ?", id).first
	  		next_note
	  	else
	  		Note.first
	  	end
	  end

	  def previous
	  	if previous_note = self.class.where("id < ?", id).last
	  		previous_note
	  	else
	  		Note.last
	  	end
	  end

	end