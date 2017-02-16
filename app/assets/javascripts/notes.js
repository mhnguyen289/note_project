$(function(){
	bindClick()
})

function bindClick() {
	$('.view-notes').on('click', function(){
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

	$(document).on('click','.note-title',function(e){
		e.preventDefault()
		const id = $(this).data('id')
		fetch(`/api/notes/${id}`)
		.then(response => response.json())
		.then(note => {
			$('#all-notes').html('')
			const newNote = new Note(note.id, note.note_title, note.note_content);
			const formattedNote = newNote.formatNotesShow()
			$('#all-notes').append(formattedNote)
		})
		history.pushState(null, null, `/notes/${id}`)
	})

	$(".js-next").on('click', function(e){
		e.preventDefault()
   	var nextId = parseInt($(".js-next").attr("data-id")) + 1;
   	$.get('/api/notes/' + nextId, function(data){
    		// console.log("data is ", data)
    		$("#note_show").html('')
    		$("#note_show").html(`<h1> ${data.note_title} </h1>
    									<h3> ${data.note_content} </h3>`);
    		// $("#note_show").html(`<h3> ${data.note_content} </h3>`)
		    //   $(".noteTitle").text(data["note"]["note_title"]);
		    //   $(".noteContent").text(data["note"]["note_content"]);
		      // $(".js-next").attr("data-id", data["note"]["id"])
		    //   loadNotes(data);
		 })
    })
	$(".js-prev").on('click', function(e){
		e.preventDefault()
		var prevId = parseInt($(".js-prev").attr("data-id")) - 1;
		$.get('/api/notes/' + prevId, function(data){
			
				$("#note_show").html('')
				$("#note_show").html(`<h1> ${data.note_title} </h1>
											<h3> ${data.note_content} </h3>`);
				// $(".js-prev").attr("data-id", data["note"]["id"])
			
		})
	})
}

function Note(id, note_title, note_content){
	this.id = id
	this.note_title = note_title
	this.note_content = note_content
	
}

Note.prototype.formatNotesIndex = function(){
	var noteHtml = ''
	noteHtml += `<a href= "" class="note-title" data-id=${this.id}><h1>Title: ${this.note_title}</h1></a>`
	// noteHtml += '<a href = ""><h4>' + this.user.email + '</h4></a>'
	noteHtml += `<h4> ${this.note_content} </h4>`
	return noteHtml
}

Note.prototype.formatNotesShow = function(){
	var noteHtml = ``
	noteHtml =		`
							<h1>Title: ${this.note_title}</h1>
							<h4>Content: ${this.note_content} </h4>
						`

	return noteHtml
};

// $(".dropdown-menu li ").click(function(){
//   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
//   $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
// });