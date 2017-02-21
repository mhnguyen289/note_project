class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  before_action :set_note, only: [:create, :destroy]
  def create
    @comment = @note.comments.build(comment_params)
    @comment.user = current_user
    @comment.save
    redirect_to note_path(@note)
  end

  def destroy
    comment = Comment.find_by_id(params[:id])
    comment.delete
    redirect_to note_path(@note)
  end

  protected
    def comment_params
      params.require(:comment).permit(:content)
    end

    def set_note
      @note = Note.find_by_id(params[:comment][:note_id])
    end
end
