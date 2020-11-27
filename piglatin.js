function translatePigLatin(str) {
    
//let vocales = /^[aeiou]+/
let consonantes = /^[bcdfghjklmnpqrstvwxys]+/
let theEnd;
let aArray = str.split('');

    if(consonantes.test(str)){
     theEnd = str.match(consonantes).join('')
    return aArray.splice(theEnd.length).concat(theEnd + 'ay').join('');
    
    }else{
       // return str + 'way';
    }

    //"artzschway"

   // return theEnd.length;

  };
  
  console.log(translatePigLatin("schwartz"));