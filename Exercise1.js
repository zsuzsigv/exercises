// Exercise No. 1

function oddsSum(array) {
var sum = 0;
var i = 0;
array.forEach( function(element){
  if (element % 2 != 0) {
  	sum += element;
    i++;
  }
  });
var result = sum/i;
return result;
}
var summary = oddsSum([1,2,3,4,5,6,17])
console.log(summary);