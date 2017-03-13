$(function(){

  $(document).on('submit', '#new_comment', function(e){
    e.preventDefault();
    var values = $(this).serialize();
    var posting = $.post('/comments', values);
    posting.done(function(data){
      console.log(data.created_at);
      comment = new Comment(data.content, data.created_at);
      comment.addComment();
    });
  });
});

var Comment = function(content, created_at){
  this.content = content;
  this.created_at = created_at.slice(0,10);

};

Comment.prototype.addComment = function(){
  console.log('inside comments.js')
  $('#comments_list').append('<p>' + this.created_at + ' ' + this.content + '</p> <hr>');
  $('#comment_content').val('');
}
