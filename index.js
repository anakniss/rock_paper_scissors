window.onload = function() {
	var rock_button = document.getElementById("rock-button");
rock_button.addEventListener("mousedown", () => {
	console.log("rock");
	play(0);
});
	var paper_button = document.getElementById("paper-button");
paper_button.addEventListener("mousedown", () => {
	console.log("paper");
	play(1);
});
	var scissors_button = document.getElementById("scissors-button");
scissors_button.addEventListener("mousedown", () => {
	console.log("scissors");
	play(2);
});
};

var player_wins = 0;
var computer_wins = 0;


function change_draw(){
	var result=document.getElementById("result");

	result.innerHTML="draw";
	result.className="draw-result";
}

function change_won(){
	var result=document.getElementById("result");

	result.innerHTML="win";
	result.className="won-result";

	var show_player_wins=document.getElementById("player-wins");
	player_wins++;
	show_player_wins.innerHTML = computer_wins;
}

function change_lost(){
	var result=document.getElementById("result");

	result.innerHTML="lost";
	result.className="lost-result";

	var show_computer_wins=document.getElementById("computer-wins");
	computer_wins++;
	show_computer_wins.innerHTML = computer_wins;
	
}

function play(chosen_option){
	var computer_option = Math.floor(Math.random() * 3);

	if (chosen_option == computer_option) {
		change_draw()
	}
	if (chosen_option == 0 && computer_option == 1){
		change_lost()
	}
	if (chosen_option == 1 && computer_option == 0){
		change_won();
	}
	if (chosen_option == 2 && computer_option == 0){
		change_lost()
	}
	if (chosen_option == 0 && computer_option == 2){
		change_won();
	}
	if (chosen_option == 1 && computer_option == 2){
		change_lost()
	}
	if (chosen_option == 2 && computer_option == 1){
		change_won();
	}
}

