function checkCashRegister(price, cash, cid) {
    
    let finalObj = {
        status,
        change: 0
    };

    let values = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ].reverse();

    let verdades = false;
    let i;
    
    let fin = [];
    let backwards = cid.reverse();
    
    let cambio = cash - price;
    console.log(cambio);
    let totalCid = cid.reduce((acc, el) => (acc + el[1]), 0);

    if (totalCid < cambio) {
        finalObj.status = "INSUFFICIENT_FUNDS";
        finalObj.change = [];
        return finalObj;
        
    } else if (totalCid === cambio) {
        finalObj.status = 'CLOSED';
        finalObj.change = cid;
        return finalObj;
   
    } else {
       
        for (i = 0; i < backwards.length; i++) {
            let restaBackwards = backwards[i][1];
            let segundoValor = 0;
            while (cambio >= restaBackwards && segundoValor < backwards[i][1]) {
                cambio -= values[i][1];
                segundoValor += values[i][1];
                restaBackwards -= values[i][1];
               
            }
            fin.push(segundoValor);
        }
    
       
    }
    return fin;
   
}

   
    




  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.//5], ["DIME", 0.2], ["PENNY", 0.04]]}.