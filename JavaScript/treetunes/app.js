var playlist = new Playlist();

var song0000001 = new Song("Don't Let The Bastards Grind You Down", "The Toasters", "2:48");
var song0000002 = new Song("Genghis Khan", "Miike Snow", "4:08");
var song0000003 = new Song("Shut Me Up", "Mindless Self Indulgence", "3:14");
var song0000004 = new Song("Bad Intentions", "Digital Daggers", "3:55");
var song0000005 = new Song("Must Be Dreaming", "Frou Frou", "4:29");
var song0000006 = new Song("Napal Baji", "Psy", "3:55");
var song0000007 = new Song("One More Time With Feeling", "Regina Spector", "4:02");
var song0000008 = new Song("Heaven Knows I'm Miserable Now", "The Smiths", "3:35");
var song0000009 = new Song("Raspberry Swirl", "Tori Amos", "4:13");
var song0000010 = new Song("Control", "Halsey", "3:37");
var song0000011 = new Song("Collision", "Jhameel", "4:06");
var song0000012 = new Song("The Greatest Invention", "Sim Gretina", "2:33");
var song0000013 = new Song("Frontier Psychiatrist", "The Avalanches", "4:20");

//var song000000_ = new Song(" ", " ", ":");

playlist.add(song0000001);
playlist.add(song0000002);
// Treehouse project named variables after song name and added them one by one. 
// I have named the variables in a pattern and will later create a for statement to add all of them in.


var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);
