//This is for points-project.js
var profile = require("./points-project.js");
//console.dir(process.argv);
//var users = process.argv.slice(2);
var users = ["chalkers", "atrianwagner", "nickpettit", "davemcfarland"];

users.forEach(profile.get);
