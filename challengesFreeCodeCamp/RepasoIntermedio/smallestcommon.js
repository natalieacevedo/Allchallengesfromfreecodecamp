/*

Smallest Common MultiplePassed

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


*/

function smallestCommons(arr) {

    let ordenado = arr.sort((a, b) => a - b);

    
    let final = ordenado[1];

    
    for (let i = ordenado[1]-1; i >= ordenado[0]; i--){
        if (final % i !== 0) {
            final *= i;
            // final += ordenado[1];
            // i = ordenado[1];
        }

    }
    
    return final;
  }
    
 console.log (smallestCommons([1,5]));

  