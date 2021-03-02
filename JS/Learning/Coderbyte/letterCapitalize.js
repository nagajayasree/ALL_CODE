const string = 'java script';
const output = letterCapitalize(string);
console.log(output);

function letterCapitalize(string){
  var words = string.split(/ /);
  console.log(words);
  string = '';
  for (var i=0; i < words.length; i++) {
    var word = words[i][0].toUpperCase() + words[i].substring(1);
    if (string != '') string += ' ';
    string += word;
  }
  return string; 
         
}
