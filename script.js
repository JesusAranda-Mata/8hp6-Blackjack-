//challenge 5   

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-results', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'],
    'cardsMap' : {'2' : 2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10, 'A':[1, 11]},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound  = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal').addEventListener('click', blackjackDeal);


function blackjackHit() {
    //alert('test');
    let card = randomCard();
    //console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}


function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `allImages/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for (i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    
    for (i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
}

function updateScore(card, activePlayer) {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
}

function showScore(activePlayer) {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}




