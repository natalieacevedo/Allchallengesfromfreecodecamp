function addTogether() {
    
    let argumentos = Array.from(arguments);

    if (argumentos.length === 2) {
        return argumentos.reduce((acc, el) => {
            if (typeof el === 'number' && typeof acc === 'number') {
                return acc + el; 
            } else {
                return undefined;
            }
        })
    
    } else if(typeof argumentos[0] !== 'number' ){
        return undefined
    
    } else {
        return function (num) {
            if (typeof num === 'number') {
                return argumentos[0] + num;
            } else {
                return undefined;
            }
        }
    }




  }
  
  //console.log(addTogether(9,'5'));
let nuevito = addTogether(3);

console.log(nuevito(2));