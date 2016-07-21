class NotebooksController < ApplicationController

	before_action :find_notbook, only: [:show, :edit, :update, :destroy]

	def index
		@notes = Note.where(user_id: current_user)
	end

	def show
		@notebook = Notebook.all
	end

	def new
		@note = current_user.notes.build
	end

	def create
		@note = current_user.notes.build(notebook_params)

		if @notebook.save
			redirect_to @notebook
		else
			render 'new'
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
		params.require(:destination)

	def find_notbook
		@notebook = Notebook.find(params[:id])
	end	
end


end
