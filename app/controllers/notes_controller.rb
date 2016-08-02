class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update]


	def index
		@notes = Note.where(user_id: current_user)
		
	end

	def show
		@notebooks = Notebook.all
		@notebook = Note.find(params[:id])
		
		
	end

	def new
		@notebooks = Notebook.all
		@note = current_user.notes.build
		@notebook = Notebook.new
	end

	def create
		  
		@notebook = Notebook.find(params[:note][:notebook_id])
		@note = @notebook.notes.create(note_params)

		if @note.valid?
			@note.save
			redirect_to @note
		else
			render 'new'
		end
	end

	

	def edit
		@notebooks = Notebook.all
	end

	def update
		if @note.update(note_params)
			redirect_to note_path
		else
			render 'edit'
		end
	end

	def destroy
		if @note.destroy
			redirect_to notebook_path
		else
			render :show
		end
	end

	private

	def find_note
		@note = Note.find_by(params[:id])

	end

	def note_params
		params.require(:note).permit(:title, :content, :notebook_id, notebook_attributes: [:title])
	end


end
