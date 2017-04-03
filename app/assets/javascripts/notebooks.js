$(function(){
	deleteNotebook();
});


function deleteNotebook() {

	$(document).on("click", ".delete_notebook", function(){ 
	const id = $(this).data("id"); 
	/// grab the data-id attribute
	
	fetch(`/api/notebooks/${id}`)
		method: 'delete'
	.then(res => res.json())
   .then(data => renderNotebookDelete(data.id))
   .catch(err => console.log(err))
	})
}


// query for all delete_notebook buttons // should return an array of all buttons
// iterate over the array of buttons and attach an event listener to each one
function renderNotebookDelete(data){

	document.querySelectorAll(".delete_notebook").forEach(notebook => notebook.addEventListener('click', deleteNotebook))
}


function Notebook(id,title,content,user){
	this.id = id
	this.notebook_title = title
	this.notebook_content = content
	this.user = user
};

// function deleteNotebookData(notebook){
// 	const newNotebook = new Notebook(notebook.id, notebook.notebook_title, notebook.notebook_content, notebook.user)
// }

// Notebook.prototype.formatNotebookIndex = function(){
// 	let notebookHtml = ""
// 	noteHtml +=
// 	`
// 	<div class="delete">
//           <div id=""> = <a href="/notebooks/1/edit">Edit</a>
//            <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/notebooks/1">Delete</a>
//            </div>
//          </div>
// }