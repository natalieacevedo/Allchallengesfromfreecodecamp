function smallestCommons(arr) {
    let smallToBig = arr.sort((a, b) => a - b);
    let i;
    let j;

    for (i = smallToBig[1] + smallToBig[1]; ; i += smallToBig[1]){
        let multiple = true;
       for (j = smallToBig[0]; j < smallToBig[1]; j++){
           if (i % j !== 0) {
               multiple = false;
               break;

           }
       }
       if (multiple) {
           return i;
       }
    }
   
  }
  
  
  console.log(smallestCommons([1,13]));
  