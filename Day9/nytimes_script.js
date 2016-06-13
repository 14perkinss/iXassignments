$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?api-key=d1ab3881d902443ebea6ed6b8a803b34" + "&q="
  $("#search-bar").keyup(function(e) {
    if(e.which === 13) {
      console.log("here");
      var search = $("#search-bar").val();
      url += search;
      $.ajax({
        url: url,
        method: "GET",
        success: handleResponse,
        error: function(error) {
          alert("error!");
        }
      });
    $("#search-bar").val("");
    }
  });
});

function handleResponse(response) {
  //Show all titles
  for (var i = 0; i < response.response.docs.length; i++) {
    var newArticle = $("<li class=article></li>").html(response.response.docs[i].headline.main);
    $("#list").append(newArticle);
  }
}