## Title

WELCOME TO 'WAR'!

## Screenshots

Wireframe
![war wireframe](./images/War_Wireframe.png)

## Technologies

- HTML
- CSS
- Javascript

## Getting Started

Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack. If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards).

## Future Enhancements

## Pseudocode

1) Define required constants
    - 1.1 define players (one and two[computer?])
    - 1.2 define how to win (playerOneCard > player2card) || (player2card > player1card)

2) Define required variables used to track the state of the game
    - 2.1 use an array to iterate through the deck 
    - 2.2 define varible turn to determine whos turn it is to show a card
    - 2.3 define var to dertemine who wins the hand and adds it to their score
    - 2.4 define var to keep score

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
    - 3.1 store gameboard
    - 3.2 store deck
        - 3.2.1 store deck shuffle(randomization)
    - 3.3 store game play 
        - 3.3.1 if one card > other card = winner
        - 3.3.2 if both cards are equal; add 3 face down cards and one face up card on top
        - 3.3.3 loop back to 3.3.1 logic
    - 3.4 store score
        - 3.4.1 store score for each hand
        - 3.4.2 store score for game to dertemine winneer
    - 3.5 store win logic
        - 3.5.1 store function to determine value of each card
        - 3.5.2 store function to determine which value is greater

4) Upon loading the app should:
	- 4.1) Initialize the gameboard, the deck/cards, turns, and winner to null to start the game
	- 4.2) Render those values to the page
        - 4.1 the board:
            - 4.1.1 begin with only decks face down
            - 4.1.2 message whose turn it is
            - 4.1.3 wait for user to click the deck
            - 4.1.4 loop through card deck and display cards for both players 

5) Handle a player clicking the deck
	- 5.1) Obtain the index of the card that was prduced by clicking the deck
	- 5.2) If the card on the board has a value at the index, immediately return because that card has been used.
	- 5.3) If winner is not null, immediately return because the game is over.
	- 5.4) Update the card array at the index with the value of turn.
	- 5.5) change turns 
	- 5.6) Set the winner variable if there's a winner:
		- 5.6.1) card = winningCard function
		- 5.6.2) Total up the number of winningHands
		- 5.6.3) If the one player's total is greater than the other players total, we have a winner! Exit the game.play().

6) Handle a player clicking the replay button
    - 6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).
