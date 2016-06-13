$(document).ready(function() {

	$("#todo").keyup(function(e) {
		if(e.which === 13) {
      var item = $("#todo").val();
      var listItem = $("<li></li>").text(item);
      $(listItem).attr("id", "list-item");
      $("#list").append(listItem);
      $("#todo").val("");
    }
	});

  $("#list-item").click(function(event) {
    removeItem(event.currentTarget);
  });

});

function removeItem(item) {
  $(item).remove();
}