/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20 


function positiveSum(arr) {
  
}

*/

function positiveSum(arr) {
	for (var i=0, count = 0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
		}
	}
	return count;
}

var anArray = [1,-4,7,12]

positiveSum(anArray)
