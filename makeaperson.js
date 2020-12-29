var Person = function(firstAndLast) {
    this.firstAndLast = firstAndLast;
    
    this.getFullName = function () {
      return this.firstAndLast;
    };
    
    this.getFirstName = function () {
        let first = this.firstAndLast.split(' ')[0];
        return first;
    };
    
    this.getLastName = function () {
        let apellido = this.firstAndLast.split(' ')[1];
        return apellido;
    };

    this.setFullName = function (firstAndLast) {
         this.firstAndLast = firstAndLast;
    };

    this.setFirstName = function (first) {
        this.firstAndLast = `${first} ${this.firstAndLast.split(' ')[1]}`; 
    
    };

    this.setLastName = function (last) {
        this.firstAndLast = `${this.firstAndLast.split(' ')[0]} ${last}`
    }



  };
  
  var bob = new Person('Bob Ross');

bob.setFullName('haskell curry');

console.log(Object.keys(bob).length);
  

