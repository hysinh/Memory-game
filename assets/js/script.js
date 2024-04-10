// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById('start-game-button');
    let resetButton = document.getElementById('reset-button');
    startButton.addEventListener('click', restart);
    resetButton.addEventListener('click', restart);

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", closeModal);

});

// Sets some global variables
const cardContainer = document.querySelector('#card-container');
const playerLivesCount = document.getElementById('score');
let playerLives = 4;
playerLivesCount.innerHTML = playerLives;

let firstCard, secondCard;

// The Data
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

// duplicates the data
function duplicateData() {
    let newData = cardData.concat(cardData);
    return newData;
};

// randomizes the cards -- Randomize an array: The de-facto unbiased shuffle algorithm is the Fisher–Yates (aka Knuth) Shuffle. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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

// generates the cards and adds them to the DOM
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
    }
};

// flips the cards by adding .flip class
function flipCards(event) {
    console.log(event);
    console.log('i am flipping the card');
    targetCard = event.target;
    targetCard.style.pointerEvents = 'none';
    targetCard.classList.toggle('toggleCard');
    //targetCard.classList.toggle('flipped');

    const flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length < 2) {
        // this.classList.toggle('toggleCard');
        this.classList.toggle('flipped');
        checkCards(event);
    } else {
        return;
    }
    
};

// Checks if two cards match
function checkCards(event) {
    console.log('inside the checkCards function');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCards = document.querySelectorAll('.toggleCard');
    firstCard = flippedCards[0];
    secondCard = flippedCards[1];

    // Checks to see if firstCard and secondCard match
    if (flippedCards.length === 2) {
        if (firstCard.getAttribute('name') === secondCard.getAttribute('name')) {
            console.log(firstCard.getAttribute('name'));
            console.log(secondCard.getAttribute('name'));
            console.log('match');
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.style.pointerEvents = 'none';
            secondCard.style.pointerEvents = 'none';

            checkWin();
        } else {
            console.log('wrong');
            updateLives();
            setTimeout(() => {
                unflipCards();
              }, 500);
            checkLose();
        };
        //console.log(firstCard, secondCard);
        console.log(flippedCards.length);

        console.log(`the toggleCards.length: ${flippedCards.length}`);
    };
    return;
};

    // Comparing the two flipped cards
    // if (flippedCards.length === 2) {
    //     if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
    //         console.log('match');
    //         disableCards();
    //         setTimeout(() => {checkWin()}, "500");
    //     } else {
    //         console.log('wrong');
    //         unflipCards();
    //         updateLives();
    //         setTimeout(() => {checkLose()}, "1000");
    //     };
    // };


// Unflips the cards if they don't match
function unflipCards(event) {
    const flippedCards = document.querySelectorAll('.flipped');
    for (let c of flippedCards) {
        c.classList.remove('flipped');
        c.classList.remove('toggleCard');
        c.style.pointerEvents = 'all';
    }
    console.log('i am unflipping the card');
};

// Disables cards that match
function disableCards() {
    const flippedCards = document.querySelectorAll('.flipped');
    for (let c of flippedCards) {
        c.classList.remove('flipped');
        c.style.pointerEvents = 'none';
    }
};

// Updates player lives
function updateLives() {
    console.log('inside updateLives function')
    playerLives--;
    setTimeout(() => playerLivesCount.innerText = playerLives, 1000);
    console.log(`Player Tries left: ${playerLives}`);
};

// checks to see if you win
function checkWin() {
    const toggleCards = document.querySelectorAll('.toggleCard');
    if (toggleCards.length === 16 ) {
        //unflipCards();
        console.log('You won! Play again?');
        setTimeout(() => {
            console.log('You won! Play again?');
            openWinModal();
            //restart();
          }, "500");
    } else {
        return;
    };
};

// checks to see if you lost
function checkLose() {
    if (playerLives === 0) {
        disableCards();
        setTimeout(() => {
            console.log('You lost. New Game?');
            openLoseModal();
            // window.alert('You lost. New Game?');
            restart();
          }, "500");
    } else {
        return;
    };
};

// Opens Lose Modal message when you lose
function openLoseModal() {
    var modal = document.getElementById('loseModal');
    modal.style.display = 'block';
};

// Opens Win Modal message when you lose
function openWinModal() {
    var modal = document.getElementById('winModal');
    modal.style.display = 'block';
};

// Closes the Modal message
function closeModal() {
    var loseModal = document.getElementById(`loseModal`);
    var winModal = document.getElementById('winModal');
    loseModal.style.display = 'none';
    winModal.style.display = 'none';
};

// Resets the board
function resetBoard() {
    console.log('Resetting the Board');
    const deleteCards = document.querySelectorAll('.card');
    deleteCards.forEach(c => c.remove()); // code from jason smith
};

// Updates the button text after game starts
// function resetButton() {
//     console.log('This resets the start game button');
//     let button = document.getElementById('button');
//     button.innerText = 'reset';
// };

// Restarts the game
function restart() {
    console.log('restarting the game');
    resetBoard();
    generateCards();
    playerLives = 4;
    playerLivesCount.textContent = playerLives;
    //resetButton();
};
