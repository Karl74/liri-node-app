function tweet() {
  var theKeys = require("./keys.js");

  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: 'SrTf2xShu4lxSRO3NfCQrTgnx',
    consumer_secret: 'HR1sO5p6uZgh68k1ZGBYbxtCTczWG5sstALMIbBhpN6cYxmFlp',
    access_token_key: '3266126256-fb7v1oniriJkX1sP8QUZOml0jYO3MhhVNpxAnyR',
    access_token_secret: 'sBkzlp9Et7Kolz1TKO90Ma4M9Ti92kVs6PrmcQsPLoTNO'
  });

  var params = { screen_name: 'Karl7422' };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) { }
    for (i = 0; i < tweets.length; i++) {
      console.log("Tw " + [i] + ": " + tweets[i].text);
    }

  });
}
//===================================================================================================
function spoty() {
  var inquirer = require("inquirer");

  inquirer.prompt([
    {
      type: "input",
      name: "song",
      message: "What song would you like?"
    }
  ]).then(function (user) {

    var song = user.song;

    var spotify = require('spotify');
    spotify.search({ type: "track", query: song }, function (err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
      }

      var artist = JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2);
      var preview = JSON.stringify(data.tracks.items[0].preview_url, null, 2);
      var album = JSON.stringify(data.tracks.items[0].name, null, 2);
      console.log(artist);
      console.log(album);
      console.log(preview);
    });
  });


}//end of spoty

//======================================================================================================
function movies() {

  var inquirer = require("inquirer");

  inquirer.prompt([
    {
      type: "input",
      name: "movie",
      message: "What movie would you like?"
    }
  ]).then(function (user) {

    var movie = user.movie;
    var request = require('request');

    request.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json", function (err, response) {

      var data = JSON.parse(response.body);
      var movieInfo = {
        title: data.Title,
        year: data.Year,
        IMDB: data.Ratings[0].Value,
        country: data.Country,
        language: data.Language,
        plot: data.Plot,
        actors: data.Actors,
        RTRaitings: data.Ratings[1].Value
      }
      console.log(movieInfo);
    });
  });
}
//========================================================================================================

var inquirer = require("inquirer");
inquirer.prompt([

  {
    type: "list",
    name: "command",
    message: "How can I help you?",
    choices: ["my-tweets", "spotify-this-song", "movie-this"]
  }
]).then(function (user) {
  switch (user.command) {
    case "my-tweets":
      tweet();

    case "spotify-this-song":
      spoty();

    case "movie-this":
      movies();

  }
});


