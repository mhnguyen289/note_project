class NotebooksController < ApplicationController


	before_action :find_notebook, only: [:show, :edit, :update, :destroy]

	def index
		@notebooks = Notebook.all
		@notebook = Notebook.first
	end

	def show
		
		@notebook = Notebook.find_by(params[:id])
		@notebooks = @notebook.notes.all

		
		end

	def new

		
		@notebooks = Notebook.new
		@notebook = Notebook.all
	end

	def create
		
		#@notebook = Notebook.find_by(params[:id])
		@notebook = Notebook.create(notebook_params)
		if @notebook.valid?
			@notebook.save
			redirect_to @notebook
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
		params.require(:notebook).permit(:title, :note)
	end

	def find_notebook
		@notebook = Notebook.find_by(params[:id])
	end	
end



