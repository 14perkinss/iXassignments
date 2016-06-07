//window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		var first = document.getElementById("firstname").value;
		var last = document.getElementById("lastname").value;
		console.log(first + " " + last);
		return;
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		document.getElementById("color-div").style.color = "red";
	}