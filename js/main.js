var cards = [{
  rank: 'queen',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
}, {
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
}, {
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/king-of-hearts.png"
}, {
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkMatch = function () {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else if (cardsInPlay.length === 2) {
    alert("Sorry, try again.");
  }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped the " + cards[cardId].rank);
  console.log("of " + cards[cardId].suit);
  checkMatch();
  };

var createBoard = function () {
  var table = document.getElementById("game-board");
  for (i = 0; i < cards.length; i++) {
    var cardElement = table.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipcard);
    table.appendChild(cardElement);
  }
}

createBoard();

// Version 1
// console.log("All's Ready, chumps!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardThree = "king";
// console.log("User flipped " + cardOne);

//
//
// var flipCard = function (cardId) {
//   if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//     console.log("User flipped " + cards[cardId]);
//   };
