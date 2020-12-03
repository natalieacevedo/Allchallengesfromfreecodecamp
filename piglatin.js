function translatePigLatin(str) {
    
//let vocales = /^[aeiou]+/
let consonantes = /^[bcdfghjklmnpqrstvwxys]+/
let theEnd;
let aArray = str.split('');

    if (consonantes.test(str))
                                              {
     theEnd =         
      str.match                             (consonantes).join('');
  return aArray.
                                                      splice(theEnd.length).concat(theEnd + 'ay').join('');
    
                                              } else
                                              {
     
    }

    //"artzschway"

   // return theEnd.length;

    console.log(3 + 3);

    console.log('hola');
  };
  
console.log(translatePigLatin("schwartz"));
  
document.get