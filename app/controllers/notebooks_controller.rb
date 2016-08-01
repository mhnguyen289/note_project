class NotebooksController < ApplicationController


	before_action :find_notebook, only: [ :edit, :update, :destroy]

	def index
		@notebooks = Notebook.all
		@notebook = Notebook.find_by(params[:id])
	end

	def show
		
		#@notes = @notebook.notes.all
		#@note = Note.find_by(params[:id])
		@notebook = Notebook.find_by(params[:notebook_id])
		@notebooks = @notebook.notes.all
		
		end

	def new

		@notebook =  Notebook.find_by(params[:notebook_id])
		@notebooks = Notebook.all

	end

	def create
		
		@notebook = Notebook.find_by(params[:id][:title])
		@notebook = Notebook.create(notebook_params)
		if @notebook.save
			render :index
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
		params.require(:notebook).permit(:title, :note_id)
	end

	def find_notebook
		@notebook = Notebook.find_by(params[:id])
	end	
end



