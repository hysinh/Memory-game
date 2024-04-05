// Sets some global variables
const cardContainer = document.querySelector('#card-container');
const playerLivesCount = document.getElementById('score');
let playerLives = 6;
playerLivesCount.innerHTML = playerLives;

// The Data
let cardData = [
    { imgSrc: "assets/images/beatles.jpeg", name: "beatles" },
    { imgSrc: "assets/images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "assets/images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "assets/images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "assets/images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "assets/images/ledzep.jpeg", name: "lep zeppelin" },
    { imgSrc: "assets/images/metallica.jpeg", name: "metallica" },
    { imgSrc: "assets/images/pinkfloyd.jpeg", name: "pink floyd" },
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

    // flips the cards
    this.classList.toggle('toggleCard');
    console.log('i am flipping the card');

    // checks to see if the cards match
    checkCards(event);
};

// Checks if two cards match
function checkCards(event) {
    const clickedCard = event.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCards = document.querySelectorAll('.toggleCards');
    console.log(clickedCard);

    // Comparing the two flipped cards
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            disableCards();
        } else {
            console.log('wrong');
            unflipCards();
            updateLives();
        };

        if (playerLives === 0) {
            console.log('You lost. New Game?');
            restart();
        }
    }

    // Checks to see if you win
    checkWinGame();
};

// Unflips the cards if they don't match
function unflipCards(event) {
    const flippedCards = document.querySelectorAll('.flipped');
    for (let c of flippedCards) {
        c.classList.remove('flipped');
        setTimeout(() => c.classList.remove('toggleCard'), 1000);
    }
    console.log('i am unflipping the card');
};

// Unflips All the cards when lost
// function unflipAll() {
//     console.log('from inside the unflipAll funtion');
//     const allCards = document.querySelectorAll('.toggleCard');
//     console.log(allCards.length);
//     for (let i = 0; i > allCards.length; i++) {
//         c.classList.remove('flipped');
//         c.classList.remove('toggleCard');
//         //setTimeout(() => c.classList.remove('toggleCard'), 1000);
//         console.log(c);
//     };
// }

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


// Checks if you won the game
function checkWinGame(playerLives) {
    if (playerLives === 0) {
        console.log('You lost. New Game?');
        setTimeout(() => restart(), 1000);
    }
};

function resetBoard() {
    console.log('Inside the resetBoard function');
    const deleteCards = document.querySelectorAll('.card');
    deleteCards.forEach(c => c.remove()); // code from jason smith
    // setTimeout(() => {
    //     const deleteCards = document.querySelectorAll('.card');
    //     deleteCards.forEach(c => c.remove()); // code from jason smith
    // }, 1000);
};

// Restarts the game
function restart() {
    console.log('restarting the game');
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    resetBoard();
    generateCards();
};


generateCards();
