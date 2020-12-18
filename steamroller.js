function steamrollArray(arr) {
    
    let vacio = [];
    for (let i = 0; i < arr.length; i++){
        if (!Array.isArray(arr[i])) {
            vacio.push(arr[i])
        }
        else {
        
            for (let j = 0; j < arr[i].length; j++){
                vacio.push(arr[i][j]);

                if (Array.isArray(arr[i][j])) {
                    vacio.concat(arr[i][j]);
                }
            }
           // vacio.concat(arr[i]);
        }
    }
  
   return vacio;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));