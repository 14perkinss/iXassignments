$(document).ready(function() {
	var clickcount = 0;

	$(document).click(function() {
		clickcount++;
		$("span").text(clickcount);
	});

	$(document).keyup(function(event) {
		if(event.which === 71) 
			$("body").css("color", "green");
		if(event.which === 66) 
			$("body").css("color", "blue");
		
	});
	var box = $("div").css({
		"height": "30px",
		"width": "30px",
		"position": "absolute",
		"border": "1px solid black"
	});

	var xCoord = 0;
	var yCoord = 0;

	$(document).on('mousemove', function(e){
	   moveBox(xCoord, yCoord);
	   xCoord = e.pageX;
	   yCoord = e.pageY;
	});


});


function moveBox(xCoord, yCoord) { 
	$("#box").css({
      left:  xCoord,
      top:   yCoord
   	});
}