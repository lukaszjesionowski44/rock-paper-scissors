"use strict";
const rps = ['rock', 'paper', 'scissors'];
let player1 = '';
let computer = '';
let score = [0, 0];
const player1Div = document.getElementById('player1');
const player2Div = document.getElementById('player2');
const imgBlock1 = document.getElementById('img__block-1');
const imgBlock2 = document.getElementById('img__block-2');
const winRoundMessage = document.getElementById('win__block');
const player1Score = document.getElementById('player__1-score');
const player2Score = document.getElementById('player__2-score');
const winMessage = document.getElementById('win__message');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const rules = document.getElementById('rules');
const overflow = document.getElementById('overflow');
function computerChoice() {
    let rndNumber = Math.floor(Math.random() * 3);
    imgBlock2 === null || imgBlock2 === void 0 ? void 0 : imgBlock2.classList.remove('display-n');
    imgBlock2 === null || imgBlock2 === void 0 ? void 0 : imgBlock2.setAttribute('src', `./assets/${rndNumber}.png`);
    computer = rps[rndNumber];
    console.log(computer);
}
function rock() {
    player1 = 'rock';
    winRoundMessage.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.setAttribute('src', './assets/0.png');
    computerChoice();
    checkWin();
}
function paper() {
    player1 = 'paper';
    winRoundMessage.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.setAttribute('src', './assets/1.png');
    computerChoice();
    checkWin();
}
function scissors() {
    player1 = 'scissors';
    winRoundMessage.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.classList.remove('display-n');
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.setAttribute('src', './assets/2.png');
    computerChoice();
    checkWin();
}
function closeRules() {
    rules.classList.add('display-n');
    overflow.classList.add('display-n');
}
function checkWin() {
    if (player1 === 'paper' && computer === 'paper') {
        winRoundMessage.innerHTML = "It's a tie!";
    }
    if (player1 === 'paper' && computer === 'rock') {
        winRoundMessage.innerHTML = "Player 1 scored!";
        score = [score[0] + 1, score[1]];
        player1Score.innerHTML = score[0].toString();
        console.log('player 1 scored');
    }
    if (player1 === 'paper' && computer === 'scissors') {
        winRoundMessage.innerHTML = "Computer scored!";
        score = [score[0], score[1] + 1];
        player2Score.innerHTML = score[1].toString();
        console.log('computer scored');
    }
    if (player1 === 'rock' && computer === 'rock') {
        winRoundMessage.innerHTML = "It's a tie!";
    }
    if (player1 === 'rock' && computer === 'scissors') {
        winRoundMessage.innerHTML = "Player 1 scored!";
        score = [score[0] + 1, score[1]];
        player1Score.innerHTML = score[0].toString();
        console.log('player 1 scored');
    }
    if (player1 === 'rock' && computer === 'paper') {
        winRoundMessage.innerHTML = "Computer scored!";
        score = [score[0], score[1] + 1];
        player2Score.innerHTML = score[1].toString();
        console.log('computer scored');
    }
    if (player1 === 'scissors' && computer === 'scissors') {
        winRoundMessage.innerHTML = "It's a tie!";
    }
    if (player1 === 'scissors' && computer === 'paper') {
        winRoundMessage.innerHTML = "Player 1 scored!";
        score = [score[0] + 1, score[1]];
        player1Score.innerHTML = score[0].toString();
        console.log('player 1 scored');
    }
    if (player1 === 'scissors' && computer === 'rock') {
        winRoundMessage.innerHTML = "Computer scored!";
        score = [score[0], score[1] + 1];
        player2Score.innerHTML = score[1].toString();
        console.log('computer scored');
    }
    if (score[0] === 3) {
        disableButtons();
        btn4.classList.remove('display-n');
        winRoundMessage.classList.add('display-n');
        winMessage.classList.remove('display-n');
        winMessage.innerHTML = 'Player 1 Won!';
    }
    if (score[1] === 3) {
        disableButtons();
        btn4.classList.remove('display-n');
        winRoundMessage.classList.add('display-n');
        winMessage.classList.remove('display-n');
        winMessage.innerHTML = 'Computer Won!';
    }
}
function disableButtons() {
    btn1.classList.add('display-n');
    btn2.classList.add('display-n');
    btn3.classList.add('display-n');
}
function playAgain() {
    btn1.classList.remove('display-n');
    btn2.classList.remove('display-n');
    btn3.classList.remove('display-n');
    winMessage.classList.add('display-n');
    btn4.classList.add('display-n');
    score = [0, 0];
    player1Score.innerHTML = score[0].toString();
    player2Score.innerHTML = score[1].toString();
    imgBlock1 === null || imgBlock1 === void 0 ? void 0 : imgBlock1.classList.add('display-n');
    imgBlock2 === null || imgBlock2 === void 0 ? void 0 : imgBlock2.classList.add('display-n');
}
//# sourceMappingURL=index.js.map