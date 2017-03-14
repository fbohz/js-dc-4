var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var score = []
var title = []

//constructor
function Card() {
  this.ranks = ranks
  this.suits = suits
  this.title = title
  this.score = score

  //no need of conditionals or loops just generates random index
  var obj = {}
    obj.ranks = this.ranks[Math.floor(ranks.length * Math.random())]
    obj.suits = this.suits[Math.floor(suits.length * Math.random())]
    var cardRanks = obj.ranks
    var cardSuits = obj.suits
    obj.title = cardRanks + ' of ' + cardSuits
    //adds one to index of because scores start with 1 and index with 0
    obj.score = ranks.indexOf(obj.ranks) + 1

    return obj

}
// var myCard = new Card()
// console.log(myCard);

//


function Deck() {
this.cards = []
this.createNewDeck = function(x){
      for (var i = 1; i <= x; i++) {
        this.cards.push(Card())

      }
      return this.cards
  };
if (this.cards) {
  this.createNewDeck(52)
} else {
  console.log('Your deck is not empty');
}
}

// var myDeck = new Deck()
// console.log(myDeck);

//
function Player(username, number) {
this.username = username
this.number = number
this.hand = []
this.array = function(number){
      for (var i = 1; i <= number; i++) {
        this.hand.push(Card())
      }
      return this.hand
  };

if (number) {
  this.array(number)
} else {
  console.log('Please type number of cards');
}

}

var player1 = new Player('kitkat', 3)
var player2 = new Player('hello123', 3)
console.log(player1, player2);
