const image = document.getElementById("image");
const winner = document.getElementById("winnerText");
const loser = document.getElementById("loserText");
const game = document.getElementById("game");
let rollButton = document.getElementById("roll");
let restartBtn = document.getElementById("restartBtn");

const maxScore = 20;
let currentScore = 0;
let roll = 0;

const hide = (i)=>{
	i.style.display = "none";
}

const show = (i)=>{
	i.style.display = "block";
}
let diceRoll = () => {
    roll = Math.floor(Math.random()*6 +1);
	image.src=`dice/${roll}.png`
}


hide(winner);
hide(loser);
hide(restartBtn);
show(rollButton);

rollButton.addEventListener("click", () => {
			diceRoll();
			currentScore += roll;
			playerScore.textContent = currentScore;
	
	 if (currentScore >= maxScore){
			playerScore.textContent = `${currentScore} YOU WIN!`;
			show(winner);
			hide(rollButton);
			show(restartBtn);
			score = 0;

	} else if (roll == 1){
			playerScore.textContent = `${roll} YOU LOSE, TRY AGAIN`;
			show(loser);
			hide(rollButton);
			show(restartBtn);
			score = 0;
		}
	});

	restartBtn.addEventListener("click",() =>{
		window.location.reload()
	})



