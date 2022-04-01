const dieOne = document.getElementById("dieOne");
const dieTwo = document.getElementById("dieTwo");
const p1Roll = document.getElementById("p1");
const p2Roll = document.getElementById("p2");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const restart = document.getElementById("restartBtn");
let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");
let winnerText = document.getElementById("winnerText");



const maxScore = 20;
let roll = 0;
let playerOneCurrent = 0;
let playerTwoCurrent = 0;


// ------------------------------------------
let diceRollOne = ()=>{
    roll = Math.floor(Math.random()*6 +1);
	dieOne.src=`dice/${roll}.png`
}

let diceRollTwo = ()=>{
    roll = Math.floor(Math.random() *6 +1);
    dieTwo.src=`dice/${roll}.png`
}

const hide = (i)=>{
	i.style.display = "none";
}

const show = (i)=>{
	i.style.display = "block";
}
const win = (i)=>{
	show(restartBtn);
    hide(p1Roll);
    hide(p2Roll);
    hide(pass1);
    hide(pass2);
	score = 0;
}
const lose = (i)=>{
	show(restartBtn);
    show(restartBtn);
    hide(p1Roll);
    hide(p2Roll);
    hide(pass1);
    hide(pass2);
	score = 0;
}




hide(restartBtn);
hide(winnerText);


p1Roll.addEventListener("click",() =>{
    hide(p2Roll);
    hide(pass2);
    diceRollOne();
    playerOneCurrent += roll;
    playerOneScore.textContent = playerOneCurrent;

if (playerOneCurrent >= maxScore){
    playerOneScore.textContent = `${playerOneCurrent}`;
    winnerText.textContent = "PLAYER ONE YOU WIN!"
    show(winnerText);
    win();
} else if (roll == 1){
    playerOneScore.textContent = `${roll} `;
    winnerText.textContent = "PLAYER TWO WINS!";
    show(winnerText);
    lose();
}
})


p2Roll.addEventListener("click",() =>{
hide(p1Roll);
hide(pass1);
diceRollTwo();
playerTwoCurrent += roll;
playerTwoScore.textContent = playerTwoCurrent;

if (playerTwoCurrent >= maxScore){
    playerTwoScore.textContent = `${playerTwoCurrent}`;
    winnerText.textContent = "PLAYER TWO YOU WIN!";
    show(winnerText);
    win();
}else if (roll == 1){
    playerTwoScore.textContent = `${roll}`;
    winnerText.textContent = "PLAYER ONE WINS!";
    show(winnerText);
    lose();
}
})

restartBtn.addEventListener("click",() =>{
    window.location.reload()
})

pass1.addEventListener("click",() =>{
    show(p2Roll);
    show(pass2);
    hide(p1Roll);
    hide(pass1);
})

pass2.addEventListener("click", () =>{
    show(p1Roll);
    show(pass1);
    hide(p2Roll);
    hide(pass2);
})