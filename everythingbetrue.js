function truthCheck(collection, pre) {
    let buleano;
    for (let a in collection) {
        buleano = true;
        if (!collection[a][pre]) {
            return false;
        }
    }
    return buleano;

};
  
 console.log (truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));