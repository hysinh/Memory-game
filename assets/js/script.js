/**
 * Sets some global variables by getting elements from the DOM
 */
const cardContainer = document.querySelector('#card-container');
const playerTriesCount = document.getElementById('score');
let playerTries = 20;
playerTriesCount.innerHTML = playerTries;

let firstCard, secondCard;

/**
 * The Card Data set
 */
let cardData = [
    { imgSrc: "assets/images/card_happyvalley_egg.webp", name: "egg" }, 
    { imgSrc: "assets/images/card_happyvalley_grumpy.webp", name: "grumpy" },
    { imgSrc: "assets/images/card_happyvalley_leafy.webp", name: "leafy" },
    { imgSrc: "assets/images/card_happyvalley_pete.webp", name: "pete" },
    { imgSrc: "assets/images/card_happyvalley_pisa.webp", name: "pisa" },
    { imgSrc: "assets/images/card_happyvalley_poppy.webp", name: "poppy" },
    { imgSrc: "assets/images/card_happyvalley_smiley.webp", name: "smiley" },
    { imgSrc: "assets/images/card_happyvalley_walter.webp", name: "walter" },
];

/**
 * Duplicates the card data array
 * @param {array} array of card data
 */
function duplicateData() {
    let newData = cardData.concat(cardData);
    return newData;
};

/**
 * Randomizes the array: The de-facto unbiased shuffle algorithm is the Fisher–Yates (aka Knuth) Shuffle
 * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {*} array of card data
 * @returns {array} Returns randomized array
 */
function shuffleCards(array) {
    let currentIndex = array.length;
     
    // While there remain elements to shuffleassets.
    while (currentIndex != 0) {
      
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
      
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array; // return the array
};

/**
 * Generates the card elements and adds them to the DOM.
 * Pulls the initial data from the cardData and applies the
 * duplicateData() and then shuffleDeck() to create a unique deck each time
 * before populating the grid.
 * Adds event listeners to the card div element.
 */
function generateCards() {
    const fullDeck = duplicateData(cardData);
    const shuffledDeck = shuffleCards(fullDeck);
    console.log(shuffledDeck);
    
    // Creates the HTML for cards
    for (let c of shuffledDeck) {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        const url = c.imgSrc;
        
        // Sets the classes of the cards
        card.setAttribute('class', 'card');
        front.setAttribute('class', 'front');
        back.setAttribute('class', 'back');

        // Puts information onto the cards
        front.src = url;
        card.setAttribute('name', c.name);

        // Inserts the cards into the DOM
        cardContainer.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        
        // Adds event listeners
        card.addEventListener('click', flipCards);
    };
};

/**
 * Handles the click event on a card. If two cards are activated, check to see if the cards match.
 * @param {*} event - the click event object
 */
function flipCards(event) {
    console.log(event);
    console.log('i am flipping the card');
    targetCard = event.target;
    targetCard.classList.add('toggleCard', 'active', 'no-click');

    const activeCards = document.querySelectorAll('.active');
    
    if (activeCards.length === 2) {
        console.log(`Inside flipcards activeCards.length: ${activeCards.length}`);
        checkCards(event);
    } else {
        return;
    };
    
};

/**
 * Checks two activated cards to see if they match based on name attribute.
 * If cards match, a match attribute is added and the active attribute is removed.
 * if cards don't match, the tries left are updated and the cards are flipped back.
 * @param {*} event - two cards activated
 */
function checkCards(event) {
    console.log('inside the checkCards function');
    const activeCards = document.querySelectorAll('.active');
    console.log(`Inside check cards - activeCards.length: ${activeCards.length}`)

    firstCard = activeCards[0];
    secondCard = activeCards[1];

    // Checks to see if firstCard and secondCard match
    if (activeCards.length === 2) {
        if (firstCard.getAttribute('name') === secondCard.getAttribute('name')) {
            console.log(firstCard.getAttribute('name'));
            console.log(secondCard.getAttribute('name'));
            console.log('match');
            firstCard.classList.remove('active');
            secondCard.classList.remove('active');
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');

            // checks to see if enough matches to win
            checkWin();
        } else {
            console.log('wrong');
            updateTries();
            // timeout to allow for the player to see the card flip complete before it flips back
            setTimeout(() => {
                unflipCards();
              }, 500);

            // checks to see if game is lost
            checkLose();
        };

        console.log(`the activeCards.length: ${activeCards.length}`);
    };

    return;
};

/**
 * Flips the cards back when they don't match.
 * Removes the active card attributes and allows the card to be clicked again.
 * @param {*} event of two cards not matching
 */
// Unflips the cards if they don't match
function unflipCards(event) {
    const flippedCards = document.querySelectorAll('.active');
    for (let c of flippedCards) {
        c.classList.remove('active');
        c.classList.remove('no-click');
        c.classList.remove('toggleCard');
        c.style.pointerEvents = 'all';
    };
    console.log('i am unflipping the card');
};

// Disables cards that match
// function disableCards() {
//     const flippedCards = document.querySelectorAll('.active');
//     for (let c of flippedCards) {
//         c.classList.remove('active');
//         c.style.pointerEvents = 'none';
//     }
// };

/**
 * Updates the number of tries a player still has.
 * Decrements player tries each time there is an unmatched set of cards.
 */
function updateTries() {
    console.log('inside updateTries function')
    playerTries--;
    setTimeout(() => playerTriesCount.innerText = playerTries, 1000);
    console.log(`Player Tries left: ${playerTries}`);
};

/**
 * Checks if there is sufficient matched cards to win the game.
 */
function checkWin() {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === (cardData.length*2) ) {
        console.log('You won! Play again?');
        // timeout allows for last card to complete flip before displaying message
        setTimeout(() => {
            openWinModal();
            //restart();
          }, 250);
    } else {
        return;
    };
};

/**
 * Checks to see if player has lost by exhausting the number of tries
 */
// checks to see if you lost
function checkLose() {
    if (playerTries === 0) {
        // timeout allows for the last card to complete flip before displaying message
        setTimeout(() => {
            console.log('You lost. New Game?');
            openLoseModal();
            // window.alert('You lost. New Game?');
          }, 250);
    } else {
        return;
    };
};

/**
 * Displays Lose message modal
 */
function openLoseModal() {
    var modal = document.getElementById('loseModal');
    modal.style.display = 'block';
};

/**
 * Displays Win message modal
 */
function openWinModal() {
    var modal = document.getElementById('winModal');
    modal.style.display = 'block';
};

/**
 * Closes the modal message boxes upon any click on the screen
 */
function closeModal() {
    var loseModal = document.getElementById(`loseModal`);
    var winModal = document.getElementById('winModal');
    loseModal.style.display = 'none';
    winModal.style.display = 'none';
};

/**
 * Removes all the card elements from the board
 */
function clearBoard() {
    console.log('clearing the Board');
    const deleteCards = document.querySelectorAll('.card');
    deleteCards.forEach(c => c.remove()); // code from jason smith
};

/**
 * Starts the game by populating the grid with new shuffled cards
 */
function startGame() {
    console.log('starting the game');
    clearBoard();
    generateCards();
    playerTries = 20;
    playerTriesCount.textContent = playerTries;

};

/**
 * Event Listeners - adds to DOM elements when DOM finishes loading before running game.
 */
// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    let playGameButton = document.getElementById('play-game-button');
    playGameButton.addEventListener('click', startGame);

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", closeModal);

});
