$(document).ready(function() {
	$("#todo-input").keyup(function(event) {
		if(event.which === 13) {
			addToList($("#todo-input").val());
			$("#todo-input").val("");
		}
	});

	$("#list-item").click(function() {
		console.log("hello");
		removeItem(this);
	});


});

function addToList(value) {
	var liElem = $("<li id=list-item>").html(value);
	$("#list").append(liElem);
}

function removeItem(value) {
	$(value).remove();
}