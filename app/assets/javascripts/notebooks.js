$(function(){
	notebookModel();
});

function Notebook(id,title,notes,user){
	this.id = id
	this.notebook_title = title
	this.notes = notes
	this.user = user
};

function notebookModel(){
	$(document).on("click",".notebook", function(e){
		e.preventDefault();
		const id = $(this).data("id");
		fetch(`/notebooks/${id}`)
		.then(res => res.json())
		.then(data => {
		const notebook = new Notebook(data.id, data.notebook_title, data.notes, data.user)
		const formatNotebookIndex = notebook.renderNotebookModal()
		$(".modal-content").replaceWith(formatNotebookIndex)
		})
	.catch(err => console.log(err))
	})

	Notebook.prototype.renderNotebookModal = function(){
		const notes = this.notes.map(note => `
			<h4>Title: <b>${note.note_title}</b></h4>
		 	<p>${note.note_content}</p>		 	
		 	<a class="btn btn-default" button type="button" href="/notes/${note.id}">Full Page</a>
		 	<a class= "btn btn-default" button type="button" data-confirm="Are you sure?"  rel="nofollow" data-method="delete" href="/notes/${note.id}">Delete</a><hr>
		 	`).join("");

		let notebookModalHtml = ""
		notebookModalHtml +=
		`
		<div class="modal-content">
		<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal">&times;</button>
		<h3 class="modal-title">${this.notebook_title}</h3>
		</div>
		<div class="modal-body">
		${notes}
		</div>
		</div>
		</div>
		`
		return notebookModalHtml
	};

};
