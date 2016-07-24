//Problem: We need a simple way to look at a user's badge count and Javascript points.
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out.
var https = require("https");
var username = "atrianwagner";

//Print out message
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

//Print out error messages
function printError(error){
    console.error(error.message);
}

//Connect to the API URL. (https://teamtreehouse.com/username.json)

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
    //console.log(response.statusCode);
    var body = "";

//Read the data.

    response.on('data', function(chunk) {
        body += chunk;
    });
    response.on('end', function(){
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
    });

//Parse the data.
//Print the data out.

});


//Connection Error
request.on("error", printError);


//Extras: jsonprettyprint.com
