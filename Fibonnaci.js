function sumFibs(num) {
    
    let first = [1, 1];

    for (let i = first[first.length - 2] + first[first.length - 1]; i <= num; i = first[first.length - 2] + first[first.length - 1] ){
        //console.log(i);
        first.push(i)
    }
    return first.filter(el => el % 2 !== 0).reduce((el, acc) => el + acc);
   
}
  
console.log (sumFibs(10));
  