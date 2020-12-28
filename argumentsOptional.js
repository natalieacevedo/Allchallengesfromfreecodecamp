function addTogether() {
    let acumula = 0;
    let todos = [...arguments];

    for (let item of todos) {
        if (typeof item !== 'number') {
            return undefined
         
        } else if (todos.length === 1) {
            return function (elemento) {
                return item + elemento;
            }
        
        } else {
            acumula += item;
        }
    }

    return acumula;


  }
  
  console.log(addTogether(2)(3));
//let nuevito = addTogether(3);

//console.log(nuevito(2));