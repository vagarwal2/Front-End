function isEven(number){
	if(number%2==0)
		return true;
	else
		return false;
}
function factorial(number){
	var s=number;
	for(var i=number-1;i>0;i--){
		s=s*i;
	}
	return s;
}
function kebabToSnake(string){
	var str=string.replace(/-/g,"_");
	return str;
}