class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update, :api_show, :api_next, :api_prev]
	
	def index
		@notes = Note.all
	end

	def api_index
		@notes = Note.all
		render json: @notes
	end

	def api_next 
		@next_note = @note.next
		render json: @next_note
	end

	def api_prev 
		@prev_note = @note.previous
		render json: @prev_note
	end

	def show		
		@notebooks = current_user.notebooks.all
		@comment = Comment.new
		respond_to do |f|
			f.html {render :show }
			f.json {render json: @note }
		end
	end

	def api_show
		render json: @note
	end

	def new		
		@notebook = current_user.notebooks.find(params[:notebook_id])
		@note = @notebook.notes.build()
	end

	def create		
		@notebook = Notebook.find(params[:note][:notebook_id])		
		@note = @notebook.notes.build(note_params)
		@note.user = current_user
		if @note.valid?
			@note.save
			redirect_to notebook_note_path(@notebook, @note)
		else
			render 'new'
		end
	end	

	def edit
		@notebooks = current_user.notebooks.all
	end

	def update
		if @note.update(note_params)
			redirect_to @note
		else
			render 'edit'
		end
	end

	def destroy
		@note = Note.find(params[:id])
		# @notebook = @note.notebook
		@note.destroy
		redirect_to notes_path
	end

	private

	def find_note
		@note = Note.find_by_id(params[:id])
	end

	def note_params
		params.require(:note).permit(:notebook_id, :note_title, :note_content)
	end


end