class CommentsController < NotesController

  def create
    
    @note = Note.find(params[:comment][:note_id])
    # if current_user != @note.user
    #   redirect_to user_notes_path(current_user)
    # else
      @comment = Comment.new(comment_params)
      @comment.save
      render json: @comment#, status: 201
    # end
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :note_id)
    end
end
