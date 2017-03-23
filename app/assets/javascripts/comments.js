$(function(){
  $('[data-disable-with]').removeAttr('data-disable-with') //removes data-disable-with bc rails 5 adds it to form and does not allow to cont to add comments

  $(document).on("submit", "#new_comment", function(e){
    e.preventDefault();
    // console.log(this)
    let values = $(this).serialize();
    let posting = $.post("/comments", values);
    $("#comment_content").val("")
    posting.done(function(data){ //

      // console.log(data) = Object {id: 233, content: "the comment", user_id: null, note_id: 33, created_at: "2017-03-22T00:35:15.356Z"…}
      const newComment = new Comment(data.content);
      const addComment = newComment.addCommentList()
      // console.log(addComment) = <hr><ol><li> ${this.content} </li></ol>
      // comment.addComment();
      // console.log(newComment) = Comment {content: "commnet 6"}
      $("#comments_list").append(addComment)
      $("#new_comment").unbind("submit")
    });
  });
});

let Comment = function(content){
  this.content = content;
};

Comment.prototype.addCommentList = function(){
  let commentHtml = ``
  commentHtml+=
  `
   <hr><li> ${this.content}
   

   </li>
  
  `
  return commentHtml
};

// const comments = this.map(comment => `<ol><li>${comment.content}</li><ol> <hr>`)
//    <div id="comments_list">
//                     <ol>
//                       ${comments.join("")}
//                     </ol>
//                   </div>
//                 </div>

