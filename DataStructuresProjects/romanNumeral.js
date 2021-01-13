function convertToRoman(num) {

    let romanos = {
        1: 'I',
        4:'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    for (let i in romanos) {
        let cadena = i.toString();
        if (num <= i * 3 && cadena.length === 1) {
            return romanos[i].repeat(num);
       
        } else if (num > i * 3 && cadena.length === 1) {
            return `${romanos[i]}${romanos[num + 1]}`
        
        } else if ((num > i + 1 || num > i + 2 || num > i + 3) && cadena.length === 1) {
            return `${romanos[num - 3]}${romanos[0].repeat(3)}`
        }

    }

};




console.log(convertToRoman(4));