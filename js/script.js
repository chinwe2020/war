let deck1 = [];
let deck2 = [];

let deckOne = [];
let deckTwo = [];

const players = {

    '1': {
            playersDeck: deckOne,
            score1: 0
           
    },

    '-1': {
            playersDeck: deckTwo,
            score2: 0
    }
}

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']



let faceCard1 = deck1.shift();
let faceCard2 = deck2.shift();
let turn;
let winner;
let score1;
let score2; 
let cardsInPlay = [];
let shuffledDeck;

const startButton = document.querySelector('.shuffle');
const startGame = document.getElementById('shuffle');
startButton.addEventListener('click', initGame);

const dealButtonOne = document.querySelector('.dealButtonOne');
const cardContainerOne = document.getElementById('card1');
dealButtonOne.addEventListener('click', handleClick);

const dealButtonTwo = document.querySelector('.dealButtonTwo');
const cardContainerTwo = document.getElementById('card2');
dealButtonTwo.addEventListener('click', handleClick);

const winMsgEl = document.getElementById('winMsg');
const turnMsgEl = document.getElementById('turnMsg')

const scoreOneEl = document.querySelector('.score')
const scoreContainerOne = document.getElementById('score1')
scoreOneEl.addEventListener('input', scorePoint)

const scoreTwoEl = document.querySelector('.score')
const scoreContainerTwo = document.getElementById('score2')
scoreTwoEl.addEventListener('input', scorePoint)

const restart = document.querySelector('.resetButton')
const reset = document.getElementById('reset')
restart.addEventListener('click', restartGame)

init();

function init() {

  const masterdeck = buildMasterDeck();
  shuffledDeck = cardShuffle(masterdeck);
  buildPlayerDecks();
  score1 = 0;
  score2 = 0;
  turn = 1;
  winner = null;
  winMsgEl.innerHTML = `Click Start to Deal to Deck`;
  turnMsgEl.innerHTML = ``
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

function initGame() {
  turnMsgEl.innerHTML = `Player 1's Turn`;
}


function runGame() {
  if(cardsInPlay.length % 2 == 0) {
    setTimeout(checkForWin, 1500);
  }
}

function checkForWin() {
  if(cardsInPlay[0].value < cardsInPlay[1].value) {
    deckOne.unshift(cardsInPlay);
    score1++;
    winMsgEl.innerHTML = `Player 1 Wins this Hand!`;
    scoreContainerOne.innerHTML = "Score: " + score1;
    cardsInPlay.splice(0,2); 
    winner = turn;
    cardContainerOne.innerHTML = "";
    cardContainerTwo.innerHTML = "";
  } else if(cardsInPlay[1].value < cardsInPlay[0].value) {
    deckTwo.unshift(cardsInPlay);
    score2++;
    winMsgEl.innerHTML = `Player 2 Wins this hand!`;
    scoreContainerTwo.innerHTML = "Score: " + score2;
    cardsInPlay.splice(0,2);
    winner = turn * -1;
    cardContainerOne.innerHTML = "";
    cardContainerTwo.innerHTML = "";
  } else if(cardsInPlay[1].value = cardsInPlay[0].value) {
    winMsgEl.innerHTML = "Tie! I DE-CLARE WAR";
  }
  winGame();
}

function winGame() {
  if( deck1.length === 0 && deck2.length === 0 ){
    if( deckOne.length > deckTwo.length ){
      winMsgEl.innerHTML = `Player 1 Wins!!!`;
      turnMsgEl.innerHTML = ``
    } else if( deckOne.length < deckTwo.length ){
      winMsgEl.innerHTML = `Player 2 Wins!!!`;
      turnMsgEl.innerHTML = ``
      } else if (deckOne.length = deckTwo.length) {
        winMsgEl.innerHTML = `Tie Game!!! Click Restart and Play Again`;
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
  if(deck1.length === 0 && deck2.length === 0){
    return;
  }
  if(turn === 1) {
    turnMsgEl.innerHTML = `Player 2's Turn`;
    faceCard1 = deck1.shift();
    cardEl = `<div class="card ${faceCard1.face}"></div>`
    cardContainerOne.innerHTML = cardEl;
    cardsInPlay.unshift(faceCard1);
}
   else if(turn === -1) {
    turnMsgEl.innerHTML = `Player 1's Turn`;
    faceCard2 = deck2.shift();
    cardEl = `<div class="card ${faceCard2.face}"></div>`
    cardContainerTwo.innerHTML = cardEl;
    cardsInPlay.unshift(faceCard2);
    runGame();
  } 
  turn = -1;
}

function scorePoint() {
 let value = 0;

 if(value = deckOne.length) {
    score1 = value;
    return `Score: ${value}`; 
  }

 if(value = deckTwo.length) {
  score2 = value;
  return `Score: ${value}`; 
  }
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
  deck1 = [];
  deck2 = [];
  cardsInPlay = [];
  scoreContainerOne.innerHTML = "Score: ";
  scoreContainerTwo.innerHTML = "Score: ";
  score1 = 0;
  score2 = 0;
  init();
  cardContainerOne.innerHTML = "";
  cardContainerTwo.innerHTML = "";
  turnMsgEl.innerHTML = "";
  winMsgEl.innerHTML = `Click Start to Deal to Deck`;
}
  