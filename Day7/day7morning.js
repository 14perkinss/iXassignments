//window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		var first = $("#firstname").val();
		var last = $("#lastname").val();
		console.log(first + " " + last);
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		$("#color-div").css('color', 'cyan');
	}