
//mi primera solucion
function pairElement(str) {
  
    let strand ={
      "A" : "T",
      "C" : "G"
    };
  let arrayicito  = str.split('');
  
  return arrayicito.map(el => {
  
    for(let [key, value] of Object.entries(strand)){
    
      if(el === key){
    
      return [key, value];
    
    }else if(el === value){
  
      return [value, key]
    }
  }
  });
   
  };
  //mi segunda solucion

  function pairElement(str) {
  
    let strand ={
      "A" : "T",
      "C" : "G"
    };
  let arrayicito  = str.split('');
  
  return arrayicito.map(el => {
  
    for (let [key, value] of Object.entries(strand)) {
      if (el === key) {
      
    
      return [key, value];
    
    }else if(el === value){
  
        return [value, key]
        
    }
  }
  });
   
  };
  