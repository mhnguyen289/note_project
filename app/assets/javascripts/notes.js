

$(function() { 
  bindClick();
});

function Note(id,title,content,comments,user) {
  this.id = id
  this.note_title = title
  this.note_content = content 
  this.comments = comments
  this.user = user
};

function getNotes(){
  
  fetch(`/api/notes/`)
  .then(res => res.json())
  .then(data => renderNotes(data))
  .catch(err => console.log(err))
};

function renderNotes(data) {
  $("#all-notes").html("<h4>Here are current Notes today:</h4>")
  data.forEach(note => toggleNoteData(note))
}

function toggleNoteData(note){  
  const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user)       
  const formattedNote = newNote.formatNotesIndex() 
  const noteHTML = newNote.formatNotesShow()        
  $("#app-container").append(noteHTML)        
  $("#all-notes").append(formattedNote)
}

function bindClick() {
  $(document).on("click", ".view-notes", function(e) { 
    e.preventDefault();
    getNotes()
  });

  $(document).on("click", ".js-prev", function(e) {    
   $("#app-container").html("");
   const id = $(this).data("id"); 
    // prevNote()
    fetch(`/api/notes/${id}/prev`)
    .then(res => res.json())
    .then(data => toggleNoteData(data))
    .catch(err => console.log(err))
    history.pushState(null, null, `/notes/${id - 1}`)    
  })
};

$(document).on("click", ".js-next", function(e) {
 $("#app-container").html("");
 const id = $(this).data("id");
 fetch(`/api/notes/${id}/next`)
 .then(res => res.json())
 .then(data => toggleNoteData(data))       
 .catch(err => console.log(err))
 history.pushState(null, null, `/notes/${id + 1}`)
});

Note.prototype.formatNotesIndex = function(){
  let noteHtml = ""
  noteHtml += 
  `  
  <div class="note">
  <p class="title"> 
  <a href= "/notes/${this.id}" class ="note-title" data-id=${this.id}> ${this.note_title}</a></p>
  <p class="delete">
  <a href="/notes/${this.id}/edit">Edit</a>
  <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/notebooks/1">Delete</a>
  </p> 
  </div>
  `
  return noteHtml
};


Note.prototype.formatNotesShow = function(){
  const comments = this.comments.map(comment => `<hr>
    <li>${comment.content}
    <p id="comment_buttons">
    <a href="/comments/${this.id}/edit">Edit</a>
    <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${this.id}">Delete</a> 
    </p> 
    </li>`
    ).join("");

  return ` 
  <div class="wrapper_with_padding">
  <div id="note_show">
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
  <h2 id=status-list> Comments </h2>
  <input type="text" name="comment[content]" id="comment_content">
  <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
  <input type="submit" name="commit" value="Create Comment">
  </form>

  <ol id="comments_list">
  ${comments}
  </ol>
  </div>
  `;
};
