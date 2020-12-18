function steamrollArray(arr) {
    
    let vacio = [];
    for (let i = 0; i < arr.length; i++){
        if (!Array.isArray(arr[i])) {
            vacio.push(arr[i])
        }
        else {
        steamrollArray(arr[i]);
           // steamrollArray(arr[i]);
            
        }
    }
  
   return vacio;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));