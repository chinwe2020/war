/*----- constants -----*/
// const player = {

//     'playerOne': {
//             name: '',
//             score: 0
//     },

//     'playerTwo': {
//             name: '',
//             score: 0
//     }
// }

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
// Build a 'master' deck of 'card' objects used to create shuffled decks

const masterDeck = buildMasterDeck();

/*----- app's state (variables) -----*/

let shuffledDeck = [cardShuffle(masterDeck)];

let card = renderShuffledCard();

// let turn;

// let winner;

// let score; 

/*----- cached element references -----*/

const cardContainerOne = document.getElementById('card1')

/*----- event listeners -----*/
document.querySelector('dealButtonOne').addEventListener('click', renderCardInContainer);


/*----- functions -----*/




function renderCardInContainer() {

    //  cardContainerOne
  
      
          
  }
  
function renderShuffledCard() {

      let renderCard = [];

      for (let i = 0; i < shuffledDeck.length; i++) {
            return renderCard.push(shuffledDeck[0])
  }

return renderCard;
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

// renderCard();
