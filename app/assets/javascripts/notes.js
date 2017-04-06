 $(function(){ 
    bindClick();
  });

  function Note(id,title,content,comments,user,notebook_id) {
    this.id = id
    this.note_title = title
    this.note_content = content 
    this.comments = comments
    this.user = user
    this.notebook_id = notebook_id
  }

  // function renderNotes(data) {
  //   data.forEach(note => toggleNoteData(note))
  // }
  function bindClick() {
    
    $(document).on("click", ".view-notes", function(e){ 
    e.preventDefault();
    fetch(`/api/notes/`) 
    .then(res => res.json())
    .then(data => {
    $("#all-notes").html("<h4>Here are current Notes today:</h4>")
      // const data =  
      data.forEach
      (note => {
      const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user,note.notebook_id);
      const formattedNote = newNote.formatNotesIndex() //view all notes button 
      $("#all-notes").append(formattedNote) //view all notes button
      })
    })
    .catch(err => console.log(err))
  })

    $(document).on("click", ".note", function(e){
      e.preventDefault();
      const id = $(this).data("id"); 
      fetch(`/api/notes/${id}`)
      .then(res => res.json())
      .then(note => {
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user,note.notebook_id);
        const formatNoteIndex = newNote.renderNoteModal() //modal
        $(".modal-content").replaceWith(formatNoteIndex) //modal
      })
      .catch(err => console.log(err))
    })

    $(document).on("click", ".js-prev", function(e) {    
     $("#app-container").html("");
     const id = $(this).data("id"); 
     fetch(`/api/notes/${id}/prev`)
     .then(res => res.json())
     .then(note => {
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user,note.notebook_id);
        const noteHTML = newNote.formatNotesShow() //next,prev 
        $("#app-container").append(noteHTML)    //next,prev    
      })
     .catch(err => console.log(err))
     history.pushState(null, null, `/notes/${id - 1}`)    
   })

    $(document).on("click", ".js-next", function(e) {
     $("#app-container").html("")
     const id = $(this).data("id")
     fetch(`/api/notes/${id}/next`)
     .then(res => res.json())
     .then(note => {
      const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user,note.notebook_id)
      const noteHTML = newNote.formatNotesShow() //next,prev 
        $("#app-container").append(noteHTML)    //next,prev    
      })
     .catch(err => console.log(err))
     history.pushState(null, null, `/notes/${id + 1}`)
   })
  }

    Note.prototype.formatNotesIndex = function(){
      // const notes = this.map(note => `${this.note_title}`)
      let noteHtml = ""
      noteHtml += 
      ` 
      <div class="wrapper_with_padding">
       <div class= "clearfix" id=notes>
        <div class="note" data-toggle="modal" data-target="#myModal" data-id ="${this.id}">
          <p class="title">   
           ${this.note_title}
         </p>
         <p class="delete">   
         <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/notes/${this.id}">Delete</a>
         </p>
        </div>
      </div>
    </div>
      `
      return noteHtml
    }

    Note.prototype.renderNoteModal = function(){
      let noteModalHtml = ""
      noteModalHtml +=
      `  
      <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">${this.note_title}</h4>
      </div>
      <div class="modal-body">
      <p>${this.note_content}</p>
      </div>
      <div class="modal-footer">
      <a class="btn btn-default" button type="button" href="/notes/${this.id}">Full Page</a>
      <a class="btn btn-default" button type="button" data-dismiss="modal">Close</a>    
      </div>
      </div>  
      </div>
      `
      return noteModalHtml
    }

    Note.prototype.formatNotesShow = function(){

      const comments = this.comments.map(comment => `<hr>
        <li>${comment.content}
        <p id="comment_buttons">
        <a href="/comments/${comment.id}/edit">Edit</a>
        <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${comment.id}">Delete</a> 
        </p> 
        </li>`
        ).join("")

      return ` 
      <div class="wrapper_with_padding">
      <div id="note_show">
      <h1> ${this.note_title}</h1>
      <p>  ${this.note_content} </p>
      <div class="buttons">
      <button name="button" type="submit" class="js-prev" data-id="${this.id}">Previous Note</button>
      <a class="button" href="/notes">Done</a>
      <a class="button" href="/notes/${this.id}/edit">Edit</a>
      <a data-confirm="Are you sure?" class="button" rel="nofollow" data-method="delete" href="/notes/${this.id}">Delete</a>
      <button name="button" type="submit" class="js-next" data-id="${this.id}">Next Note</button>
      </div>

      <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xuLYlgLsNqyZDQIivpLQdZwA/EMeZT4ZLOSWkDCO7xLcK3WWml8i6ntK5HVP5e0/Gtl3seG6hYH6DdfOmPqPAQ==">
      <div class"status-list">
      <h2>Comments</h2>
      <input type="text" name="comment[content]" id="comment_content">
      <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
      <input type="submit" name="commit" value="Comment here">
      </form>
      </div>

      <ol id="comments_list">
      ${comments}
      </ol>
      </div>
      `;
    };

  // function toggleNoteData(note){  

  //   const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user);
  //   // const formatNoteIndex = newNote.renderNoteModal() //modal
  //   // $(".modal-content").replaceWith(formatNoteIndex) //modal
  //   // const noteHTML = newNote.formatNotesShow() //next,prev    
  //   // const formattedNote = newNote.formatNotesIndex() //view all notes button 
  //   // $("#app-container").append(noteHTML)    //next,prev    
  //   // $("#all-notes").append(formattedNote) //view all notes button
  // }
