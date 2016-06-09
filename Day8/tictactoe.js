$(document).ready(function() {
	var clickCount = 0; //change this strategically!
	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		$(e.currentTarget).css({
			"font-size": "36px", 
			"text-align": "center", 
			"vertical-align": "middle" 
		});
		if (clickCount % 2 === 0) {
			$(e.currentTarget).html("X");
		}

		else $(e.currentTarget).html("O");
		clickCount++;
	});
});