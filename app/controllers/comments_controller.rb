class CommentsController < ApplicationController

  def create    
    @note = Note.find(params[:comment][:note_id]) #belongs to note
    # if current_user != @note.user
    #   redirect_to user_notes_path(current_user)
    # else
    @comment = Comment.new(comment_params)
    @comment.save
      render json: @comment#, status: 201
    # end
  end

  def edit
    @comment = Comment.find(params[:id])
  end
  
  def update

    @note = Note.find(params[:comment][:note_id])
    comment = Comment.find(params[:id])
    comment.update(comment_params)
    
    redirect_to note_path(note)
  end

  def destroy

    # @note = Note.find(@comment.note_by_id)
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to note_path(@comment.note_id)
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :note_id)
  end
end