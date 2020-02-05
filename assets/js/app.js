//Adding click event listen listener for our games-buttons
$("button").on("click", function() {
  // Empty the gifs div
  $("#gifs-appear-here").empty();
  //Grabbing and storing the data-games property value from the button
  var games = $(this).attr("data-game");
  //Constructing our giphy API URL for game image
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=nUwSI3143rSkwqYlpdrMApoKKNwUeGQB&rating=g&limit=12&q=" +
    games;

  //Performing an AJAX URL request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    //After the data from the AJAX request comes back
    .then(function(response) {
      console.log(queryURL);

      //Storing the data from the AJAX request in the reaults variable
      var results = response.data;

      //Looping through each reault item
      for (var i = 0; i < results.length; i++) {
        //Creating and storing a div tag
        var gameDiv = $("<div>");
        gameDiv.addClass("col-12 col-sm-6 col-md-4 col-lg-3");

        //Creating a paragraph tag with the result item's rating
        var P = $("<P>").text("Rating: " + results[i].rating);

        //Creating and storing an image tag
        var gameImage = $("<img>");
        gameImage.on("click", clickedGif);

        //Giving the image tag an src attribute of a property pulled
        //off the result item
        gameImage.attr("src", results[i].images.fixed_height_small_still.url);
        gameImage.attr("data-src", results[i].images.fixed_height_small.url);
        gameDiv.append(gameImage, P);

        $("#gifs-appear-here").append(gameDiv);
      }


          //Saving the image src attribute to image URL
     var imageUrl = response.data.image_progonal_url;

     //Setting the image src attribute to image URL

     gameImage.attr("scr", imageUrl);

    rouletteImage.attr("alt", "roulette image");
    crapsImage.attr("alt", "craps image");

    //Prepending the image to the images div
     $("#images").prepend(rouletteImage);
    $("#images").prepend(crapsImage);

    //Prepending the image to te images div
     gameDiv.append(p);
    gameDiv.append(gamesImage);

    //Prepending the givDiv to the "#gifs-appear-here" div in the HTML
    $("#gifs-appear-here").prepend(gameDiv);
    });
});

function clickedGif() {
  var src = $(this).attr("src");
  var storedSrc = $(this).attr("data-src");
  $(this).attr("src", storedSrc);
  $(this).attr("data-src", src);
}

// Then dynamicaly generating buttons for each game in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
   var a = $("<button>");
// Adding a class of movie-btn to our button
   a.addClass("game-btn");
// Adding a data-attribute
   a.attr("data-name", game[i]);
// Providing the initial button text
  a.text(game[i]);
// Adding the button to the buttons-view div
  $("#buttons-view").append(a);


        
      
    