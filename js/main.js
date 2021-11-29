var userChoice;
var computerChoice;
var displayCompChoice;
var userWins=0;
var compWins=0;
var count=0;
var userChoices=[];

function choseRock(){
	userChoice="Rock";
	check();
}
function chosePaper(){
	userChoice="Paper";
	check();
}
function choseScissors(){
	userChoice="Scissors";
	check();
}

function check(){
	userChoices.push(userChoice);
	count++;
	computerChoice=Math.floor(Math.random()*3)+1;
	if (computerChoice==1){
		displayCompChoice="Rock";
	}
	else if(computerChoice==2){
		displayCompChoice="Paper";
	}
	else{
		displayCompChoice="Scissors";
	}
	alert("Your choice: "+userChoice+", Computer's choice: "+displayCompChoice);
	if(userChoice==displayCompChoice){
		alert("Draw");
	}
	else if(userChoice=="Rock" && displayCompChoice=="Paper"){
		alert("Computer wins");
		compWins++;
	}
	else if(userChoice=="Rock" && displayCompChoice=="Scissors"){
		alert("You win");
		userWins++;
	}
	else if(userChoice=="Paper" && displayCompChoice=="Scissors"){
		alert("Computer wins");
		compWins++;
	}
	else if(userChoice=="Paper" && displayCompChoice=="Rock"){
		alert("You win");
		userWins++;
	}
	else if(userChoice=="Scissors" && displayCompChoice=="Rock"){
		alert("Computer wins");
		compWins++;
	}
	else if(userChoice=="Scissors" && displayCompChoice=="Paper"){
		alert("You win");
		userWins++;
	}
	document.getElementById("replace").innerHTML="Your wins: "+userWins+", Computer's wins: "+compWins;
	if(count>4 || userWins>0){
		document.getElementById("rules").style.display="none";
		document.getElementById("stop-game").innerHTML="<h1>Game over<br />Sequence of your choices: "+userChoices.toString()+"</h1>";
	}
}