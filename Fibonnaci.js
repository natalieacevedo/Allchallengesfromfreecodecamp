function sumFibs(num) {
    
    let twoFirst = [1, 1];

    for (let i = num; i >= twoFirst[0] + twoFirst[1];){

        twoFirst.unshift(twoFirst[0] + twoFirst[1])            
    }
  
    final = twoFirst.reverse().filter(el => el % 2 !== 0).reduce((acc, el) => acc + el);
    return final;
}
  
console.log (sumFibs(75025));
  