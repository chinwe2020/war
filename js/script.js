/*----- constants -----*/
const player = {

    '1': {
            name: '',
            score: 0
           
    },

    '-1': {
            name: '',
            score: 0
    }
}

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
// Build a 'master' deck of 'card' objects used to create shuffled decks

const masterDeck = buildMasterDeck();
let shuffledDeck = cardShuffle(masterDeck);
const deck1 = [];
const deck2 = [];
buildPlayerDecks();
let faceCard1 = deck1.shift();
let faceCard2 = deck2.shift();
let turn;

/*----- app's state (variables) -----*/

let winner;

let score; 

let result; 

/*----- cached element references -----*/


/*----- event listeners -----*/

const startButton = document.querySelector('.shuffle');
const startGame = document.getElementById('shuffle');
startButton.addEventListener('click', shuffleAndDeal);

const dealButtonOne = document.querySelector('.dealButtonOne');
const cardContainerOne = document.getElementById('card1');
dealButtonOne.addEventListener('click', handleClick);

const dealButtonTwo = document.querySelector('.dealButtonTwo');
const cardContainerTwo = document.getElementById('card2');
dealButtonTwo.addEventListener('click', handleClick);



/*----- functions -----*/

init();

function init() {
  buildMasterDeck();
}

function shuffleAndDeal() {
buildPlayerDecks();

  turn = 1;
}

function handleClick() {
  let cardEl;
  if(turn === 1) {
    faceCard1 = deck1.shift();
    cardEl = `<div class"card ${faceCard1.face}"></div>`
    cardContainerOne.innerHTML = cardEl;
  } else {
    faceCard2 = deck2.shift();
    cardEl = `<div class"card ${faceCard2.face}"></div>`
    cardContainerTwo.innerHTML = cardEl;
  }
    turn *= -1
}
  
//split shuffled deck of card into 2 decks and empty shuffledDeck array
function buildPlayerDecks() {

      for(let i = 0; i < shuffledDeck.length; i++) { 
          if(i%2 === 0) {
            deck1.push(shuffledDeck[i])
          } else {
            deck2.push(shuffledDeck[i])
          }
      }
      shuffledDeck.splice(0, shuffledDeck.length);
  }
    
//shuffle array of cards
function cardShuffle(arr) {
    let newPos,
        temp;

    for(i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
    }
    return arr;
  }

//build array of cards
function buildMasterDeck() {
    const deck = [];
	suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
          deck.push({
            face: `${suit}${rank}`,
            value: Number(rank)
          });
        });
      });
      return deck;
    }
