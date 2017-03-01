$(function() {
  bindClick()
})


function bindClick() {

  $(document).on('click', '.view-notes', function(){
    // console.log('view notes button clicked')
    $.get('/api/notes', function(data){
      $('#all-notes').html('')
      data.forEach(function(note) { 
        var newNote = new Note(note.id, note.note_title, note.note_content);
        var formattedNote = newNote.formatNotesIndex()
        $('#all-notes').append(formattedNote)
        
      })
    })
  })

  $(document).on('click', '.js-prev', function(e) {
     $('#app-container').html('')
    const id = $(this).data('id')
      fetch(`/api/notes/${id}/prev`)
      .then(res => res.json())
      .then(note => {
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user)
        const noteHTML = newNote.formatNotesShow()
        $('#app-container').append(noteHTML)
      })
      .catch(err => console.log(err))
    history.pushState(null, null, `/notes/${id - 1}`)
  })
}

  $(document).on('click', '.js-next', function(e) {
     $('#app-container').html('')
    const id = $(this).data('id')
      fetch(`/api/notes/${id}/next`)
      .then(res => res.json())
      .then(note => {
        console.log(note)
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user)
        const noteHTML = newNote.formatNotesShow()
        $('#app-container').append(noteHTML)
      })
      .catch(err => console.log(err))
    history.pushState(null, null, `/notes/${id + 1}`)
  })

function Note(id, title, content, comments, user) {
  this.id = id
  this.note_title = title
  this.note_content = content 
  this.comments = comments
  this.user = user
}

Comment.prototype.addComment = function(){
  $('#comments_list').append('<p>' + this.created_at + ' ' + this.content + '</p> <hr>');
  $('#comment_content').val('');
}

Note.prototype.formatNotesIndex = function(){
  var noteHtml = ''
  noteHtml += `<a href= "/notes/${this.id}" class ="note-title" data-id=${this.id}><h1>Title: ${this.note_title}</h1></a>`
  noteHtml += `<h4> ${this.note_content} </h4>`
  return noteHtml
}


Note.prototype.formatNotesShow = function(){
  const comments = this.comments.map(comment => `<p>${comment.content}</p> <hr>`)
  console.log(comments.join(''))
  var noteHtml = ``
  noteHtml =    `
                  <div id = "note_show">          
                  <div class= "wrapper_with_padding">
                  <h1>Title: ${this.note_title}</h1>
                  <p>Content: ${this.note_content} </p>

                  <div class="buttons">
                    <button name="button" type="submit" class="js-prev" data-id="${this.id}">Previous Note</button>
                    <a class="button" href="/notes/${this.id}/edit">Edit</a>
                    <a class="button" href="/notes/new">Done</a>
                    <a data-confirm="Are you sure?" class="button" rel="nofollow" data-method="delete" href="/notes/${this.id}">Delete</a>
                    <button name="button" type="submit" class="js-next" data-id="${this.id}">Next Note</button>
                  </div>

                  <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xuLYlgLsNqyZDQIivpLQdZwA/EMeZT4ZLOSWkDCO7xLcK3WWml8i6ntK5HVP5e0/Gtl3seG6hYH6DdfOmPqPAQ==">
                  <h4 id=status-list> Comments </h4>
                  <input type="text" name="comment[content]" id="comment_content">
                  <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
                  <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
                  </form>
                  <div id="comments_list">
                    <ol>
                        ${comments.join('')}
                    </ol>
                  </div>
                  </div>
                  </div>
  `

  return noteHtml
}


// $(function(){
//   $(document).on('submit', '.new_comment' function(e){
//     e.preventDefault();


//     var values = $(this).serialize();
//     var posting = $.post('/comments', values);
//     posting.done(function(data){
//       console.log(data.created_at);
//       comment = new Comment(data.content, data.created_at);
//       comment.addComment();
//     });
//   });
// });



// Comment.prototype.addComment = function(){
//   $('#comments_list').append('<p>' + this.created_at + ' ' + this.content + '</p> <hr>');
//   $('#comment_content').val('');

// <h4 id="status-list">Comments</h4>
//   <%= form_for(@comment) do |f| %>
//     <%= f.text_field :content %>
//     <%= f.hidden_field :note_id, :value => @note.id %>
//     <%= f.submit %>
//   <% end %>

// //  <h4 id="status-list">Comments</h4> 
//  <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xuLYlgLsNqyZDQIivpLQdZwA/EMeZT4ZLOSWkDCO7xLcK3WWml8i6ntK5HVP5e0/Gtl3seG6hYH6DdfOmPqPAQ==">
//  <input type="text" name="comment[content]" id="comment_content">
//  <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
//  <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
//  </form>