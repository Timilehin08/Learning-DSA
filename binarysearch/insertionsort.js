var insert = function(array, rightIndex, value) {
  //Write this method
  for (var i = 0; i < array.length; i++){
     if (array[i] == value)
         array.splice(i, 1);
  }
  
  
  for (var i = 0; i < rightIndex; i++){
      if (value<array[i]){
        array.splice(i, 0, value);
        break;      
      }
   }
};
