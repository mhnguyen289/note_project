class Notebook < ActiveRecord::Base
	has_many :note_notebooks
	has_many :notes


def self.all_notebook_titles
  @titles = Notebook.all.collect do |notebook|
    notebook.title
  end
  @titles
end    

end