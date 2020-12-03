function fearNotLetter(str) {


  let vacio = [];
  let index = str.length - 1;

  for (let i = str.charCodeAt(0); i <= str.charCodeAt(index); i++){

    vacio.push(i);
    
  }
  let allLetters = vacio.map(el => String.fromCharCode(el));

 let theMissingOne = allLetters.filter(item => str.indexOf(item) === -1).join('');

  return theMissingOne ? theMissingOne : undefined;


  let all = "abcdefghijklmnopqrstuvwxyz";

  let beginning = all.indexOf(str[0]);

  let end = all.indexOf(str[str.length - 1]) + 1;
  
  let portion = all.slice(beginning, end);

  let ending = Array.from(portion).filter(el => str.indexOf(el) === -1).join('  ');

  //return ending ? ending : undefined;
  
}
  
  console.log(fearNotLetter("abcdefghjklmno"));
  