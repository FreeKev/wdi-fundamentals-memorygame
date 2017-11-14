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
    console.log("You found a match!");
} else if (cardsInPlay.length === 2) {
    console.log("Sorry, try again.");
  }
}

var flipCard = function (cardId) {
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped the " + cards[cardId].rank);
  console.log("of " + cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  checkMatch();
  };

flipCard(0);
flipCard(2);

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
