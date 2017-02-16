class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update, :api_show]


	def index
		

		# @notes = current_user.notes
		# render json: @notes
	end

	def api_index
		@notes = Note.all
		render json: @notes
	end

	def api_show
		
		@note = Note.find_by_id(params[:id])
		render json: @note
	end

	def show

		@notebooks = current_user.notebooks.all
		@note = Note.find(params[:id])
	end

	def new

		# @notes = Note.all
		
		# if params["notebook_id"]
		#  @notebook = current_user.notebooks.find(params[:notebook_id])
		# else
		#  @notebook = Notebook.find_by(params[:id])
		# end
		#@notebooks = current_user.notebooks.all
		 # @note = @notebook.notes.build 

		# @notebook = current_user.notebooks.build() 
		# @note = current_user.notes.build()
		@note = current_user.notes.build()
	end

	def create
		
		binding.pry
		@note = current_user.notes.build(note_params)
		
		# @notebook = Notebook.find_or_create_by(:content=>params[:note][:content])
		# @notebook = Notebook.find_or_create_by(note_params)
		# @note = @notebook.notes.new(note_params)
		 @notebook = Notebook.find_or_create_by(:notebook_title=>params[:note][:notebook_attributes])
		  @note.notebook = @notebook
		if @note.valid?
			@note.save
			
			redirect_to notebook_note_path(@notebook, @note)
		else
			render 'new'
		end
	end	

	def edit
		@notebooks = current_user.notebooks.all
		@note = Note.find(params[:id])
	end

	def update
		if @note.update(note_params)
			redirect_to @note
		else
			render 'edit'
		end
	end

	def destroy
		
		note = Note.find(params[:id])
		notebook = note.notebook
		note.destroy
		redirect_to notebook_path(notebook)
	end

	private

	def find_note
		@note = Note.find_by(params[:id])

	end

	def note_params
		params.require(:note).permit(:note_title, :note_content, :notebook_attributes)
		
	end


end
