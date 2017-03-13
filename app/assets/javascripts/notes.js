$(function() {
  bindClick()
})

//ajax allows the application to request more info from server without locking the browser
function bindClick() {

  $(document).on("click", ".view-notes", function(e){
    // e.preventDefault();
    // hijack the click event of view-notes link to fire ajax request
    $.get("/api/notes", function(data){ //getting the array of objects from api/notes. Anon func will not fire until arr of obj is received
      $("#all-notes").html("<h4>Here are current Notes today:</h4>")
      data.forEach(function(note) { 
        var newNote = new Note(note.id, note.note_title); //calling new on Note function 
        var formattedNote = newNote.formatNotesIndex()
        $("#all-notes").append(formattedNote)
      })
    })
  })

  $(document).on("click", ".js-prev", function(e) {
    //document(top parent) is used for "future links" of .js-prev because the title links aren"t created yet
     $("#app-container").html("")
     //cleared app-container
    const id = $(this).data("id") 
    //grabbing id of the variable clicked which is defined on line 79
      fetch(`/api/notes/${id}/prev`)
       //fetch uses promises which is resolved using .then
      .then(res => res.json())
      //using the response to convert it to json which returns another promise. arrow => functions work same as callback functions
      .then(note => {
        //returns notes data in json format
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user)
        //when clicked you will see new post and all the properties assigned that you get back by the constructor function on line 63
        const noteHTML = newNote.formatNotesShow()
        //with foratNotesShow, you will be formatting a notes/show page
        $("#app-container").append(noteHTML)
        //appending noteHtml data to the app-container. Should it append formatNotesShow or noteHTML?
      })
      .catch(err => console.log(err))
      //?
    history.pushState(null, null, `/notes/${id - 1}`)
    //pushstate takes 3 args, 3rd arg is the url that you want to update
  })
}

  $(document).on("click", ".js-next", function(e) {
     $("#app-container").html("")
    const id = $(this).data("id")
      fetch(`/api/notes/${id}/next`)
      .then(res => res.json())
      .then(note => {
        console.log(note)
        const newNote = new Note(note.id, note.note_title, note.note_content, note.comments, note.user)
        const noteHTML = newNote.formatNotesShow()
        $("#app-container").append(noteHTML)
      })
      .catch(err => console.log(err))
    history.pushState(null, null, `/notes/${id + 1}`)
  })

// Note Constructor 
function Note(id, title, content, comments, user) {
  this.id = id
  this.note_title = title
  this.note_content = content 
  this.comments = comments
  this.user = user

}

// Comment.prototype.addComment = function(){
//   console.log("inside notes.js")
//   $("#comments_list").append("<p>" + this.created_at + " " + this.content + "</p> <hr>");
//   $("#comment_content").val("");
// }

// Note object function to view all notes
Note.prototype.formatNotesIndex = function(){
  var noteHtml = ""
  noteHtml += 
              ` 
              
              
              <div class="note">
              <p class="title"> 
              <a href= "/notes/${this.id}" class ="note-title" data-id=${this.id}> ${this.note_title}</a></p>
              <p class="delete">
              <a href="/notes/${this.id}/edit">Edit</a>
               <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/notebooks/1">Delete</a>
               </p>
              
              
              </div>`
  // noteHtml += `<h4> ${this.note_content} </h4>`
  // noteHtml += `<h4> ${this.comments.length} </h4>`
  return noteHtml
}


Note.prototype.formatNotesShow = function(){
  const comments = this.comments.map(comment => `<li>${comment.content}</li> <hr>`)
  //format the content of the comments
  console.log(comments.join(""))
  var noteHtml = ``
  noteHtml =    ` 
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
                  <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
                  </form>

                  <div id="comments_list">
                    <ol>
                      ${comments.join("")}
                    </ol>
                  </div>
                </div>

  `

  return noteHtml
}

// <h1>Title: ${this.note_title}</h1>
//                   <p>Content: ${this.note_content} </p>

//                   <div class="buttons">
//                     <button name="button" type="submit" class="js-prev" data-id="${this.id}">Previous Note</button>
//                     <a class="button" href="/notes/${this.id}/edit">Edit</a>
//                     <a class="button" href="/notes/new">Done</a>
//                     <a data-confirm="Are you sure?" class="button" rel="nofollow" data-method="delete" href="/notes/${this.id}">Delete</a>
//                     <button name="button" type="submit" class="js-next" data-id="${this.id}">Next Note</button>
//                   </div>
// <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xuLYlgLsNqyZDQIivpLQdZwA/EMeZT4ZLOSWkDCO7xLcK3WWml8i6ntK5HVP5e0/Gtl3seG6hYH6DdfOmPqPAQ==">
//                   <h4 id=status-list> Comments </h4>
//                   <input type="text" name="comment[content]" id="comment_content">
//                   <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
//                   <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
//                   </form>


// $(function(){
//   $(document).on("submit", ".new_comment" function(e){
//     e.preventDefault();


//     var values = $(this).serialize();
//     var posting = $.post("/comments", values);
//     posting.done(function(data){
//       console.log(data.created_at);
//       comment = new Comment(data.content, data.created_at);
//       comment.addComment();
//     });
//   });
// });



// Comment.prototype.addComment = function(){
//   $("#comments_list").append("<p>" + this.created_at + " " + this.content + "</p> <hr>");
//   $("#comment_content").val("");

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