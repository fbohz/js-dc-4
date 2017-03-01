//I did this by using functions as learned for the prework for this class
var distance = function (x1,y1,x2,y2){
	var deltaX = x2 - x1
	var deltaY = y2 - y1
	var squared = (Math.pow(deltaY,2))+(Math.pow(deltaX,2))
	//console.log(squared)
	var answer = Math.sqrt(squared)
	return answer
}

console.log(distance(1,10,3,15));
//var userI[] = prompt("Type your coordinates: ");
//console.log(distance(userI));

