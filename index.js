var player1Dice = Math.floor(Math.random()*6)+1;
var player2Dice = Math.floor(Math.random()*6)+1;

document.querySelector(".dice1").setAttribute("src","images/"+player1Dice+".png");
document.querySelector(".dice2").setAttribute("src","images/"+player2Dice+".png");

if (player1Dice>player2Dice){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}else if (player1Dice==player2Dice){
  document.querySelector("h1").innerHTML="Draw!";
}else {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
