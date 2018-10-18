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
      console.log(name);
      var drinkDiv = $("<div>");

      var p = $("<p>").text("Drinks" + name);
      drinkDiv.append(p);
      $(".breweries-go-here").append(drinkDiv);
    }

  });


  


}

$("#add-topic").on("click", function () {
  event.preventDefault();

  var drink = $("#topic-input").val().trim();

  getDrinks(drink);





})