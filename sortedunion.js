function uniteUnique(arr) {
    
    let arrayDeArrays = Array.from(arguments);
    
    let vacio = [];
 
    let reduciendo = arrayDeArrays.reduce((acc, el) => { //[ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
     return acc.concat(el);
    },[ ])
    
    for (let i = 0; i < reduciendo.length; i++){
        let reductora = reduciendo.indexOf(reduciendo[i]);

        if (reductora === i) {
            vacio.push(reduciendo[i]);
        }
    }
   
    return vacio;
}
  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1], [3,2]));