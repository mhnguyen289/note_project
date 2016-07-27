class NotebooksController < ApplicationController


	before_action :find_notebook, only: [:show, :edit, :update, :destroy]

	def index
		@notebooks = Notebook.all
		@notebook = Notebook.first
	end

	def show
		
		@notes = Note.all
		@notebook = Notebook.find(params[:id])
		@notebooks = Notebook.all
		@note = Note.find(params[:id])
		if @notebook
			@notebook.save
			render :show
		else
			redirect_to note_path
			end
		end

		
	

	def new
		@notebook = Notebook.new
		@notebooks = Notebook.all

	end

	def create
		@notebook = notebook.build(params[:id])
		

		if @notebook.valid?
			@notebook.save
			render :show
		else
			redirect_to note_path
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



