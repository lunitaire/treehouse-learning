function SpokenWord(title, artist, duration, style) {
  Media.call(this, title, duration);
  this.artist = artist;
  this.style = style;
}

SpokenWord.prototype = Object.create(Media.prototype);

SpokenWord.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying){
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString +=  this.title;
  htmlString += ' - ';
  htmlString +=  this.artist;
  htmlString += ', Style: ';
  htmlString += this.style;
  htmlString += '';
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>'
  return htmlString;
};
