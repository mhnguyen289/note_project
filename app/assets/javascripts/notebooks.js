// $(function(){
// 	notebookModel();
// });

function Notebook(id,title,content,user,notes){
	this.id = id
	this.notebook_title = title
	this.user = user
	this.notes = notes
};

// // function renderNotebooks(notebook){	

// // 	notebook.notes.forEach(data => toggleNotebookData(data))
// // }
// // // function deleteNotebook() {

// // // 	$(document).on("click", ".delete_notebook", function(){ 
// // // 	const id = $(this).data("id"); 
// // // 	/// grab the data-id attribute

// // // 	fetch(`/api/notebooks/${id}`)
// // // 		method: 'delete'
// // // 	.then(res => res.json())
// // //    .then(data => renderNotebookDelete(data.id))//delete from dom
// // //    .catch(err => console.log(err))
// // // 	})
// // // }
function toggleNotebookData(data){
	const notebook = new Notebook(data.id, data.notebook_title, data.user, data.notes)
	const formatNotebookIndex = notebook.renderNotebookModal()
	$(".modal-content").replaceWith(formatNotebookIndex)
}

function notebookModel(){
	$(document).on("click",".notebook", function(e){
		e.preventDefault();
		const id = $(this).data("id");
		fetch(`/api/notebooks/{id}`)
		.then(res => res.json())
		.then(notebook => toggleNotebookData(notebook))
		.catch(err => console.log(err))
	});

	Notebook.prototype.renderNotebookModal = function(){
		// const notes = Notebook.notes.map(note => `
		// 	${note.note_title}`);
		let notebookModalHtml = ""
		notebookModalHtml +=
		`
		<div class="modal-content">
		<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal">&times;</button>
		<h4 class="modal-title">${this.notebook_title}</h4>
		</div>
		<div class="modal-body">
		<p>${this.notes}</p>
		</div>
		<div class="modal-footer">
		
		</div>
		</div>
		</div>
		</div>
		</div>
		`
		return notebookModalHtml
	};

// };
// // <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
// // // query for all delete_notebook buttons // should return an array of all buttons
// // // iterate over the array of buttons and attach an event listener to each one
// // // function renderNotebookDelete(data){

// // // 	document.querySelectorAll(".delete_notebook").forEach(notebook => notebook.addEventListener('click', deleteNotebook))
// // // }



// // // function deleteNotebookData(notebook){
// // // 	const newNotebook = new Notebook(notebook.id, notebook.notebook_title, notebook.notebook_content, notebook.user)
// // // }

// // // Notebook.prototype.formatNotebookIndex = function(){
// // // 	let notebookHtml = ""
// // // 	noteHtml +=
// // // 	`
// // // 	<div class="delete">
// // //           <div id=""> = <a href="/notebooks/1/edit">Edit</a>
// // //            <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/notebooks/1">Delete</a>
// // //            </div>
// // //          </div>
// // // }