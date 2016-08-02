class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update]


	def index
		@note = Note.all
		@notebook = Notebook.find_by(params[:id])
		#@note = Note.where(user_id: current_user)
		@notes = @notebook.notes.all
		
	end

	def show

		@notebooks = Notebook.all
		@notebook = Note.find(params[:id])
		
		
	end

	def new
		
		@notes = Note.all
		@notebook = Notebook.find_by(params[:id])
		@notebooks = Notebook.all
		@note = @notebook.notes.build
		
	end

	def create
		 raise params.inspect  
		@notebook = Notebook.find(params[:note][:notebook_id])
		@note = @notebook.notes.create(note_params)

		if @note.valid?
			@note.save
			render 'show'
		else
			render 'new'
		end
	end

	

	def edit
		@note = Note.find_by(params[:id])
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
