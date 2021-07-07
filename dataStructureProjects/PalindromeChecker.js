function palindrome(str) {
   

  let regular= /[a-z]/gi;
  /*
    str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;

  */
  
  let chosenOnes = str.match(regular).join('').toLowerCase();

  let numeroFinal = 1;
  for (let i = 0; i < chosenOnes.length; i++){

    if (chosenOnes[i] === chosenOnes[chosenOnes.length-numeroFinal]) {
      numeroFinal += 1;

    }


  }

  return numeroFinal - 1 === chosenOnes.length ? true : false;
    
};


console.log(palindrome("nope"));
  