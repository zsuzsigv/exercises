// Exercise No. 2

function encode(text) {
text = text.toLowerCase().split('');
var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split('');
text = text.map( function(x) {
if (alphabet.indexOf(x) == -1) {
return x;
} // checking if symbol of text is in the alphabet
	var count = 0;
  text.forEach( function(e) { // counting amount of occurences of the first symbol in the whole text
  if (e === text[0]) {
  count++;
  }
  });
 x = alphabet[alphabet.indexOf(x) + count]; // shifting 
 return x;
});
text = text.join(''); // making a string from array without commas
return text;
}
console.log(encode("zoo"));
