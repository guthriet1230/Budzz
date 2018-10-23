//var token = '1'
var cocktail_search_url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
function clientCallback() {
  console.log("made it to the client callback");
}

//var drinkChoice = 'beer'

//getDrinks(drinkChoice);

function getDrinks(drink) {
  var requestObjt = {
    url: cocktail_search_url,
    data: { s: drink }
    //headers:{
    //'Authorization': token,
  };

  var gif = $("<img>").attr(
    "src",
    "https://media.giphy.com/media/k61nOBRRBMxva/giphy.gif"
  );

  $.ajax(requestObjt).done(function(response) {
    console.log(response);
    var results = response.drinks;

    if (response.drinks === null) {
      console.log("NO RESULTS");
      $(".error").text("No results");
      $("#drink-list").append(gif);
    } else {
      for (i = 0; i < results.length; i++) {
        var name = results[i].strDrink;
        var drinkDiv = $("<div>");
        var p = $("<li>").text(name);
        drinkDiv.append(p);
        $("#drink-list").prepend(drinkDiv);
      }
    }
  });
}

$("#add-topic").on("click", function(event) {
  event.preventDefault();
  // console.log("i clicked this buton");
  var input = $("#topic-input")
    .val()
    .trim();
  // console.log("THIS IS INPUT" + input);
  if (input === "") {
    $(".error").text("PLEASE INPUT A DRINK!");
  } else {
    $(".error").empty();
    $("#drink-list").empty();
    $("#topic-input").val("");
    getDrinks(input);
    initMap(input);
  }
});
