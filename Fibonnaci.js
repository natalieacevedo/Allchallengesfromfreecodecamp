function sumFibs(num) {
    
    let finalArray = [1, 1];
    

    do {
        
        finalArray.push(finalArray[finalArray.length - 2] + finalArray[finalArray.length - 1])

    }
    while (finalArray[finalArray.length -2] + finalArray[finalArray.length -1]  <= num);

    return finalArray.filter(el => el % 2 !== 0).reduce((acc, el) => acc + el);
   
}
  
console.log (sumFibs(10));
  