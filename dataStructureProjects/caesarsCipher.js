function rot13(str) {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    const alphabet = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));

    const conversion = [...str];
    let laMitad = alphabet.length / 2;
    

    let finalArray = conversion.map(el => {
      // console.log(alphabet[alphabet.indexOf(el) + 13]);
       if (alphabet.indexOf(el) < laMitad && alphabet.indexOf(el) !== -1) {
            //console.log(alphabet[alphabet.indexOf(el)])
            return alphabet[alphabet.indexOf(el) + laMitad]
        
        } else if (alphabet.indexOf(el) >= laMitad && alphabet.indexOf(el) !== -1) {
           return alphabet[alphabet.indexOf(el) - laMitad]//.join('');
        
        } else {
            return el;
        }
    });

    return finalArray.join('');
    
  }
  
  console.log(rot13("SERR YBIR?"));