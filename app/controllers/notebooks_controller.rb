class NotebooksController < ApplicationController


	before_action :find_notebook, only: [:show, :edit, :update, :destroy]

	def index
		
		# @notes = Note.all
		# @notebook = Notebook.find_by(params[:id])
		@notebooks = Notebook.all
		#@notes = @notebooks.notes.all
		@notebook = Notebook.first
	end

	def show
		
		@notebooks = Notebook.all
		@note = Note.find_by(params[:id])
		@notes = Note.all
		@notebook = Notebook.find_by(params[:id])
		

		
		end

	def new

		
		@notebook = Notebook.new
		@notebooks = Notebook.all
	end

	def create
		
		@notebook = Notebook.find_by(params[:id])
		@notebook = Notebook.create(notebook_params)
		if @notebook.valid?
			@notebook.save
			redirect_to notebooks_path
		else
			render :new
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
		params.require(:notebook).permit(:title, :note, :note_id)
	end

	def find_notebook
		@notebook = Notebook.find_by(params[:id])
	end	
end



