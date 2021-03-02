let word = 'hello';
let output = letterChange(word);
console.log(output);

function letterChange(word){
        result = "";
        word.split("").forEach(letter =>{
         if(letter >= "a" && letter <= "z"){
             let num = letter.charCodeAt()+1;
             if(num >= 123) num -= 26;
             letter = String.fromCharCode(num);
             if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
                 letter = letter.toUpperCase();
             }
         }
        result += letter;
     })
     return result;
}
