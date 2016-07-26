class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update]

	def index
		@notes = Note.where(user_id: current_user)
	end

	def show
		@notebook = Notebook.all
	end

	def new

		@notebooks = Notebook.all
		@note = current_user.notes.build
		
		

	end

	def create
		@note = current_user.notes.build(note_params)

		if @note.valid?
			@note.save
			redirect_to @note
		else
			render 'new'
		end
	end

	

	def edit
		@notebook = Notebook.all
	end

	def update
		if @note.update(note_params)
			redirect_to @note
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
		@note = Note.find(params[:id])
	end

	def note_params
		params.require(:note).permit(:title, :content, :notebook_id)
	end


end
