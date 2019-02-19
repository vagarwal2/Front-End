function reverse(array){
	for(var j=array.length-1;j>=0;j--){
		console.log(array[j]);
	}
}
reverse([3,5,2,6]);
function isUniform(array){
	var i=0;
	for(i=0;i<array.length-1;i++){
		if(array[i]!==array[i+1]){
			return false;
		}
	}
	if(i==array.length-1){
		return true;
	}
}
function sum(array){
	var sum=0;
	for(var i=0;i<array.length;i++){
		sum=sum+array[i];
	}
	return sum;
}
function max(array){
	var max=array[0];
	for(var i=1;i<array.length;i++){
		if(max<array[i]){
			max=array[i];
		}
	}
	return max;
}