function dropElements(arr, func) {
    
    for (let i = 0; i < arr.length; i++){
        while (!func(arr[i])) {
            arr.shift();
            
        }

    }
    
    return arr;
};
  
 console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));


 