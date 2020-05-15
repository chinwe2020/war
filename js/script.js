const deck1 = [];
const deck2 = [];

let deckOne = [];
let deckTwo = [];

const players = {

    '1': {
            playersDeck: deckOne,
            score: 26
           
    },

    '-1': {
            playersDeck: deckTwo,
            score: 26
    }
}

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']

const masterDeck = buildMasterDeck();
let shuffledDeck = cardShuffle(masterDeck);
buildPlayerDecks();

let faceCard1 = deck1.shift();
let faceCard2 = deck2.shift();
let turn;
let winner;
let score; 
let cardsInPlay = [];

const startButton = document.querySelector('.shuffle');
const startGame = document.getElementById('shuffle');
startButton.addEventListener('click', shuffleAndDeal);

const dealButtonOne = document.querySelector('.dealButtonOne');
const cardContainerOne = document.getElementById('card1');
dealButtonOne.addEventListener('click', handleClick);

const dealButtonTwo = document.querySelector('.dealButtonTwo');
const cardContainerTwo = document.getElementById('card2');
dealButtonTwo.addEventListener('click', handleClick);

const msgEl = document.getElementById('msg');

const scoreOneEl = document.getElementById('score1')

const scoreTwoEl = document.getElementById('score2')

const restart = document.querySelector('.resetButton')
const reset = document.getElementById('reset')
restart.addEventListener('click', restartGame)

init();

function init() {
  buildMasterDeck();
  turn = 1;
  winner = null;
  msgEl.innerHTML = `Click Start to Deal to Deck`;
}

function buildMasterDeck() {
  const deck = [];
suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          face: `${suit}${rank}`,
          value: Number(rank) || (rank === 'J' ? 11 : rank === 'Q' ? 12 : rank === 'K' ? 13 : 14)
      })
    }) 
  })
  return deck;  
};

function shuffleAndDeal() {
  buildPlayerDecks();
  msgEl.innerHTML = `Player 1's Turn`;
}

function checkForWin() {
  if(cardsInPlay[0].value < cardsInPlay[1].value) {
    deckOne.unshift(cardsInPlay);
    score = deckOne.length;
    msgEl.innerHTML = `Player 1 Wins this Hand!`;
    cardsInPlay.splice(0,2); 
    winner = turn;
    cardContainerOne.innerHTML = "";
    cardContainerTwo.innerHTML = "";
  } else if(cardsInPlay[1].value < cardsInPlay[0].value) {
    deckTwo.unshift(cardsInPlay);
    score = deckTwo.length;
    msgEl.innerHTML = `Player 2 Wins this hand!`;
    cardsInPlay.splice(0,2);
    winner = turn * -1;
    cardContainerOne.innerHTML = "";
    cardContainerTwo.innerHTML = "";
  } else if(cardsInPlay[1].value = cardsInPlay[0].value) {
    msgEl.innerHTML = "Tie! I DE-CLARE WAR";
  }
  winGame();
}

function winGame() {
  if( deck1.length === 0 && deck2.length === 0 ){
    if( deckOne.length > deckTwo.length ){
      msgEl.innerHTML = `Player 1 Wins!!!`;
    } else if( deckOne.length < deckTwo.length ){
      msgEl.innerHTML = `Player 2 Wins!!!`;
      } 
    } else {
    switchTurn();
  }
}

function switchTurn() {
    turn *= -1
  }

function handleClick() {
  let cardEl;
  if(turn === 1) {
    msgEl.innerHTML = `Player 2's Turn`;
    faceCard1 = deck1.shift();
    cardEl = `<div class="card ${faceCard1.face}"></div>`
    cardContainerOne.innerHTML = cardEl;
    cardsInPlay.unshift(faceCard1);
}
   else if(turn === -1) {
    msgEl.innerHTML = `Player 1's Turn`;
    faceCard2 = deck2.shift();
    cardEl = `<div class="card ${faceCard2.face}"></div>`
    cardContainerTwo.innerHTML = cardEl;
    cardsInPlay.unshift(faceCard2);
  } 
  turn *= -1;
}

function scorePoint(){
  checkForWin();

}

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

function restartGame() {
  buildMasterDeck();
    turn = 1;
      faceCard1 = undefined
      faceCard2 = undefined
        cardContainerOne.innerHTML = "";
        cardContainerTwo.innerHTML = "";
    }