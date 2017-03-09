/*

Card Game of War Exercise Part 1.

*/
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

var suits = ['hearts', 'clubs', 'spades', 'diamonds']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/
//take both arrays and unite them and sort all their combinations
//console.log(suits.toString())
//console.log(suits)

var combination = []

function createDeck(array1, array2) {
//var combination = []
  for(var i = 0; i < array1.length; i++)
  {
       for(var j = 0; j < array2.length; j++)
       {
          combination.push(array1[i] + ' of ' + array2[j])
       }

  }
  return combination
}
var deckOfCards = createDeck(ranks, suits)
//console.log(deckOfCards)
/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/
function getRandomCard() {
  //this uses Math.floor() which rounds to nearest integer after the length of array is multiplied by Math.random().
  var randomCard = deckOfCards[Math.floor(deckOfCards.length * Math.random())]
  return randomCard
}
//console.log(getRandomCard())


/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

function dealHand(numberCards) {
  if (numberCards === undefined || numberCards === 0) {
    return getRandomCard()
  }else if (numberCards === 1) {
      //console.log (getRandomCard().toString())
      return getRandomCard().toString()
    }else if (numberCards <= 52) {
      //var hand = numberCards
      var yourHand = []
      for (var i = 1; i <= numberCards; i++) {
        yourHand.push(getRandomCard())

      }
      return yourHand
    } else {
      console.log ("Please enter a valid number")
    }
}

//console.log(dealHand(10))
//dealHand(1)
/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
var playerOneCards = []
var playerTwoCards = []

playerOneCards.push(dealHand(7))
playerTwoCards.push(dealHand(7))

//console.log(playerOneCards)
// console.log(playerTwoCards)


/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

function showHand(pcards){
  console.log(pcards.toString())
}

//showHand(playerOneCards)

/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
