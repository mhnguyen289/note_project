class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update]


	def index
		@notes = Note.where(user_id: current_user)
	end

	def show
		@notebooks = Notebook.all
		@note = Note.find_by(params[:id])
		@notebook = Notebook.find_by(params[:id])
		@notes = @notebook.notes.all
		
	end

	def new
		@notebook = Notebook.find_by(params[:id])
		@notebooks = Notebook.all
		@note = @notebook.notes.build
		@notes = @notebook.notes.all
		
		

	end

	def create
		@notebooks = Notebook.all
		# @notebook = Notebook.find_by(params[:id])
		@note = @notebook.notes.build(note_params)
		if @note.valid?
			@note.save
			render :show
		else
			redirect :new
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
		@note.destroy
		redirect_to notes_path
	end

	private

	def find_note
		@note = Note.find_by_id(params[:id])

	end

	def note_params
		params.require(:note).permit(:title, :content, :notebook_id)
	end


end
