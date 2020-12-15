function dropElements(arr, func) {
    
    let a = arr.filter(el => func(el));

    return a.length !== 0 ? arr.slice(arr.indexOf(a[0])) : [];

  
    
  }
  
 console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
  