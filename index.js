let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let newEl = document.querySelector("#refresh")
let player = {
    name: "BlackMamba",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//console.log(message-el)

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1
    if (randomCard === 1){
        return 11
    } else if ( randomCard > 10){
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardEl.innerText = "Cards: " 
    for (let i = 0; i < cards.length; i++) 
    cardEl.innerText += " " + cards[i]  + " "  
    

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame() 
    }
       
}










