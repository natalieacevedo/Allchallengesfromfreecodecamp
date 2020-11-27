function myReplace(str, before, after) {
   
    let theRest = after.slice(1);
   
    function matcha(match){
        return match[0] === match[0].toUpperCase() ? after[0].toUpperCase() + theRest : 
        after[0].toLowerCase() + theRest;
    }
   
   
    return str.replace(before, matcha);
  }
  
 console.log (myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  