// Sets some global variables
const cardContainer = document.querySelector('#card-container');



// Updates player lives
function updateLives() {
    const playerLivesCount = document.getElementById('score');
    let playerLives = 20;
    playerLivesCount.innerHTML = playerLives;
    console.log(playerLivesCount.innerHTML);
}

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
}

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
        
        //addEventListeners();
        card.addEventListener('click', flipCards);

        // this code is by developedbyed code from his tutorial
        // card.addEventListener('click', (e) => {
        //     console.log(e);
        //     //Run our flip animation
        //     card.classList.toggle('flipped');
        //     checkCards(e);
        // });
    }
};

// adds Event Listeners to the the cards - hmmm. couldn't get this to work
function addEventListeners() {
    let cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.addEventListener('click', flipCards);
        console.log('i am in the addEventListeners function');
    }
}

// flips the cards by adding .flip class
function flipCards(event) {
    console.log(event);

    // flips the cards
    this.classList.toggle('toggleCard');
    console.log('i am flipping the card');

    // checks to see if the cards match
    checkCards(event);
}

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
        } else {
            console.log('wrong');
        };

    }
}

function unflipCards() {

}

function disableCards() {

}

function resetBoard() {

}

function restartGame() {

}

generateCards();
updateLives();
