function steamrollArray(arr) {
   
   return arr.reduce((acc, el) => {
        
       if (!Array.isArray(el)) {
           acc.push(el)
       }
       else {
           acc.concat(steamrollArray(el))
       }
    }, [])
};
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));