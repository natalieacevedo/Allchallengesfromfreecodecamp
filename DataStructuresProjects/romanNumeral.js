function convertToRoman(num) {

    let romanos = new Map()
       romanos.set(1, 'I')
       romanos.set( 4,'IV') 
       romanos.set (5, 'V')
       romanos.set (9, 'IX')
       romanos.set (10, 'X')
       romanos.set (40, 'XL')
       romanos.set (50, 'L')
       romanos.set (90, 'XC')
       romanos.set (100, 'C')
       romanos.set (400, 'CD')
       romanos.set (500, 'D')
       romanos.set (900, 'CM')
       romanos.set(1000, 'M')
    
   return romanos.get(num);
    

   

};
    
    
    



console.log(convertToRoman(5));