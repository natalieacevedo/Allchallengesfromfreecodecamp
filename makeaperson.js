var Person = function(firstAndLast) {
    let nombreCompleto = firstAndLast;
      
      this.getFullName = function () {
        return nombreCompleto;
      };
      
      this.getFirstName = function () {
          let first = nombreCompleto.split(' ')[0];
          return first;
      };
      
      this.getLastName = function () {
          let apellido = nombreCompleto.split(' ')[1];
          return apellido;
      };
  
      this.setFullName = function (firstAndLast) {
           nombreCompleto = firstAndLast;
      };
  
      this.setFirstName = function (first) {
          nombreCompleto = `${first} ${nombreCompleto.split(' ')[1]}`; 
      
      };
  
      this.setLastName = function (last) {
          nombreCompleto = `${nombreCompleto.split(' ')[0]} ${last}`
      }
  
  
  
  };