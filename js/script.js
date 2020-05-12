/*----- constants -----*/
const player = {

    'playerOne': {
            name: '',
            score: 0
    },

    'playerTwo': {
            name: '',
            score: 0
    }
}

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
// Build a 'master' deck of 'card' objects used to create shuffled decks

const deck1 = getDeck();



/*----- app's state (variables) -----*/

let shuffledDeck;

let cardsInPlay = [];

let turn = {

}

let winner = {

}

let score = {

}

/*----- cached element references -----*/




/*----- event listeners -----*/



/*----- functions -----*/


function getDeck() {
    const deck = [];
	suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
          deck.push({
            card: `${suit}${rank}`,
          });
        });
      });
      return deck;
    }

function shuffle(deck) {
    // switch the values of two random cards 1000 times
    for (let i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];
    
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }