// var theKeys = require("./keys.js");

// // console.log(theKeys);
// console.log(theKeys.myTest);
// console.log("===================================");
// console.log(theKeys.twitterKeys.consumer_key);

// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: 'SrTf2xShu4lxSRO3NfCQrTgnx',
//   consumer_secret: 'HR1sO5p6uZgh68k1ZGBYbxtCTczWG5sstALMIbBhpN6cYxmFlp',
//   access_token_key: '3266126256-fb7v1oniriJkX1sP8QUZOml0jYO3MhhVNpxAnyR',
//   access_token_secret: 'sBkzlp9Et7Kolz1TKO90Ma4M9Ti92kVs6PrmcQsPLoTNO'
// });
 
// var params = {screen_name: 'Karl7422'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     for( i = 0; i < tweets.length; i++){
// 	    console.log(tweets[i].text);
//     }
    	
//   }
// });


// var spotify = require('spotify');
 
// spotify.search({ type: "track", query: "survive" }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//     }
        
//         var artist = JSON.stringify(data.tracks.items[0].album.artists[0].name,null,2);
//  		var preview = JSON.stringify(data.tracks.items[0].preview_url,null,2);
//  		var album = JSON.stringify(data.tracks.items[0].name,null,2);
//         console.log(artist);
//         console.log(album);
//         console.log(preview);
// });

var request = require('request');

request.get("http://www.omdbapi.com/?t=The Notebook&y=&plot=short&r=json", function(err, response){

  var data = JSON.parse(response.body);
  console.log(data.Title);


});
  //   Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.
  // * Rotten Tomatoes Rating.
  // * Rotten Tomatoes URL.


  