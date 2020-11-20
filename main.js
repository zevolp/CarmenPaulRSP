var	computerOptions = ["rock", "paper", "scissor"];
var computerChoice = computerOptions[Math.floor(Math.random() * 3)];
var playerChoice = ["rock", "paper", "scissor"];
let pScore = 0;
let cScore = 0;
var playerScoreSpan = document.getElementById("pScore");
var computerScoreSpan = document.getElementById("cScore");
var playerHand = document.getElementById("pHand");
var computerHand = document.getElementById("cHand");

function randomNumber () {


	setTimeout(function(){
		playerHand.style.animation = "shakePlayer 2s ease";
		computerHand.style.animation = "shakeComputer 2s ease";});
		
	computerOptions = ["rock", "paper", "scissor"];
	computerChoice = computerOptions[Math.floor(Math.random() * 3)];
	console.log(computerChoice);
}

function rockClick () {






	playerChoice = "rock";
	console.log(playerChoice);		
	compareHands();
}

function paperClick () {
	playerChoice = "paper";
	console.log(playerChoice);
	compareHands();
}

function scissorClick () {
	playerChoice = "scissor";
	console.log(playerChoice);
	compareHands();	
}



function compareHands() {

	//shake animation
	//playerHand.style.animation = "shakePlayer 2s ease";
	//computerHand.style.animation = "shakeComputer 2s ease";

	if(computerChoice == "rock" && playerChoice == "rock"){
				document.getElementById("result").textContent = "It's a draw!";
				playerHandRock();
				computerHandRock();

			};
	if(computerChoice == "paper" && playerChoice == "rock"){
				document.getElementById("result").textContent = "Paper covers rock. Robot wins!";
				updateScoreComputer();
				playerHandRock();
				computerHandPaper();
			};
	if(computerChoice == "scissor" && playerChoice == "rock"){
				document.getElementById("result").textContent = "Rock breaks scissors. You win!";
				updateScorePlayer();
				playerHandRock();
				computerHandScissors();
			};
	if(computerChoice == "paper" && playerChoice == "paper"){
				document.getElementById("result").textContent = "It's a draw!"
				playerHandPaper();
				computerHandPaper();
			};
	if(computerChoice == "scissor" && playerChoice == "paper"){
				document.getElementById("result").textContent = "Scissors cut paper. Robot wins!";
				updateScoreComputer();
				playerHandPaper();
				computerHandScissors();
			};
	if(computerChoice == "rock" && playerChoice == "paper"){
				document.getElementById("result").textContent = "Paper covers rock. You win!";
				updateScorePlayer();
				playerHandPaper();
				computerHandRock();
			};
	if(computerChoice == "scissor" && playerChoice == "scissor"){
				document.getElementById("result").textContent = "It's a draw!";
				playerHandScissors();
				computerHandScissors();
			};
	if(computerChoice == "rock" && playerChoice == "scissor"){
				document.getElementById("result").textContent = "Rock breaks scissors. Robot wins!";
				updateScoreComputer();
				playerHandScissors();
				computerHandRock();
			};
	if(computerChoice == "paper" && playerChoice == "scissor"){
				document.getElementById("result").textContent = "Scissors cut paper. You win!";
				updateScorePlayer();
				playerHandScissors();
				computerHandPaper();
			};

	return;
	};

function updateScorePlayer(){
	pScore++;
	playerScoreSpan.innerHTML = pScore;
}

function updateScoreComputer(){
	cScore++;
	computerScoreSpan.innerHTML = cScore;
}

function playerHandRock(){
pHand.src = "images/hands/rock_left.png";
}

function playerHandPaper(){
pHand.src = "images/hands/paper_left.png"
}

function playerHandScissors(){
pHand.src = "images/hands/scissor_left.png"
}

function computerHandRock(){
cHand.src = "images/hands/rock_robot.png";
}

function computerHandPaper(){
cHand.src = "images/hands/paper_robot.png"
}

function computerHandScissors(){
cHand.src = "images/hands/scissor_robot.png"
}