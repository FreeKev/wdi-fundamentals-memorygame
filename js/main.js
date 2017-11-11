var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  alert("Match! Stars have aligned.");
} else {
  alert("Nope! Fate has you.");
}




// Version 1
// console.log("All's Ready, chumps!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardThree = "king";
// console.log("User flipped " + cardOne);
