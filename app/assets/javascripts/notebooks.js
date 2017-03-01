// $(function(){
// 	$(".js-next").on('click', function(){
//     var nextId = parseInt($(".js-next").attr("data-id")) + 1;
//     $.get('/notes/' + nextId + ".json", function(data){
//       $(".noteTitle").text(data["note"]["note_title"]);
//       $(".noteContent").text(data["note"]["note_content"]);
//       $(".js-next").attr("data-id", data["note"]["id"]);
//       loadNotes(data);
//     });
//   });

// });


// function bar(a, b){
// 	console.log(a, b)
// }

// bar(1,2)


// var = foo () => console.log(a, b)

// bar (1, 2)
// foo (3, 4)


// var a = [1,2,3,4,5]

// var b = a.map(function(x){
// 	return x * 2
// })
// //var c is the same as var b

// var c = a.map(y => y * 2)
// console.log(c)

// var controller = {
// 	bindListener: function(){

// 	},
// }
// <button name="button" type="submit" class="js-prev" data-id="${this.id}">Previous Note</button>
//               <a class="button" href="/notes/${this.id}/edit">Edit</a>
//               <a class="button" href="/notes/new">Done</a>
//               <a data-confirm="Are you sure?" class="button" rel="nofollow" data-method="delete" href="/notes/${this.id}">Delete</a>
//               <button name="button" type="submit" class="js-next" data-id="${this.id}">Next Note</button>
//               <h4 id="status-list">Comments</h4>
//               <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xuLYlgLsNqyZDQIivpLQdZwA/EMeZT4ZLOSWkDCO7xLcK3WWml8i6ntK5HVP5e0/Gtl3seG6hYH6DdfOmPqPAQ==">
//               <input type="text" name="comment[content]" id="comment_content">
//               <input value="${this.id}" type="hidden" name="comment[note_id]" id="comment_note_id">
//               <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
//               </form>