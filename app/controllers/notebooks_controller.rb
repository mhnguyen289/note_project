class NotebooksController < ApplicationController

	before_action :find_notbook, only: [:show, :edit, :update, :destroy]

	def index
		@notebooks = Notebook.all
		@notebook = Notebook.first
	end

	def show
		@notebooks = Notebook.find(params[:id])
		@notebook = Notebook.all
			redirect_to new_note_path
		
	end

	def new
		@notebooks = Notebook.new
		@notebook = Notebook.all

	end

	def create
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
		params.require(:notebook).permit(:note, :title)
	end

	def find_notbook
		@notebook = Notebook.find(params[:id])
	end	
end



