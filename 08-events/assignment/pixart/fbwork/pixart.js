/*

Step 3: Readying our Canvas
Now that we can get the color the user wants to paint with from our form, we need to make it so they can actually paint with that color. Create an event handler that will change the background color of the event target to the current color and attach it to every div.square that you created made above.

Hints:
(1) you probably want to write your function here and then attach the event in your loop up in Step 1
(2) think about what event we might want to attach our event handler too; what mouse events are there that might make sense?

*/


//1
var square = document.querySelector('#canvas')
var draw = 2500

var htmlElements = "";
for (var i = 0; i < draw; i++) {
  //keep adding strings to variable
   htmlElements += '<div class="square"></div>';
   document.querySelector('#canvas').addEventListener('mousedown', function(e) {
     // body...
     if (e) {
       paint()

     }
   });

}
//change contents of canvas by adding iterated string
square.innerHTML = htmlElements;
//2
var currentColor = document.getElementsByClassName("brush")


//event listener to when click set-color button
document.getElementById("set-color").addEventListener('click', function(e) {
  e.preventDefault()
  //variable which represents the input on the event
  var valor = document.getElementById("color-field").value;
  // console.log(valor);

  //change the value of background property with event value
  //since getElementsByClassName returns a nodeList use [0].
  currentColor[0].style.background = valor
  squareCo[0].style.background = '#E7E5DB'

  // hi = valor
  //
  // return hi
});

//3
// console.log(hi);
//return the box value color so that it will be input on sqares later
var element = document.getElementById('brush'),
    style = window.getComputedStyle(element),
    bcolor = style.getPropertyValue('background-color');
console.log(bcolor);

var squareCo = document.getElementsByClassName('square')

function paint() {
  squareCo[0].style.background = bcolor
}
