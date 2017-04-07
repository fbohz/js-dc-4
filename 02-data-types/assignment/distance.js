<<<<<<< HEAD
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

=======
var X1 = 1
var Y1 = 3
var X2 = 10
var Y2 = 15
var comma = ","

var sumXsD2 = (X1 + X2) / 2
var sumYsD2 = (Y1 + Y2) / 2
console.log(sumXsD2)
console.log(sumYsD2)
console.log(sumXsD2, comma, sumYsD2)
>>>>>>> 111a8ab0e3f71a7fd7bf91634bc416a9772fec36
