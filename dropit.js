function dropElements(arr, func) {
    
    
    for (let i = 0; i < arr.length; i++){
      
        if (func(arr[i])) {
          
           return arr.slice(arr.indexOf(arr[i]));
          
        }

    };
  
    
};
  
 console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  