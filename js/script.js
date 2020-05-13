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

let shuffledDeck = cardShuffle(masterDeck);

// let turn;

// let winner;

// let score; 

/*----- cached element references -----*/

// const cardContainer = document.getElementById('card1')

/*----- event listeners -----*/
// document.querySelector('dealButtonOne').addEventListener('click', renderCardInContainer);


/*----- functions -----*/




// function renderCardInContainer() {

//      document.getElementById("card1").innerHTML = "";
  
//       for(let i = 0; i < deck1.length; i++)
//       {
//           let randomCard = document.createElement("div");
//           let value = document.createElement("div");
//           let suit = document.createElement("div");
//           randomCard.className = "randomCard";
//           value.className = "value";
//           suit.className = "suit " + deck1[i].Suit;
  
//           value.innerHTML = deck1[i].Value;
//           randomCard.appendChild(value);
//           randomCard.appendChild(suit);
  
//           document.getElementById("card1").appendChild(randomCard);
//       }

      

//   }
  
// function renderShuffledCard() {
//     for (let i = 0, i < shuffledDeck.length, i++ ) {

//     }
// }

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
