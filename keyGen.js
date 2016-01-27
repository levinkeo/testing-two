var kB = [];
var topRow = ["\`",1,2,3,4,5,6,7,8,9,0,"\-","\=","BACKSPACE"];
var letters = ["TAB","q","w","e", "r", "t", "y", "u", "i", "o", "p", "\[", "\]", "\\","CAPS", "a","s","d","f","g","h","j","k","l","\:","\'","RETURN","SHIFT","z","x","c","v","b","n","m","\,","\.","\/","RSHIFT"];
var bottomRow = ["CTRL","OPT","CMD", "SPACE", "RCMD","ROPT","RCTRL"];

for (var i = 0; i <= topRow.indexOf("BACKSPACE"); i++){
  $('.kB1').append("<div class='tile-key noselect tile-key-" + topRow[i] + "'>" + topRow[i] + 
"</div>");
}
for (var i = 0; i<letters.indexOf('CAPS'); i++){
  $('.kB2').append("<div class='tile-key noselect tile-key-" + letters[i] + "'>" + letters[i] + 
"</div>");
};
for (var i = letters.indexOf('CAPS'); i<letters.indexOf('SHIFT'); i++){
  $('.kB3').append("<div class='tile-key noselect tile-key-" + letters[i] + "'>" + letters[i] + 
"</div>")
};
for (var i = letters.indexOf('SHIFT'); i<letters.indexOf('RSHIFT')+1; i++){
  $('.kB4').append("<div class='tile-key noselect tile-key-" + letters[i] + "'>" + letters[i] + 
"</div>")
}
for (var i=bottomRow.indexOf('CTRL'); i <= bottomRow.indexOf('RCTRL'); i++) {
  $('.kB5').append("<div class='tile-key noselect tile-key-" + bottomRow[i] + "'>" + bottomRow[i] + 
"</div>")
}

 $( "div.tile-key:contains('undefined')" ).css( "background-color", "red" );

/*for (var i = 0; i < kB.length) {
  
}*/