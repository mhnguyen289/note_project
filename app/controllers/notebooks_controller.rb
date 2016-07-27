class NotebooksController < ApplicationController


	before_action :find_notebook, only: [:show, :edit, :update, :destroy]

	def index
		@notebooks = Notebook.all
		@notebook = Notebook.first
	end

	def show
		
		
		@note = Note.find_by(params[:id])
		@notebook = Notebook.find(params[:id])
		@notebooks = @notebook.notes.all
		
		end

		
	

	def new
		@notebook = current_user.notebooks.build
		@notebooks = Notebook.all

	end

	def create
		@notebooks = Notebook.all
		@notebook = Notebook.create(notebook_params)
		

		if @notebook.valid?
			@notebook.save
			redirect_to new_note_path
		else
			render :edit
		end
	end	

	def edit
	end

	def update
	end

	def destroy
	end

	private

	def notebook_params
		params.require(:notebook).permit(:note, :title)
	end

	def find_notebook
		@notebook = Notebook.find(params[:id])
	end	
end



