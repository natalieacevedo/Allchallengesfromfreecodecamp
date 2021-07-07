function uniteUnique(arr) {
  let seen = {};
    
  return Array.from(arguments).reduce((acc, el) => {
    // el is an array
    el.forEach(n => {
      if (!seen[n]) {
        acc.push(n);
        seen[n] = true;
      } 
    })
    return acc;
  }, []);
}
  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1], [3,2]));