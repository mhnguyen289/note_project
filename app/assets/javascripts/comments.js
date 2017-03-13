//use strict:
$(function() {
  $(document).on("submit", "#new_comment", function(e){
    e.preventDefault();
    let values = $(this).serialize();
    let posting = $.post("/comments", values);
    posting.done(function(data){
      comment = new Comment(data.content);
      comment.addComment();
    });
  });
});

const Comment = function(content){
  this.content = content;
};

Comment.prototype.addComment = function(){
  // console.log("inside comments.js")
  $("#comments_list").append("<hr><li> ${this.content} </li> <hr>");
  $("#comment_content").val("");
}
