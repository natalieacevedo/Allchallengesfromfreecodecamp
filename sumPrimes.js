function sumPrimes(num) {
    
    let isPrime;
    let primes = [];

    for (let i = 2; i <= num; i++){
        isPrime = true;
        for (let j = 2; j < i; j++){
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;




    
    
    
};
  
console.log(sumPrimes(10));
  