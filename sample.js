// Rules of the Game:
// 1. Any player can take the first turn.
// 2. When a player takes a turn, they start the game by clicking RollDice button.
// 3. They can keep playing until dice rolls '1'
// 4. When dice rolls '1', comtrol is shifted to other player.
// 5. At any point in the game or in the middle, players can restart the game by clicking 'new game ?' button.

var p1turn = true; //Monitors player 1 turn
var p2turn = false; //Monitors player 2 turn
var player1score = 0; //Player 1 score during the play
var player2score = 0; //Player 2 score during the play
var p1roll = document.getElementById("p1button"); //Roll Dice button for Player 1
var p2roll = document.getElementById("p2button"); //Roll Dice button for Player 2
var player1display = document.getElementById("player1") //Score display area for player 1
var player2display = document.getElementById("player2") //Score display area for player 1
var newgame = document.getElementById("reset") //New game button
var p1 = document.getElementById("p11")

//THis function generates a random dice score between 1 and 6
function dicescore(){
  var score = 0;
  score = Math.floor(Math.random() * 6)+1
  console.log(score)
  return score
}
//This function takes the players turn as input and displayes the score when respective buttons are clicked.
//The image for the respective dice roll is also done in this function.
function playerscore(p11turn,p22turn){
    pscore = dicescore()
    switch(pscore){ //Displaying the dice image for respective dice score.
    case 1:
    document.getElementById("images").style.backgroundImage = "url('dice-1.png')";
    break;
    case 2:
    document.getElementById("images").style.backgroundImage = "url('dice-2.png')";
    break;
    case 3:
    document.getElementById("images").style.backgroundImage = "url('dice-3.png')";
    break;
    case 4:
    document.getElementById("images").style.backgroundImage = "url('dice-4.png')";
    break;
    case 5:
    document.getElementById("images").style.backgroundImage = "url('dice-5.png')";
    break;
    case 6:
    document.getElementById("images").style.backgroundImage = "url('dice-6.png')";
    break;
  }
    if(p11turn){
      if(pscore == 1){
        p2roll.disabled = false;
      p1roll.disabled = true;    }
      else{
          player1score = player1score+pscore;
          player1display.textContent = player1score;
          if(player1score >= 100){
            p1roll.disabled = true;
            alert("Player1 wins")

    }
    }
}
  if(p22turn){
    if(pscore == 1){
      p1roll.disabled = false;
      p2roll.disabled = true;  }
      else{
      player2score = player2score+pscore;
      player2display.textContent = player2score;
      if(player2score >= 100){
        p1roll.disabled = true;
        alert("Player2 wins")
        isgameover = true;
}
}
}
}
//Monitors when player 1 button is clicked
p1roll.addEventListener("click", function (){
      p1turn = true;
      p2turn = false;
      p1roll.disabled = false;
      playerscore(p1turn,p2turn)
    })
//Monitors when player 2 button is clicked
p2roll.addEventListener("click", function(){
      p1turn = false;
      p2turn = true;
      p2roll.disabled = false;
      playerscore(p1turn,p2turn)
    })

//Monitors when "new game ?" button is clicked
newgame.addEventListener("click",function(){
     p1turn = true;
     p2turn = false;
     player1score = 0;
     player2score = 0;
     player1display.textContent = 0;
     player2display.textContent = 0;
     document.getElementById("images").style.backgroundImage = "none";
     p1roll.disabled = false;
   })
