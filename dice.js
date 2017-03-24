var isgameover = false;
var p1turn = true;
var p2turn = false;
var player1score = 0;
var player2score = 0;
var p1roll = document.getElementById("p1button");
var p2roll = document.getElementById("p2button");
var player1display = document.getElementById("player1")
var player2display = document.getElementById("player2")
var newgame = document.getElementById("reset")
if(!isgameover){
  init();

function init(){
  p1();
  reset();
}
function dicescore(){
  alert("in dicescore")
  var score = 0;
  score = Math.floor(Math.random() * 7)
  console.log(score)
  return score
}

function p1(){
  if(p1turn == true){
    alert("in p1")
    var p1score = 0;
  p1roll.disabled = false;
  p1roll.addEventListener("click",function (){
     p1score = dicescore();
     if(p1score == 1)
     {
       p1turn = false;
       p2turn = true;
       p1roll.disabled = true;
       alert("about to call p2")
       p2();
     }
     else{
     player1score = player1score+p1score;
     alert("just updated p1 score")
     if(player1score >= 100){
       p1roll.disabled = true;
       alert("Player1 wins")
       isgameover = true;
       window.event.cancelBubble = true;
     reset()  }
   }
alert("exiting p1function");
player1display.textContent = player1score;
  })
}
}
function p2(){
  if(p2turn == true){
    alert("in p2")
    var p2score = 0;
  p2roll.disabled = false;
  p2roll.addEventListener("click",function (){
     p2score = dicescore();
     if(p2score == 1)
     {
       p2turn = false;
       p1turn = true;
       p2roll.disabled = true;
       alert("about to call p1")
       p1();
     }
     else{
     player2score = player2score+p2score;
          alert("just updated p2 score")

     if(player2score >= 100){
       p2roll.disabled = true;
       alert("Player2 wins")
       isgameover = true;
       window.event.cancelBubble = true;
       reset()
     }
    }
alert("exiting p2function")  ;
player2display.textContent = player2score;
  })
}
}
function reset(){
   newgame.addEventListener("click",function(){
     alert("In reset")
     isgameover = false;
     p1turn = true;
     p2turn = false;
     player1score = 0;
     player2score = 0;
     player1display.textContent = player1score;
     player2display.textContent = player2score;
     init();
   })}}
