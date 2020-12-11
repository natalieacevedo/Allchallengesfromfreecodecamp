function sum() {
    
    let argumentos = Array.from(arguments);

   
    return argumentos.reduce((acc, el) => {

        if (Array.isArray(el)) {
            return acc + el.reduce((acc, el) => acc + el)
        }           
        return acc + el;

    }, 0);


};

console.log(sum(7, 8, 2, 6, [1, 2,4, 5]));