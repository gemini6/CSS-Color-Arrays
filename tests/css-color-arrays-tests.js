 // css-color-arrays-tests.js

// Counts the given array and returns either the zero or non-zero 
// based index count. 
function count(arr, zero_based) {
	var count = undefined;
	for(var index = 0; index <= arr.length; index++) {
		count = index;
	}
	if(zero_based) {
		return count;
	} else if(!zero_based) {
		return (count + 1);
	} else {
		return count;
	}
}



