const rps:string[] = ['rock', 'paper', 'scissors'];
let player1:string = ''
let computer:string = ''
let score: number[] = [0,0]

const player1Div = document.getElementById('player1') as HTMLInputElement;
const player2Div = document.getElementById('player2') as HTMLInputElement;
const imgBlock1 = document.getElementById('img__block-1') as HTMLInputElement;
const imgBlock2 = document.getElementById('img__block-2') as HTMLInputElement;
const winRoundMessage = document.getElementById('win__block-message') as HTMLInputElement;
const player1Score = document.getElementById('player__1-score') as HTMLInputElement;
const player2Score = document.getElementById('player__2-score') as HTMLInputElement;


function computerChoice(){
    let rndNumber:number = Math.floor(Math.random() * 3)
    imgBlock2?.classList.remove('display-n')
    imgBlock2?.setAttribute('src', `./assets/${rndNumber}.png`)
    computer = rps[rndNumber]
    console.log(computer)
}

function rock(){
    player1 = 'rock'
    imgBlock1?.classList.remove('display-n')
    imgBlock1?.setAttribute('src', './assets/0.png')
    computerChoice()
    checkWin()
}

function paper(){
    player1 = 'paper'
    imgBlock1?.classList.remove('display-n')
    imgBlock1?.setAttribute('src', './assets/1.png')
    computerChoice()
    checkWin()
}

function scissors(){
    player1 = 'scissors'
    imgBlock1?.classList.remove('display-n')
    imgBlock1?.setAttribute('src', './assets/2.png')
    computerChoice()
    checkWin()
}

function checkWin(){
    if(player1 === 'paper' && computer === 'paper'){
        winRoundMessage.innerHTML = "It's a tie!"
    }
    if(player1 === 'paper' && computer === 'rock'){
        winRoundMessage.innerHTML = "Player 1 scored!"
        score = [score[0] + 1, score[1]]
        player1Score.innerHTML = score[0].toString()
        console.log('player 1 scored')
    }
    if(player1 === 'paper' && computer === 'scissors'){
        winRoundMessage.innerHTML = "Computer scored!"
        score = [score[0], score[1] + 1]
        player2Score.innerHTML = score[1].toString()
        console.log('computer scored')
    }

    if(player1 === 'rock' && computer === 'rock'){
        winRoundMessage.innerHTML = "It's a tie!"
    }
    if(player1 === 'rock' && computer === 'scissors'){
        winRoundMessage.innerHTML = "Player 1 scored!"
        score = [score[0] + 1, score[1]]
        player1Score.innerHTML = score[0].toString()
        console.log('player 1 scored')
    }
    if(player1 === 'rock' && computer === 'paper'){
        winRoundMessage.innerHTML = "Computer scored!"
        score = [score[0], score[1] + 1]
        player2Score.innerHTML = score[1].toString()
        console.log('computer scored')
    }

    if(player1 === 'scissors' && computer === 'scissors'){
        winRoundMessage.innerHTML = "It's a tie!"
    }
    if(player1 === 'scissors' && computer === 'paper'){
        winRoundMessage.innerHTML = "Player 1 scored!"
        score = [score[0] + 1, score[1]]
        player1Score.innerHTML = score[0].toString()
        console.log('player 1 scored')
        
    }
    if(player1 === 'scissors' && computer === 'rock'){
        winRoundMessage.innerHTML = "Computer scored!"
        score = [score[0], score[1] + 1]
        player2Score.innerHTML = score[1].toString()
        console.log('computer scored')
    }
}