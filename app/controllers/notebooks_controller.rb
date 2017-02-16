class NotebooksController < ApplicationController

	before_action :find_notebook, only: [:index, :show, :edit, :update, :destroy]

	def index
		@notebooks = current_user.notebooks
		@notebook = Notebook.find_by(params[:id])

	end

	def show
		@notebooks = Notebook.all
	   @notebook = Notebook.find(params[:id])
	end


	def new
		@notebook = Notebook.new
		# @notebooks = Notebook.all
	end

	def create
		
		@notebook = current_user.notebooks.create(notebook_params)
		if @notebook.valid?
			@notebook.save
			redirect_to notebooks_path
		else
			render :new
		end
	end	

	def edit
		@notebook = Notebook.find_by(params[:id])
	end

	def update
		notebook = Notebook.find(params[:id])
		if notebook.update(notebook_params)
			render 'index'
		else
			render 'edit'
		end
	end

	def destroy
		notebook = Notebook.find(params[:id])
		notebook.destroy
		render :index
	end

	
private

	def notebook_params
		params.require(:notebook).permit(:notebook_title, :notebook_content, :user_id, notebook_attributes: [:title])
	end

	def find_notebook
		@notebook = Notebook.where(params[:id])
	end	
end



