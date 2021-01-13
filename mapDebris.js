function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    let t = 2 * Math.PI;
    
    return arr.map(ele => {
        let r = earthRadius + ele.avgAlt
        let sq = Math.sqrt(r**3/GM);
        
        return {name :ele.name, orbitalPeriod : Math.round(t*sq) }

    });

};


console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));


//T = 2*pi*sqrt(r^3/GM)

//where r = earthRadius + avgAlt, which is the distance from midpoint
//of the earth to the object, and T = Orbital Period
