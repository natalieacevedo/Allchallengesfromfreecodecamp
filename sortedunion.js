function uniteUnique(arr) {
    
  let arrayDeArrays = Array.from(arguments).flat();
    
  return arrayDeArrays.reduce((acc, el) => {

    if (acc.indexOf(el) === -1) {
      
      acc.push(el);
    }
    return acc;

  }, []);
}
  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1], [3,2]));