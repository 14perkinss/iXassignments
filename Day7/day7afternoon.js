

// change the color of the text in the div with class "color-div" to red
function changeColor() {
  $( ".color-div" ).css( "color", "red" );

}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
	$(".add-div").append("blue");
}

// add a title to the page
function addTitle() {
  //var title = $("<h1></h1>").text("Old Title");
  $(".title-div").html("<h1>Old Title</h1>");
}

// alert the text in the selected item of the dropdown
function getSelected() {
  var selected = $("#selector option:selected").text();
  alert(selected);
}

// change the title to be "New Title"
function changeText() {
  //var title = $("<h1></h1>").text("New Title");
  $(".title-div").html("<h1>New Title</h1>");
}

$(document).ready(function() {

  addToDiv();
  addTitle();

  $('.the-button').click(function(){ 
    changeColor();
	});

  $('.get-selected').click(function(){
    getSelected();
  });

  $('.text-changer').click(function(){
    changeText();
  });


  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
    $(".clicked-id").text("you clicked on id: " + $(e.currentTarget).attr("id"));
  });

});