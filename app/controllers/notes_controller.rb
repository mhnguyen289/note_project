class NotesController < ApplicationController
	before_action :find_note, only: [:show, :edit, :destroy, :update, :api_show]


	def index
		

		@notes = Note.all
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

	def api_next 
		
		@note = Note.find_by_id(params[:id])
		@next_note = @note.next
		render json: @next_note
	end

	def api_prev 
		@note = Note.find_by_id(params[:id])
		@prev_note = @note.previous
		render json: @prev_note
	end

	def show

		@notebooks = current_user.notebooks.all
		@note = Note.find(params[:id])
		@comment = Comment.new
		respond_to do |f|
			f.html {render :show }
			f.json {render json: @note }
		end
		 # raise @note.inspect
	end

	def new
		@note = current_user.notes.build()
	end

	def create
		
		@notebook = Notebook.find_by(params[:id])
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
		params.require(:note).permit(:notebook_id, :note_title, :note_content)
		
	end


end
