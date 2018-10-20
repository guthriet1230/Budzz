console.log("this is test.js");




//var token = '1'
var cocktail_search_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'
function clientCallback() {
  console.log('made it to the client callback')
}



//var drinkChoice = 'beer'

//getDrinks(drinkChoice);


function getDrinks(drink) {

  var requestObjt = {
    'url': cocktail_search_url,
    'data': { s: drink },
    //headers:{
    //'Authorization': token,
  }

  $.ajax(requestObjt).done(function (response) {
    console.log(response);

    var results = response.drinks;
    console.log(results);

    for (i = 0; i < results.length; i++) {
      var name = results[i].strDrink;
      //var in
      console.log(name);
      var drinkDiv = $("<div>");

      var p = $("<li>").text(name);
      drinkDiv.append(p);
      $("#drink-list").prepend(drinkDiv);
    }

  });


  


}

$("#add-topic").on("click", function () {
  event.preventDefault();
  console.log("i clicked this buton");
  

  var drink = $("#topic-input").val().trim();

  $("#topic-input").val("");

  getDrinks(drink);
  initMap(drink);


})