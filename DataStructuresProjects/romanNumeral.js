function convertToRoman(num) {

    let romanos = new Map()
    romanos.set(1000, 'M')
    romanos.set(900, 'CM')
    romanos.set(500, 'D')
    romanos.set(400, 'CD')
    romanos.set(100, 'C')
    romanos.set(90, 'XC')
    romanos.set(50, 'L')
    romanos.set(40, 'XL')
    romanos.set(10, 'X')
    romanos.set(9, 'IX')
    romanos.set(5, 'V')
    romanos.set(4, 'IV')
    romanos.set(1, 'I')

    let final = ''; 
    
    for (let [key, value] of romanos) {
       //let cadena = num.toString();
       // let resta;
        //let igual = num;
        
         while(num >= key)  {
            final += romanos.get(key);
            num -= key;

        }
        
    }
    return final;
};
    
//cadena.length === 1 && 
console.log(convertToRoman(10));