function palindrome(str) {
    
   
    
    let regular = /[0-9a-z]/gi;

    let nosymbols = str.toLowerCase().match(regular);

    let empty = [];

    for (let i = nosymbols.length-1; i >= 0; i--){

        empty.push(nosymbols[i]);
    }

   return empty.join('') === nosymbols.join("");
    
};


console.log(palindrome('_eye'));
  