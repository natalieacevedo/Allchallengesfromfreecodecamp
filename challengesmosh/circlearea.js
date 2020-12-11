
let circle = {

    radius: 2,
    get area (){
        return Math.PI * this.radius * this.radius;
    }


};

circle.radius = 1;
console.log(circle.area);