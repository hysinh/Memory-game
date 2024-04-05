// Setting a couple of global variables
const playerLivesCount = document.getElementById('score');
let playerLives = 20;
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
};

function shuffleCards() {

}

function generateCards() {

}

function addEventListeners() {

}

function flipCards() {

}

function checkCards() {

}

function unflipCards() {

}

function disableCards() {

}

function resetBoard() {

}

function restartGame() {

}
