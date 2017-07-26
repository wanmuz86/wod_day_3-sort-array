function sortArray(num){
  
  num.sort();
  var first = num[0];
  
  for(var i = 0; i<num.length; i++){
    
    if(first == num[i+1]){
      return true;
    }
  }return false;
  
}
document.write(sortArray([1,2,3,4,5,0]));